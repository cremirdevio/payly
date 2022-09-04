import React from "react";
import BtnCTA from "../../../components/lib/Buttons/BtnCTA";
import AuthLayout from "../../../components/Layout/AuthLayout";
import TextInput from "../../../components/lib/TextInput";
import styles from "./signup.module.css";
import CheckPoint from "../../../components/lib/CheckPoint";

type Props = {};

function signup({}: Props) {
  return (
    <AuthLayout>
      <>
        <CheckPoint progressCount={1} />
        <div className={styles.personalInfo}>Personal Information</div>
        <div className={styles.headerInnerText}>
          Kindly fill in your details to get started
        </div>
        <TextInput
          label="First Name"
          placeholder="Enter your first name here"
        />
        <TextInput
          label="Last Name"
          placeholder="Enter your last name/surname here"
        />
        <TextInput label="Email" placeholder="Enter your email" />
        <TextInput label="Password" placeholder="at least 8 characters" />
        <TextInput
          label="Confirm Password"
          placeholder="Re-type your password"
        />
        <TextInput label="Gender" placeholder="Select your gender" />
        <TextInput label="Phone Number" placeholder="Select your gender" />

        <BtnCTA content="Next" />
        <div className={styles.alternateLogin}>
          Already have an account? Log In
        </div>
      </>
    </AuthLayout>
  );
}

export default signup;
