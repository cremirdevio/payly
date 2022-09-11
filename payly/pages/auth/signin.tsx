import React, { useState } from "react";
import BtnCTA from "../../components/lib/Buttons/BtnCTA";
import AuthLayout from "../../components/Layout/AuthLayout";
import TextInput from "../../components/lib/TextInput";
import styles from "./signin.module.css";

type Props = {};

function Signin({}: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <AuthLayout>
      <>
        <div className={styles.headerText}>Log In</div>
        <div className={styles.headerInnerText}>
          Welcome back to Payly. It`s good to have you back
        </div>
        <TextInput
          type={"email"}
          state={email}
          setState={setEmail}
          label={"Email address"}
          placeholder={"Enter your email here"}
        />
        <TextInput
          type={"password"}
          state={password}
          setState={setPassword}
          label={"Password"}
          placeholder={"Enter your password here"}
        />
        <div className={styles.forgotPassword}>Forgot password?</div>
        <BtnCTA
          loading={false}
          disabled={false}
          enabled={true}
          content="Log In"
        />
        <div className={styles.alternateSignUp}>
          Already have an account? Sign up
        </div>
      </>
    </AuthLayout>
  );
}

export default Signin;
