import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Form from "../Components/Form";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Login</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Form></Form>
      </main>
    </div>
  );
}
