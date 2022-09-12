import Router from "next/router";
import React from "react";
import BtnCTA from "../../../components/lib/Buttons/BtnCTA";
import styles from "./confirm.module.css";

type Props = {};

function Confirm({}: Props) {
  const nav = (url: string) => {
    Router.push(url);
  };

  return (
    <div className={styles.container}>
      <div className={styles.containerInner}>
        <img className={styles.thumImg} src="/images/pngfind.png" />
        <div className={styles.heroText}>Registration successful!</div>
        <div className={styles.innerText}>
          Your account has been successfully created.
        </div>
        <div className={styles.BtnCTA}>
          <BtnCTA
            OnClickEvent={() => nav("/")}
            loading={false}
            disabled={false}
            enabled={true}
            content="Go Home"
          />
        </div>
      </div>
    </div>
  );
}

export default Confirm;
