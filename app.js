import dotenv from "dotenv";
import nodemailer from "nodemailer";
import { google } from "googleapis"; // Pour générer dynamiquement un access token
import { getDate } from './getDate.js';
import { getWeather } from './getWeather.js';

dotenv.config();

let weather = await getWeather(); // Récupère l'information sur la météo (string)

// Récupère les variables d'environnement
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

// Créé un client OAuth
const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

// Créé un access token à partir du refresh token
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

async function sendMail() {
  
  try {
const accessToken = await oAuth2Client.getAccessToken();

// Créé un objet transporter qui contient le service utilisé (Gmail) et les identifiants nécéssaires à l'authentification
const transport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: 'api-mfa@geoplc.com',
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    refreshToken: REFRESH_TOKEN,
    accessToken: accessToken
  }
});

// Définit les options de l'e-mail (expéditeur, destinataire, objet, contenu, pièce(s)-jointe(s), ...)
const mailOptions = {
  from: 'API MFA <api-mfa@geoplc.com>',
  to: 'tpougin@geoplc.com',
  subject: `Ceci est un test d'utilisation de l'API Gmail`,
  text: getDate() + ' ' + weather,
  attachments: [{
    filename: 'test.txt',
    content: 'Hello World !'
  }]
};

// Envoi du mail
const result = await transport.sendMail(mailOptions);
return result;

  } catch (error) {
    return error;
  }
};

sendMail()
.then((result) => console.log('Email envoyé...', result))
.catch((error) => console.log(error.message)); 
