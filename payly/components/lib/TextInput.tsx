import React from "react";
import styles from "./TextInput.module.css";

type Props = {
  label: string;
  placeholder: string;
  setState: (value: string) => void;
  state: string;
  type: string;
};

function TextInput({ label, placeholder, state, setState, type }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.label}>{label}</div>
      <div className={styles.inputContainer}>
        <input
          type={type}
          onChange={(e) => setState(e.target.value)}
          value={state}
          placeholder={placeholder}
          className={styles.input}
        />
      </div>
    </div>
  );
}

export default TextInput;
