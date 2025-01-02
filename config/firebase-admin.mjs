import admin from "firebase-admin";

let appInitialized = false;

export const initializeFirebaseAdmin = () => {
  if (!appInitialized) {
    const serviceAccount = {
      type: "service_account",
      project_id: "greenway-04",
      private_key_id: "0da4c5e50a7231f105cb45f28a373e6f6c16724d",
      private_key:"-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDJWApTNN3R5uFj\n8e2AIAPwi66FkAnuOmBhKXqDThXKoFN86bv0g8WCnByXhkGRMjn2DpJpduChwGai\nhiQQOtnYivPFCyx7D1MxCb3U+acDtLcnaIG/R27timi0zITvCWzgkbX1ZoJzBk+d\nC6W5LYbIP3q/fYMJcpucJB4V1v1ktCDzUzNx4jp9/Z9cxpmc66AwZ2mDg1xiG/GO\npVH0tMs6K+0ruNqYml7gPKNVCx3MidRUUL1VBU+B3FS2K/cn1C/19woT63YK2LsT\ntTxLeiHrTEFFsOSvgjp6LsfDlb/a0y/C2+S3VsRSA4/E3w0JTfumMeAq7Q1mnPwt\nNomhinBfAgMBAAECggEAOWIEH06z4XzBw/BRVfDJ7qaAqMQycFjm2wotRnrcrxEe\nej1LOhbMFbtUUsMKsMz1w/DHPZOJ1c+18J/2a0G6kIKZkxDqLnBhr1otZiN4vA+n\nG24nfFJphP2rdcvMHyw6gY5Fo5kBmLK1wfZt1ubowO2GmEi3LdwiCVAp2uOY+Df0\nsyW7JMD0Hi2JOlp/yLj9fyotHxnmYRk9x7PY8ha306MmWdbkRJnwlRv6Uh0cD68w\nTge1J9V3ycaot4agEHuxS3+6jYeLoxlyR97flqzDrrnvifnVEQUmlyB73MV5SCgA\nV2smS/wfJ5D//f14+29Egexl5dzUnvVbCzZ0u5gTkQKBgQDoC1b3KFqTrdS0Ca8Y\n2sVq9qlipnaaKtluYI7JZfzgb1CU6geJPW+Wa0Zoze3QFhz1wRQyhfdxbLInNxWD\n1f//soqeb9bXwwcurlgyGU/ndqv3rGRtJxBu8IUaBiKFCcjzPLFND87DEBUn7z05\nY6ujYsc/BrF8p6vSqQpkSuhFfQKBgQDeIVM8qhLIWY2chEzKNKNlKrmcDJFwg76K\nEyyzZzjyPlt34Fz/SrCQfqhw/nlLrFkUAv6oQWh/HFcubQhBt12wlvYHE6VPU0oP\nTBnqWXgEvDQy2R9OIRk7gvyrHmNGeMGIfZDlyk+vaOiuvE+T39qKPxKxxumY3NlJ\nTmysnZeECwKBgBLbiQ/A+ctynwyalN5COTT+IrnfqVfSD6WGt1Pqs+hRY40Wj9I5\nae4hfbFauu7kPSpDrK6GcJuJJ9lEAr2aEJnpGpbRo/YY5WaHyKcZo4K+BC+2lNrC\nB/XcGhUJVpjVOL17uzT2CemUTwPVz3XwgaxfhK28j4P/5FjUYAHSjJnJAoGAXFOt\nrUFjnTLb0XqMEF/gqmQf0eTHbuTThcCCi+8TlFym2CTBgrsguG5sxMqA0BtKyy6T\neov1SyAUfI+FJwt4PbYBfN+FjnsoBUO0YdveLtmrOJdWk7reKgY/z0BKMzht+LV4\nTIrSpC4OyNIsoWIiC+Q7ePkcjxT8m6OlN/ooyBECgYEA5EtcX1WqzBYYVYvwHdAl\nDdVD3jeNWLcdouBQcqqVzof2OGmXqSvm5yXSzg2DuLhImTQNI/LkCBsEqLDoPO4H\nRo75meQi1SdFhTaEZrn9HXpiTTr3nxTpd51sm6DlpDRH/3Fg6fTxcMcCvb9nNlGv\nw0SFqT+x5m7daeYYsOyp1xU=\n-----END PRIVATE KEY-----\n",
      client_email:"firebase-adminsdk-79ug9@greenway-04.iam.gserviceaccount.com",
      client_id: "117000146453084674747",
      auth_uri: "https://accounts.google.com/o/oauth2/auth",
      token_uri: "https://oauth2.googleapis.com/token",
      auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
      client_x509_cert_url:
        "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-79ug9%40greenway-04.iam.gserviceaccount.com",
      universe_domain: "googleapis.com",
    };

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
    appInitialized = true;
  }
};

export const firebaseAdmin = admin;
