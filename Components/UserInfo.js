import { useSession } from "next-auth/client";
import React, { useEffect, useState } from "react";

const UserInfo = () => {
  const [session, loading] = useSession();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/secret");
      const result = await res.json();
      console.log(result);
      if (!result.ok) {
        setError(result.error);
      } else {
        setUser(result.user);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      {error ? <div>{error}</div> : <p></p>}
      {user ? (
        <div>
          <h1>Username: {user.name}</h1>
        </div>
      ) : (
        <p></p>
      )}
    </>
  );
};
export default UserInfo;
