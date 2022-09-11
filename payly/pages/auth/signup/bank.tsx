import React, { useState } from "react";
import BtnCTA from "../../../components/lib/Buttons/BtnCTA";
import BtnCTATransparent from "../../../components/lib/Buttons/BtnCTATransparent";
import AuthLayout from "../../../components/Layout/AuthLayout";
import TextInput from "../../../components/lib/TextInput";
import styles from "./bank.module.css";
import CheckPoint from "../../../components/lib/CheckPoint";

function bank() {
  const [NIN, setNIN] = useState("");
  const [accountName, setAccountName] = useState("");
  const [BVN, setBVN] = useState("");
  const [bankName, setBankName] = useState("");

  return (
    <AuthLayout>
      <>
        <CheckPoint progressCount={2} />
        <div className={styles.headerText}>Identity {"&"} Banking details</div>
        <div className={styles.IDHeader}>Identity verification</div>
        <TextInput
          state={NIN}
          setState={setNIN}
          type={"NIN"}
          label=""
          placeholder="National Identification Number(NIN)"
        />
        <div className={styles.headerTextTwo}>Enter your banking details</div>
        <TextInput
          setState={setAccountName}
          state={accountName}
          type={"name"}
          label="Account name"
          placeholder="Enter your account name"
        />
        <TextInput
          setState={setBankName}
          state={bankName}
          type={"Bank Name"}
          label="Bank name"
          placeholder="Select your bank "
        />
        <TextInput
          setState={setBVN}
          state={BVN}
          type={"BVN"}
          label="BVN"
          placeholder="Enter your 11 digit BVN Number"
        />
        <BtnCTA content="Next" />
        <BtnCTATransparent content="Back" />
        <div className={styles.spaceSection}></div>
      </>
    </AuthLayout>
  );
}

export default bank;
