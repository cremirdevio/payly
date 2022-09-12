import React, { useState, useEffect } from "react";
import BtnCTA from "../../../components/lib/Buttons/BtnCTA";
import BtnCTATransparent from "../../../components/lib/Buttons/BtnCTATransparent";
import AuthLayout from "../../../components/Layout/AuthLayout";
import TextInput from "../../../components/lib/TextInput";
import styles from "./residency.module.css";
import CheckPoint from "../../../components/lib/CheckPoint";
import Router from "next/router";

type Props = {};

function Residency({}: Props) {
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [residence, setResidence] = useState("");
  const [origin, setOrigin] = useState("");
  const [country, setCountry] = useState("");

  const [enabled, setEnabled] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const nav = (url: string) => {
    Router.push(url);
  };

  const handleConfirm = () => {
    localStorage.setItem("street", street);
    localStorage.setItem("city", city);
    localStorage.setItem("residence", residence);
    localStorage.setItem("origin", origin);
    localStorage.setItem("country", country);

    nav("/");
    setDisabled(false);
    setLoading(true);
    setEnabled(false);
  };

  useEffect(() => {
    if (
      street.length > 0 &&
      city.length > 0 &&
      residence.length > 0 &&
      origin.length > 9 &&
      country.length > 0
    ) {
      setDisabled(false);
      setLoading(false);
      setEnabled(true);
    } else {
      setDisabled(true);
      setLoading(false);
      setEnabled(false);
    }
  }, [street, city, residence, origin, country]);

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
        <BtnCTA
          OnClickEvent={handleConfirm}
          loading={loading}
          disabled={disabled}
          enabled={enabled}
          content="Submit"
        />
        <BtnCTATransparent onClickEvent={() => nav("bank")} content="Back" />
        <div className={styles.spaceSection}></div>
      </>
    </AuthLayout>
  );
}

export default Residency;
