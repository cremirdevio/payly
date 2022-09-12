import React, { useState, useEffect } from "react";
import BtnCTA from "../../../components/lib/Buttons/BtnCTA";
import AuthLayout from "../../../components/Layout/AuthLayout";
import styles from "./confirm-email.module.css";
import OtpInput from "react-otp-input";
import Router from "next/router";

type Props = {};

function OTP({}: Props) {
  const [otp, setOTP] = useState("");

  const [enabled, setEnabled] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const nav = (url: string) => {
    Router.push(url);
  };

  const handleOTP = () => {
    setDisabled(false);
    setLoading(true);
    setEnabled(false);
    nav("bank");
  };

  useEffect(() => {
    if (otp === "012345") {
      setDisabled(false);
      setLoading(false);
      setEnabled(true);
    } else {
      setDisabled(true);
      setLoading(false);
      setEnabled(false);
    }
  }, [otp]);

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
          OnClickEvent={handleOTP}
          loading={loading}
          disabled={disabled}
          enabled={enabled}
          content="Next"
        />
        <div className={styles.resend}>Resend OTP in 10 secs</div>
      </>
    </AuthLayout>
  );
}

export default OTP;
