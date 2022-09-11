import React, { useEffect, useState } from "react";
import BtnCTA from "../../../components/lib/Buttons/BtnCTA";
import BtnCTATransparent from "../../../components/lib/Buttons/BtnCTATransparent";
import AuthLayout from "../../../components/Layout/AuthLayout";
import styles from "./confirm-email.module.css";

type Props = {};

function ConfirmEmail({}: Props) {
  const [email, setEmail] = useState("");
  useEffect(() => {
    let email = localStorage.getItem("email");
    if (email) {
      setEmail(email);
    }
  }, []);

  return (
    <AuthLayout>
      <>
        <div className={styles.headerText}>Verify your email </div>
        <div className={styles.headerInnerText}>
          We are about to send you a 6-digit code to the <br /> email
        </div>
        <div className={styles.email}>{email}</div>
        <BtnCTA
          loading={false}
          disabled={false}
          enabled={true}
          content="Continue"
        />
        <BtnCTATransparent content="Go back" />
      </>
    </AuthLayout>
  );
}

export default ConfirmEmail;
