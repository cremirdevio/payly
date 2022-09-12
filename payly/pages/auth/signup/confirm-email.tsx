import React, { useEffect, useState } from "react";
import BtnCTA from "../../../components/lib/Buttons/BtnCTA";
import BtnCTATransparent from "../../../components/lib/Buttons/BtnCTATransparent";
import AuthLayout from "../../../components/Layout/AuthLayout";
import styles from "./confirm-email.module.css";
import Router from "next/router";

type Props = {};

function ConfirmEmail({}: Props) {
  const [email, setEmail] = useState("");

  const [enabled, setEnabled] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let email = localStorage.getItem("email");
    if (email) {
      setEmail(email);
    }
  }, []);

  const nav = (url: string) => {
    Router.push(url);
  };

  const handleConfirm = () => {
    nav("otp");
    setDisabled(false);
    setLoading(true);
    setEnabled(false);
  };

  return (
    <AuthLayout>
      <>
        <div className={styles.headerText}>Verify your email </div>
        <div className={styles.headerInnerText}>
          We are about to send you a 6-digit code to the <br /> email
        </div>
        <div className={styles.email}>{email}</div>
        <BtnCTA
          OnClickEvent={handleConfirm}
          loading={loading}
          disabled={disabled}
          enabled={enabled}
          content="Continue"
        />
        <BtnCTATransparent
          onClickEvent={() => nav("signup")}
          content="Go back"
        />
      </>
    </AuthLayout>
  );
}

export default ConfirmEmail;
