import React, { useState, useEffect } from "react";
import BtnCTA from "../../../components/lib/Buttons/BtnCTA";
import AuthLayout from "../../../components/Layout/AuthLayout";
import TextInput from "../../../components/lib/TextInput";
import styles from "./signup.module.css";
import CheckPoint from "../../../components/lib/CheckPoint";
import Router from "next/router";

type Props = {};

function Signup({}: Props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");

  const [enabled, setEnabled] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const nav = (url: string) => {
    Router.push(url);
  };

  const handleSignIn = () => {
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("phoneNumber", phoneNumber);
    localStorage.setItem("gender", gender);
    setDisabled(false);
    setLoading(true);
    setEnabled(false);
    nav("/auth/signup/confirm-email");
  };

  useEffect(() => {
    if (
      firstName.length > 0 &&
      lastName.length > 0 &&
      email.match(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ) &&
      password.length > 0 &&
      password === confirmPassword &&
      phoneNumber.length > 9 &&
      gender.length > 0
    ) {
      setDisabled(false);
      setLoading(false);
      setEnabled(true);
    } else {
      setDisabled(true);
      setLoading(false);
      setEnabled(false);
    }
  }, [
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    phoneNumber,
    gender,
  ]);

  return (
    <AuthLayout>
      <>
        <CheckPoint progressCount={1} />
        <div className={styles.personalInfo}>Personal Information</div>
        <div className={styles.headerInnerText}>
          Kindly fill in your details to get started
        </div>
        <TextInput
          type={"firstName"}
          state={firstName}
          setState={setFirstName}
          label="First Name"
          placeholder="Enter your first name here"
        />
        <TextInput
          type={"lastName"}
          state={lastName}
          setState={setLastName}
          label="Last Name"
          placeholder="Enter your last name/surname here"
        />
        <TextInput
          type={"email"}
          state={email}
          setState={setEmail}
          label="Email"
          placeholder="Enter your email"
        />
        <TextInput
          type={"password"}
          state={password}
          setState={setPassword}
          label="Password"
          placeholder="at least 8 characters"
        />
        <TextInput
          type={"password"}
          state={confirmPassword}
          setState={setConfirmPassword}
          label="Confirm Password"
          placeholder="Re-type your password"
        />
        <TextInput
          state={gender}
          setState={setGender}
          type={"gender"}
          label="Gender"
          placeholder="Select your gender"
        />
        <TextInput
          type={"phone Number"}
          state={phoneNumber}
          setState={setPhoneNumber}
          label="Phone Number"
          placeholder="Type your phone number"
        />

        <BtnCTA
          OnClickEvent={handleSignIn}
          loading={loading}
          disabled={disabled}
          enabled={enabled}
          content="Next"
        />
        <div
          onClick={() => nav("/auth/signin")}
          className={styles.alternateLogin}
        >
          Already have an account? Log In
        </div>
      </>
    </AuthLayout>
  );
}

export default Signup;
