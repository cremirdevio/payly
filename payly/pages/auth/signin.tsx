import React, { useState, useEffect } from "react";
import BtnCTA from "../../components/lib/Buttons/BtnCTA";
import AuthLayout from "../../components/Layout/AuthLayout";
import TextInput from "../../components/lib/TextInput";
import styles from "./signin.module.css";
import Router from "next/router";

type Props = {};

function Signin({}: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [enabled, setEnabled] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const nav = (url: string) => {
    Router.push(url);
  };

  useEffect(() => {
    if (
      email.match(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ) &&
      password.length > 0
    ) {
      setDisabled(false);
      setLoading(false);
      setEnabled(true);
    } else {
      setDisabled(true);
      setLoading(false);
      setEnabled(false);
    }
  }, [email, password]);

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
          OnClickEvent={() => nav("/")}
          loading={loading}
          disabled={disabled}
          enabled={enabled}
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
