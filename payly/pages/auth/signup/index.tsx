import React, { useState } from "react";
import BtnCTA from "../../../components/lib/Buttons/BtnCTA";
import AuthLayout from "../../../components/Layout/AuthLayout";
import TextInput from "../../../components/lib/TextInput";
import styles from "./signup.module.css";
import CheckPoint from "../../../components/lib/CheckPoint";

type Props = {};

function signup({}: Props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");

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
          placeholder="Select your gender"
        />

        <BtnCTA content="Next" />
        <div className={styles.alternateLogin}>
          Already have an account? Log In
        </div>
      </>
    </AuthLayout>
  );
}

export default signup;
