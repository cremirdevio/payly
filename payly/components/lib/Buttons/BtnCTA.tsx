import { CircularProgress } from "@mui/material";
import React from "react";
import styles from "./BtnCTA.module.css";

type Props = {
  content: string;
  enabled: boolean;
  disabled: boolean;
  loading: boolean;
  OnClickEvent: () => void;
};

function BtnCTA({ content, enabled, disabled, loading, OnClickEvent }: Props) {
  return (
    <>
      {enabled && (
        <div onClick={() => OnClickEvent()} className={styles.container}>
          <div className={styles.containerInner}>{content}</div>
        </div>
      )}
      {disabled && (
        <div className={styles.container}>
          <div
            style={{ opacity: 0.7, cursor: "not-allowed" }}
            className={styles.containerInner}
          >
            {content}
          </div>
        </div>
      )}
      {loading && (
        <div className={styles.container}>
          <div className={styles.containerInner}>
            <CircularProgress
              sx={{ animationDuration: "350ms" }}
              style={{ color: "grey" }}
              size={28}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default BtnCTA;
