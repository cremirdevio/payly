import { CircularProgress } from "@mui/material";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import styles from "./Pay.module.css";

type Props = {};

function Pay({}: Props) {
  const [stage, setState] = useState(1);

  useEffect(() => {
    if (stage === 2) {
      setTimeout(() => {
        setState(3);
      }, 3000);
    }
  }, [stage]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Payly - Make Payment</title>
        <meta name="description" content="Get payed for your freelance work" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.containerInner}>
        {stage === 1 && (
          <>
            <div className={styles.s1Title}>Connect wallet</div>
            <div className={styles.s1Divider}></div>
            <div className={styles.s1Text}>
              You are about to pay $500.00 to Yash group
            </div>
            <div onClick={() => setState(2)} className={styles.s1TrustWallet}>
              <img
                className={styles.paymentImg}
                src="/images/trustwallet.png"
              />
            </div>
            <div onClick={() => setState(2)} className={styles.s1TrustWallet}>
              <img className={styles.paymentImg} src="/images/metamask.png" />
            </div>
            <div onClick={() => setState(2)} className={styles.s1ConnectWallet}>
              Connect wallet
            </div>
          </>
        )}
        {stage === 2 && (
          <>
            <div className={styles.s2Wait}>Please, wait</div>
            <div className={styles.s2Loading}>
              <CircularProgress
                sx={{ animationDuration: "350ms" }}
                style={{ color: "#8981E1" }}
                size={20}
              />
            </div>
            <div className={styles.s2Connecting}>Connecting...</div>
          </>
        )}
        {stage === 3 && (
          <>
            <div className={styles.s3Image}>
              <img className={styles.successImg} src="/images/success.png" />
            </div>
            <div className={styles.s3PaymentText}>Payment Successful</div>
            <div className={styles.s3Text}>You paid $500.00 to Yash group</div>
            <div className={styles.s3Receipt}>Receipt</div>
          </>
        )}
      </div>
    </div>
  );
}

export default Pay;
