import React, { useState, useEffect } from "react";
import BtnCTA from "../../../components/lib/Buttons/BtnCTA";
import BtnCTATransparent from "../../../components/lib/Buttons/BtnCTATransparent";
import AuthLayout from "../../../components/Layout/AuthLayout";
import TextInput from "../../../components/lib/TextInput";
import styles from "./bank.module.css";
import CheckPoint from "../../../components/lib/CheckPoint";
import Router from "next/router";

function Bank() {
  const [NIN, setNIN] = useState("");
  const [accountName, setAccountName] = useState("");
  const [BVN, setBVN] = useState("");
  const [bankName, setBankName] = useState("");

  const [enabled, setEnabled] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const nav = (url: string) => {
    Router.push(url);
  };

  const handleBank = () => {
    localStorage.setItem("NIN", NIN);
    localStorage.setItem("accountName", accountName);
    localStorage.setItem("BVN", BVN);
    localStorage.setItem("bankName", bankName);

    nav("residency");
    setDisabled(false);
    setLoading(true);
    setEnabled(false);
  };

  useEffect(() => {
    if (
      NIN.length > 9 &&
      accountName.length > 0 &&
      BVN.length > 10 &&
      bankName.length > 0
    ) {
      setDisabled(false);
      setLoading(false);
      setEnabled(true);
    } else {
      setDisabled(true);
      setLoading(false);
      setEnabled(false);
    }
  }, [NIN, accountName, BVN, bankName]);

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
        <BtnCTA
          OnClickEvent={handleBank}
          loading={loading}
          disabled={disabled}
          enabled={enabled}
          content="Next"
        />
        <BtnCTATransparent onClickEvent={() => nav("otp")} content="Back" />
        <div className={styles.spaceSection}></div>
      </>
    </AuthLayout>
  );
}

export default Bank;
