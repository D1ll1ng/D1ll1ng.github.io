import * as cookie from "cookie";
import { p as protectedPages } from "./constants-136cf0bc.js";
import { F as FIREBASE_CLIENT_CONFIG, d as decodeToken } from "./firebase-01459741.js";
import "firebase-admin";
const getSession = async (event) => {
  const locals = event.locals;
  const decodedToken = locals.decodedToken;
  if (decodedToken) {
    const { uid, name, email } = decodedToken;
    return {
      user: { name: name || null, email: email || null, uid },
      firebaseClientConfig: FIREBASE_CLIENT_CONFIG
    };
  } else {
    return { user: void 0, firebaseClientConfig: FIREBASE_CLIENT_CONFIG };
  }
};
const handle = async ({ event, resolve }) => {
  const cookies = cookie.parse(event.request.headers.get("cookie") || "");
  event.locals.decodedToken = await decodeToken(cookies.token);
  const response = await resolve(event);
  if (!event.locals.decodedToken && protectedPages.has(event.url.pathname)) {
    response.headers.set("Location", "/403");
    response.headers.set("status", "302");
  }
  return response;
};
export { getSession, handle };
