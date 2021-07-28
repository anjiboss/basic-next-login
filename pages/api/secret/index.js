import { getSession } from "next-auth/client";

export default async function handler(req, res) {
  const session = await getSession({ req });
  console.log(session);
  if (session) {
    res.json({
      ok: true,
      user: session.user,
    });
  } else {
    res.json({
      ok: false,
      error: "You Must Signed In",
    });
  }
}
