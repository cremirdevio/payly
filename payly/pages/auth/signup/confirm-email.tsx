import React from "react";
import BtnCTA from "../../../components/lib/Buttons/BtnCTA";
import BtnCTATransparent from "../../../components/lib/Buttons/BtnCTATransparent";
import AuthLayout from "../../../components/lib/Layout/AuthLayout";
import styles from "./confirm-email.module.css";

type Props = {};

function ConfirmEmail({}: Props) {
  return (
    <AuthLayout>
      <>
        <div className={styles.headerText}>Verify your email </div>
        <div className={styles.headerInnerText}>
          We are about to send you a 6-digit code to the <br /> email
        </div>
        <div className={styles.email}>Ajokeakinremi43@gmail.com</div>
        <BtnCTA content="Continue" />
        <BtnCTATransparent content="Go back" />
      </>
    </AuthLayout>
  );
}

export default ConfirmEmail;