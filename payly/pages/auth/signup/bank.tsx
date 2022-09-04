import React from "react";
import BtnCTA from "../../../components/lib/Buttons/BtnCTA";
import BtnCTATransparent from "../../../components/lib/Buttons/BtnCTATransparent";
import AuthLayout from "../../../components/Layout/AuthLayout";
import TextInput from "../../../components/lib/TextInput";
import styles from "./bank.module.css";
import CheckPoint from "../../../components/lib/CheckPoint";

function bank() {
  return (
    <AuthLayout>
      <>
        <CheckPoint progressCount={2} />
        <div className={styles.headerText}>Identity {"&"} Banking details</div>
        <div className={styles.IDHeader}>Identity verification</div>
        <TextInput label="" placeholder="National Identification Number(NIN)" />
        <div className={styles.headerTextTwo}>Enter your banking details</div>
        <TextInput
          label="Account  name"
          placeholder="Enter your account name"
        />
        <TextInput label="Bank  name" placeholder="Select your bank " />
        <TextInput label="BVN" placeholder="Enter your 11 digit BVN Number" />
        <BtnCTA content="Next" />
        <BtnCTATransparent content="Back" />
        <div className={styles.spaceSection}></div>
      </>
    </AuthLayout>
  );
}

export default bank;
