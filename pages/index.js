import { signIn, signOut, useSession } from "next-auth/client";
import Image from "next/image";
import UserInfo from "../Components/UserInfo";

export default function Page() {
  const [session, loading] = useSession();
  return (
    <>
      {!session && (
        <>
          Not signed in <br />
          <button onClick={() => signIn()}>Sign in</button>
          <UserInfo></UserInfo>
        </>
      )}
      {session && (
        <>
          {/* Signed in as {session.user.name} <br /> */}
          {/* <Image
            src={session.user.image}
            width={500}
            height={500}
            alt="avatar"
          /> */}
          <button onClick={() => signOut()}>Sign out</button>
          <UserInfo></UserInfo>
        </>
      )}
    </>
  );
}
