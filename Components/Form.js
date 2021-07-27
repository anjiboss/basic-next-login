import React, { useState } from "react";
import { useSession } from "react-use-session";

const Form = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Session
  // ***
  const { session, saveJWT, clear } = useSession("jwt-test-session");

  const formHandler = (e) => {
    e.preventDefault();
    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => res.text())
      .then((token) => {
        setUsername("");
        setPassword("");
        console.log(token);
        if (token !== "failed") {
          saveJWT(token);
        }
      });
  };
  return (
    <>
      {session ? (
        <div>
          <p>
            You are logged in as: <code>{session.GivenName}</code>
          </p>
          <button onClick={clear}>Log out</button>
        </div>
      ) : (
        <form onSubmit={formHandler}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
      )}
    </>
  );
};
export default Form;
