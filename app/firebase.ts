import { initializeApp, cert, getApp, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import firebaseConfig from "../google-service-account.json";

export const app =
  getApps().length > 0
    ? getApp()
    : initializeApp({
        credential: cert({
          privateKey: firebaseConfig.private_key,
          projectId: firebaseConfig.project_id,
          clientEmail: firebaseConfig.client_email,
        }),
      });

export const firestore = getFirestore(app);
