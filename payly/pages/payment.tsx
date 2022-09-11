import React, { useState } from "react";
import MainLayOut from "../components/Layout/MainLayOut";
import PaymentCard from "../components/lib/Cards/PaymentCard";
import BasicModal from "../components/lib/Modal/CustomizeModal";
import styles from "./Payment.module.css";

type Props = {};

function Payment({}: Props) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  return (
    <MainLayOut name={"Payment"}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerInput}>
            <div className={styles.inputContainer}>
              <input
                disabled
                value={"https://www.payly.com/design-course"}
                className={styles.input}
              />
            </div>
            <div className={styles.inputCTA}>Copy link</div>
          </div>
          <div onClick={() => handleOpen()} className={styles.customizeCTA}>
            Customise link
          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.linkClass}>
            <div className={styles.liveLink}>Live links</div>
            <div className={styles.expiredLink}>Expired links</div>
          </div>
          <div className={styles.table}>
            <div className={styles.amount}>Amount</div>
            <div className={styles.desctiption}>Description</div>
            <div className={styles.status}>Status</div>
            <div className={styles.cta}></div>
          </div>
        </div>
        <div className={styles.tableCards}>
          <PaymentCard status={"successfull"} />
          <PaymentCard status={"pending"} />
          <PaymentCard status={"cancelled"} />
          <PaymentCard status={"successfull"} />
          <PaymentCard status={"successfull"} />
        </div>
        <BasicModal open={open} setOpen={setOpen} />
      </div>
    </MainLayOut>
  );
}

export default Payment;
