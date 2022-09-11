import React from "react";
import styles from "./BtnCTA.module.css";

type Props = {
  content: string;
  enabled: boolean;
  disabled: boolean;
  loading: boolean;
};

function BtnCTA({ content, enabled, disabled, loading }: Props) {
  return (
    <>
      {enabled && (
        <div className={styles.container}>
          <div className={styles.containerInner}>{content}</div>
        </div>
      )}
      {disabled && (
        <div className={styles.container}>
          <div className={styles.containerInner}>{content}</div>
        </div>
      )}
      {loading && (
        <div className={styles.container}>
          <div className={styles.containerInner}>loading...</div>
        </div>
      )}
    </>
  );
}

export default BtnCTA;
