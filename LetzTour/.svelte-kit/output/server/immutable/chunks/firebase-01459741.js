import admin from "firebase-admin";
let FIREBASE_CLIENT_CONFIG = {};
let FIREBASE_SERVER_CONFIG = {};
if (process && process.env && process.env["VITE_FIREBASE_CLIENT_CONFIG"]) {
  FIREBASE_CLIENT_CONFIG = JSON.parse(process.env["VITE_FIREBASE_CLIENT_CONFIG"] || "{}");
  FIREBASE_SERVER_CONFIG = JSON.parse(process.env["VITE_FIREBASE_SERVER_CONFIG"] || "{}");
} else {
  FIREBASE_CLIENT_CONFIG = JSON.parse({}.VITE_FIREBASE_CLIENT_CONFIG || "{}");
  FIREBASE_SERVER_CONFIG = JSON.parse({}.VITE_FIREBASE_SERVER_CONFIG || "{}");
}
function initializeFirebase() {
  if (!admin.apps.length) {
    const serviceAccount = FIREBASE_SERVER_CONFIG;
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: `https://${serviceAccount.project_id}.firebaseio.com`
    });
  }
}
async function decodeToken(token) {
  if (!token || token === "null" || token === "undefined")
    return null;
  try {
    initializeFirebase();
    return await admin.auth().verifyIdToken(token);
  } catch (err) {
    return null;
  }
}
async function getDocuments(collectionPath, uid) {
  if (!uid)
    return [];
  initializeFirebase();
  const db = admin.firestore();
  const querySnapshot = await db.collection(collectionPath).where("uid", "==", uid).get();
  const list = [];
  querySnapshot.forEach((doc) => {
    const document = doc.data();
    document._id = doc.id;
    list.push(document);
  });
  return list;
}
async function createDocument(collectionPath, uid) {
  initializeFirebase();
  const db = admin.firestore();
  const doc = await (await db.collection(collectionPath).add({ uid })).get();
  const document = doc.data();
  document._id = doc.id;
  return document;
}
export { FIREBASE_CLIENT_CONFIG as F, createDocument as c, decodeToken as d, getDocuments as g };
