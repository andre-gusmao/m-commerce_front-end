// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  storeCode: "1601476873248",
  endpointYaPay: "https://sandbox.gateway.yapay.com.br/checkout/api/v3/transacao",
  userYaPay: "MBSISTEMAS",
  passwordYaPay: "k%3Fab3A",
  // endpointURL: "https://kioskwide.com.br/api/"//000webhost
  // endpointURL: "http://54.232.47.219/api/"//aws
  endpointURL: "http://192.168.0.20/api/"//local
  // endpointURL: "http://appkioskwide1.hospedagemdesites.ws/api/"//locaweb
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.