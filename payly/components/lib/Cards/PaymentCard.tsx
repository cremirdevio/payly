import React from "react";
import styles from "./PaymentCard.module.css";
import { IoIosWallet } from "react-icons/io";

type Props = {
  status: string;
};

function PaymentCard({ status }: Props) {
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
      <div className={styles.name}>Design course</div>
      <div className={styles.description}>Description</div>
      <div className={styles.status}>
        {status === "successfull" && <Completed />}
        {status === "pending" && <Pending />}
        {status === "cancelled" && <Cancelled />}
      </div>
      <div className={styles.cta}>
        <div className={styles.copyCTA}>Copy</div>
      </div>
    </div>
  );
}

export default PaymentCard;
