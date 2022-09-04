import React from "react";
import styles from "./TextInput.module.css";

type Props = {
  label: string;
  placeholder: string;
};

function TextInput({ label, placeholder }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.label}>{label}</div>
      <div className={styles.inputContainer}>
        <input placeholder={placeholder} className={styles.input} />
      </div>
    </div>
  );
}

export default TextInput;
