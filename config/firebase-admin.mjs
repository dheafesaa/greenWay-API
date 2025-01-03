import admin from "firebase-admin";

let appInitialized = false;

export const initializeFirebaseAdmin = () => {
  if (!appInitialized) {
    const serviceAccount = {
      type: "service_account",
      project_id: "mostgreen",
      private_key_id: "05e0971d8c2ac6b79297303a92f1d42482fe3bf4",
      private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCUVn4roNlOCuvV\nd2Qg0JTP89kXQ9ffcIFTzij+nHGOe1AbtflZsUa7S1XraCARQYc3ElgQJfoIedoP\ngXgP0CGlrCJ1ISAfJxT3oiAmwxtrvVygf2CWqLVQ/7YS/lJRRSvy8515UKerPmtd\nSe9VQFJoFZQcVZlBGklm1Hm9uCl+rdFQwATRkhZD2rhMVmtYlGz3e0a32rM2/1FV\nh4UxrsGW+r/F45RcDb89bhosRf8Yc17pT4J4lujDVVZvrt498tiPWsWKNQUKbb+t\nJeneadFdyLzuwftXf1EchxzExqqP+MOohOZiafc/GggnQqKvtX8unHGh+YgtMeSQ\nPI8gHAr5AgMBAAECggEADDwkFPoj4k2BTS6XSiOaGprczY/xdsMDT8PB2tpRfXSL\nU3XLdsvp7xnUIOIKPxIeEntHWzGesWNHip7dpcQ/ejg78VhFm3wwPQqYx0mxcc4B\nHVXURCjvJ5qnzGJArOZdLSFN3Es8QSIZXezyuh/fjCk3eazPwrBl3H7q+ax+c63H\nUiL48BIRv9EmNcUqIBtQaEQb1UMwfApVF/01Fi3K+OBBHd6nyFzGzrAZeXxM04r0\n4ZC5BXHHl0He1tMrk09kZAwPnUeLwcic9Zy4Bt3lzpZN8n80bjnIJ1npCQ6FAQD9\nTrg8qHzJDcx/endfRoi0KIqILpTP3+QPg6DjDg3E3wKBgQDOgz5cE3R3al9iM2m4\nw+Wh8BskljudM90XmdMB+52lme3UhSE9r9vSoaW6FPWqW8SHLVxi3W5xNC11i4e4\n4gwSNUWqmN2LOg2XCbSEdYDC6COllPdMquYfxozfZH3XBc1rs6dSXdesn1ryXNJJ\nIZNcUSn9lQ4zGYMJjhtF09fjVwKBgQC34nLzWt/NODR2SB+7ZoKtZt/hR2/JQX2f\nU7zL++RM5wqZRLNjuCBw0Da264p5KedMZwegOcX7YbdraFT4fLMAcNc/G+j2I84R\nX9pcdHInLoeh1p+QsvtZrffCPmuJqIbfxc/lrZlYl0pU5ghcfvSpivxaSB5XGo2d\nJfZAd95iLwKBgDldkcwIB3lIjjh8KakOmdJTHWcbaHHxvz/YFhpd59vhl4RKewJk\nwH6RMrUvL1LkbQJT4m8ALba6lMorOUdtW4cPT0vlbN1JAg9rvb5x2ZPK4mQTrmKY\nspYvFGDVzHMXhImffSJPOSMVnTDoAe4YqpOhZDWx2yDsvE7CL+dEwpq/AoGAEvQJ\nSyILvVhUt/hZJPS89WiMHOlDEWhprVlxNUlCT9bklcWqA9Y/qcEcUqBWhoSWLZ7U\n/2PVD0MUJ8L6Nx6LSLlYxk13Jp+sJshNdogeGAHIwxqfGcgI9kZjKidK6EZxmHEI\nK7FIBAScCcIoDHideTg1KI0Ua3/2JsN57U0to8sCgYEAoW7AyfDt/CwyTb3XYG+n\nxTsWpau6wdTQhKmXM9hFye93ZrMzHkD1gnhJOj7E0nLZ/Uq6m5ILp6fy+Mel71T0\nutsfj7X4OUJ7qBpw2ZQtbs75+BES+/pyLJo6Q9/4bRguKyKfd5DSEfk8Dja/PRhe\na2Ky/tXaMOMieKgFnu+qTZw=\n-----END PRIVATE KEY-----\n",
      client_email: "firebase-adminsdk-i4bt1@mostgreen.iam.gserviceaccount.com",
      client_id: "116120951821913259334",
      auth_uri: "https://accounts.google.com/o/oauth2/auth",
      token_uri: "https://oauth2.googleapis.com/token",
      auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
      client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-i4bt1%40mostgreen.iam.gserviceaccount.com",
      universe_domain: "googleapis.com",
    };

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
    appInitialized = true;
  }
};

export const firebaseAdmin = admin;
