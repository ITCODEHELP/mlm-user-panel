/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  API: "http://3edabdda9134.ngrok.io/v1/user",
  // Admin:'http://3edabdda9134.ngrok.io/v1/admin',
  // OTM:'http://api.otmline.com:3000',
  firebaseConfig: {
    apiKey: "AIzaSyAxQpkXdtrTTWoGA8F8VJD264Yyw8XcQE4",
    authDomain: "mlm-money-project.firebaseapp.com",
    projectId: "mlm-money-project",
    storageBucket: "mlm-money-project.appspot.com",
    messagingSenderId: "306959105578",
    appId: "1:306959105578:web:f3c69b304267fa045f4d53",
    measurementId: "G-S78BJBHHHT",
  },
};
