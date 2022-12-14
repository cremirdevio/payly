import Head from "next/head";
import React, { ReactElement } from "react";
import BtnCTA from "../lib/Buttons/BtnCTA";
import TextInput from "../lib/TextInput";
import styles from "./AuthLayout.module.css";

type Props = {
  children: ReactElement;
};

function AuthLayout({ children }: Props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Payly - Auth</title>
        <meta name="description" content="Get payed for your freelance work" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.halfOne}>
        <img
          className={styles.heroImg}
          src="/images/online-money-transfer.png"
        />
      </div>
      <div className={styles.halfTwo}>
        <div className={styles.halfTwoContainer}>
          <div className={styles.logo}>
            <img className={styles.logoImg} src="/images/logo.png" />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
