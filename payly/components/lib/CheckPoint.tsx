import React, { ReactElement } from "react";
import styles from "./CheckPoint.module.css";

type ProgressType = {
  number: number;
};

interface CheckPointProps {
  progressCount: number;
}

function CheckPoint({ progressCount }: CheckPointProps) {
  const ActiveProgress = ({ number }: ProgressType): ReactElement => {
    return (
      <div className={styles.progressContainer}>
        <div className={styles.circle}>{number}</div>
        <div className={styles.rectangular}></div>
      </div>
    );
  };
  const InActiveProgress = ({ number }: ProgressType): ReactElement => {
    return (
      <div className={styles.progressContainer}>
        <div className={styles.inActiveCircle}>{number}</div>
        <div className={styles.inActiveRectangular}></div>
      </div>
    );
  };
  return (
    <div className={styles.container}>
      <div className={styles.containerInner}>
        <ActiveProgress number={1} />
        {progressCount >= 2 ? (
          <ActiveProgress number={2} />
        ) : (
          <InActiveProgress number={2} />
        )}
        {progressCount === 3 ? (
          <ActiveProgress number={3} />
        ) : (
          <InActiveProgress number={3} />
        )}
      </div>
    </div>
  );
}

export default CheckPoint;
