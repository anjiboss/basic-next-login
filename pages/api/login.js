export default function handler(req, res) {
  if (req.method === "POST") {
    // const { username, password } = req.body;
    const username = req.body.username;
    const password = req.body.password;
    console.log(req.headers);
    console.log(username, password);
    if (username === "test1" && password === "test1") {
      const TOKEN = `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJyZWFjdC11c2Utc2Vzc2lvbi1leGFtcGxlIiwiaWF0IjoxNTQxMDgwMjAwLCJleHAiOjE5MTk3Njg0MDAsImF1ZCI6ImxvY2FsaG9zdDozMDAwIiwic3ViIjoiZ2FicmllbGJiMDMwNkBnbWFpbC5jb20iLCJHaXZlbk5hbWUiOiJBbmppIiwiU3VybmFtZSI6IkJhc2lsaW8gQnJpdG8iLCJSb2xlIjoiQ3JlYXRvciJ9.HD-QmPOtO5RrfIV35RT92AM2X4fWJ6pxv2W5HPYVDyY`;
      res.send(TOKEN);
    } else {
      res.send("failed");
    }
  }
}
