import React from "react";
import styles from "./TableCards.module.css";
import { IoIosWallet } from "react-icons/io";

type Props = {
  status: string;
};

function TableCards({ status }: Props) {
  const Completed = () => {
    return <div className={styles.sucessful}>Successful</div>;
  };
  const Pending = () => {
    return <div className={styles.pending}>Pending</div>;
  };
  const Cancelled = () => {
    return <div className={styles.cancelled}>Cancelled</div>;
  };
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <div className={styles.iconInner}>
          <IoIosWallet color="white" size={20} />
        </div>
      </div>
      <div className={styles.name}>Design course</div>
      <div className={styles.description}>Description</div>
      <div className={styles.date}>Aug. 12, 2022, 12:00 pm</div>
      <div className={styles.status}>
        {status === "successfull" && <Completed />}
        {status === "pending" && <Pending />}
        {status === "cancelled" && <Cancelled />}
      </div>
    </div>
  );
}

export default TableCards;
