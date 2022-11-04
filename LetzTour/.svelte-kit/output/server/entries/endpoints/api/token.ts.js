import cookie__default from "cookie";
const post = async (event) => {
  const payload = await event.request.json();
  const token = payload.token || "";
  return {
    headers: {
      "set-cookie": cookie__default.serialize("token", token, {
        path: "/",
        httpOnly: true
      })
    }
  };
};
export { post };
