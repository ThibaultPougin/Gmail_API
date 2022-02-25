# Gmail_API

1. Creer un nouveau projet sur Google Developer Console (https://console.cloud.google.com/getting-started).
2. Créer les identifiants OAuth pour identifier notre application sur les serveurs OAuth (Create credentials => OAuth client ID).
3. Configurerl'écran de consentement (Configure consent screen) pour créer un Client ID et un Client Secret.
4. Indiquer l'adresse de redirection suivante : https://developers.google.com/oauthplayground.
5. Aller sur https://developers.google.com/oauthplayground, indiquer son Client ID et Client Secret.
6. Authoriser Gmail API v1 => https://mail.google.com/ et confirmer l'accès au compte google.
7. Récupérer le refresh token (Exchange authorization code for tokens).