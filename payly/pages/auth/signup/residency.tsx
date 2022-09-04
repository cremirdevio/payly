import React from "react";
import BtnCTA from "../../../components/lib/Buttons/BtnCTA";
import BtnCTATransparent from "../../../components/lib/Buttons/BtnCTATransparent";
import AuthLayout from "../../../components/Layout/AuthLayout";
import TextInput from "../../../components/lib/TextInput";
import styles from "./residency.module.css";
import CheckPoint from "../../../components/lib/CheckPoint";

type Props = {};

function residency({}: Props) {
  return (
    <AuthLayout>
      <>
        <CheckPoint progressCount={3} />
        <div className={styles.headerText}>Proof of Residency</div>
        <TextInput
          label="Street name"
          placeholder="Enter your street name and number"
        />
        <TextInput
          label="City/town"
          placeholder="Select your city or town name "
        />
        <TextInput
          label="State of residence"
          placeholder="State of residence"
        />
        <TextInput label="State of origin" placeholder="State of origin" />
        <TextInput label="Country" placeholder="Country of residence" />
        <BtnCTA content="Submit" />
        <BtnCTATransparent content="Back" />
        <div className={styles.spaceSection}></div>
      </>
    </AuthLayout>
  );
}

export default residency;
