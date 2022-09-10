import React, { useState } from "react";
import BtnCTA from "../../../components/lib/Buttons/BtnCTA";
import BtnCTATransparent from "../../../components/lib/Buttons/BtnCTATransparent";
import AuthLayout from "../../../components/Layout/AuthLayout";
import TextInput from "../../../components/lib/TextInput";
import styles from "./residency.module.css";
import CheckPoint from "../../../components/lib/CheckPoint";

type Props = {};

function residency({}: Props) {
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [residence, setResidence] = useState("");
  const [origin, setOrigin] = useState("");
  const [country, setCountry] = useState("");
  return (
    <AuthLayout>
      <>
        <CheckPoint progressCount={3} />
        <div className={styles.headerText}>Proof of Residency</div>
        <TextInput
          type="street"
          state={street}
          setState={setStreet}
          label="Street name"
          placeholder="Enter your street name and number"
        />
        <TextInput
          type="city"
          state={city}
          setState={setCity}
          label="City/town"
          placeholder="Select your city or town name "
        />
        <TextInput
          type="residence"
          state={residence}
          setState={setResidence}
          label="State of residence"
          placeholder="State of residence"
        />
        <TextInput
          type="origin"
          state={origin}
          setState={setOrigin}
          label="State of origin"
          placeholder="State of origin"
        />
        <TextInput
          type="country"
          state={country}
          setState={setCountry}
          label="Country"
          placeholder="Country of residence"
        />
        <BtnCTA content="Submit" />
        <BtnCTATransparent content="Back" />
        <div className={styles.spaceSection}></div>
      </>
    </AuthLayout>
  );
}

export default residency;
