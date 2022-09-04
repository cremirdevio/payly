import React from "react";
import styles from "./BtnCTATransparent.module.css";

type Props = {
  content: string;
};

function BtnCTATransparent({ content }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.containerInner}>{content}</div>
    </div>
  );
}

export default BtnCTATransparent;
