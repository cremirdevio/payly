import React from "react";
import styles from "./BtnCTATransparent.module.css";

type Props = {
  content: string;
  onClickEvent: () => void;
};

function BtnCTATransparent({ content, onClickEvent }: Props) {
  return (
    <div className={styles.container}>
      <div onClick={() => onClickEvent()} className={styles.containerInner}>
        {content}
      </div>
    </div>
  );
}

export default BtnCTATransparent;
