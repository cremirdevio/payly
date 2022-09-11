import React, { useState } from "react";
import BtnCTA from "../../../components/lib/Buttons/BtnCTA";
import AuthLayout from "../../../components/Layout/AuthLayout";
import styles from "./confirm-email.module.css";
import OtpInput from "react-otp-input";

type Props = {};

function OTP({}: Props) {
  const [otp, setOTP] = useState("");
  return (
    <AuthLayout>
      <>
        <div className={styles.headerText}>Verify your email </div>
        <div className={styles.headerInnerText}>
          We just sent you a 6-digit OTP to your email
        </div>
        <div className={styles.otp}>
          <OtpInput
            inputStyle={styles.inputStyle}
            className={styles.otpInner}
            value={otp}
            onChange={(otp: any) => setOTP(otp)}
            numInputs={6}
          />
        </div>
        <BtnCTA
          loading={false}
          disabled={false}
          enabled={true}
          content="Next"
        />
        <div className={styles.resend}>Resend OTP in 10 secs</div>
      </>
    </AuthLayout>
  );
}

export default OTP;
