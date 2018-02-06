// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyACL0IYfzV2mRhYdjrREcJMYZXexZsRcaA",
    authDomain: "firechat-d24b8.firebaseapp.com",
    databaseURL: "https://firechat-d24b8.firebaseio.com",
    projectId: "firechat-d24b8",
    storageBucket: "firechat-d24b8.appspot.com",
    messagingSenderId: "308118614775"
  }
};
