const weekday = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];
const allMonth = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"];

const today = new Date();
const dayOfWeek = weekday[today.getDay()];
const day = String(today.getDate()).padStart(2, '0');
const month = allMonth[today.getMonth()];
const year = today.getFullYear();
const hour = today.getHours();
const minute = today.getMinutes();
const second = today.getSeconds();

function getDate() {

    return `Bonjour Thibault, aujourd'hui nous sommes le ${dayOfWeek} ${day} ${month} ${year} et il est actuellement ${hour}h ${minute}minutes et ${second}secondes.`;

};


module.exports = getDate;
