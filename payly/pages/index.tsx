import type { NextPage } from "next";
import MainLayOut from "../components/Layout/MainLayOut";
import HomeCard from "../components/lib/Cards/HomeCard";
import styles from "./index.module.css";
import { IoIosWallet } from "react-icons/io";
import { BiPurchaseTag } from "react-icons/bi";
import TableCards from "../components/lib/Cards/TableCards";

const Home: NextPage = () => {
  return (
    <MainLayOut name={"Dashboard"}>
      <div className={styles.container}>
        <div className={styles.homeCards}>
          <HomeCard
            amount="700.00"
            bodyTitle="Total Balance"
            title="Current balance"
            icon={<IoIosWallet />}
          />
          <HomeCard
            amount="100.00"
            bodyTitle="Payment Balance"
            title="Successful Payments"
            icon={<BiPurchaseTag />}
          />
          <HomeCard
            amount="200.00"
            bodyTitle="Transfer Balance"
            title="Total Transfers"
            icon={<IoIosWallet />}
          />
        </div>
        <div className={styles.recentPayMents}>
          <div className={styles.RPTitle}>Recent payments</div>
          <div className={styles.table}>
            <div className={styles.icon}></div>
            <div className={styles.name}>Name</div>
            <div className={styles.description}>Description</div>
            <div className={styles.date}>Date</div>
            <div className={styles.status}>Status</div>
          </div>
        </div>
        <div className={styles.tableContent}>
          <TableCards status={"successfull"} />
          <TableCards status={"pending"} />
          <TableCards status={"cancelled"} />
          <TableCards status={"successfull"} />
          <TableCards status={"pending"} />
          <TableCards status={"pending"} />
        </div>
      </div>
    </MainLayOut>
  );
};

export default Home;
