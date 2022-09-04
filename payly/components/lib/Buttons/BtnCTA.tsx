import React from "react";
import styles from "./BtnCTA.module.css";

type Props = {
  content: string;
};

function BtnCTA({ content }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.containerInner}>{content}</div>
    </div>
  );
}

export default BtnCTA;
