import React from "react";
import styles from "./HomeCard.module.css";

type Props = {
  icon: any;
  title: string;
  bodyTitle: string;
  amount: string;
};

function HomeCard({ icon, title, bodyTitle, amount }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <div className={styles.icon}>{icon}</div>
        <div className={styles.title}>{title}</div>
      </div>
      <div className={styles.bodyContainer}>
        <div className={styles.line}></div>
        <div className={styles.bodyMain}>
          <div className={styles.bodyInner}>
            <div className={styles.bodyTitle}>{bodyTitle}</div>
            <div className={styles.bodyContent}>
              <div className={styles.dollarIcon}>$</div>
              <div className={styles.amount}>{amount}</div>
              <div className={styles.coin}>USDC</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomeCard;
