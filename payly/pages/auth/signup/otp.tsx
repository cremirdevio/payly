import React from "react";
import BtnCTA from "../../../components/lib/Buttons/BtnCTA";
import AuthLayout from "../../../components/Layout/AuthLayout";
import styles from "./confirm-email.module.css";

type Props = {};

function OTP({}: Props) {
  return (
    <AuthLayout>
      <>
        <div className={styles.headerText}>Verify your email </div>
        <div className={styles.headerInnerText}>
          We just sent you a 6-digit OTP to your email
        </div>
        <div className={styles.otp}></div>
        <BtnCTA content="Next" />
        <div className={styles.resend}>Resend OTP in 10 secs</div>
      </>
    </AuthLayout>
  );
}

export default OTP;
