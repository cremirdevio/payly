import Head from "next/head";
import React, { ReactElement } from "react";
import styles from "./MainLayOut.module.css";
import { MdSpaceDashboard } from "react-icons/md";
import { ImLink } from "react-icons/im";
import { FaHistory } from "react-icons/fa";
import { BiWallet } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";
import { IoMdNotifications } from "react-icons/io";

type Props = {
  name: string;
  children: ReactElement;
};

interface MenuChildProps {
  icon: any;
  menuName: string;
}

interface FooterType {
  icon: any;
}

function MainLayOut({ children, name }: Props) {
  const MenuChildActive = ({ icon, menuName }: MenuChildProps) => {
    return (
      <div className={styles.menuMain}>
        <div className={styles.menuChildActive}>
          <div className={styles.iconActive}>{icon}</div>
          <div className={styles.menuNameActive}>{menuName}</div>
        </div>
      </div>
    );
  };

  const MenuChild = ({ icon, menuName }: MenuChildProps) => {
    return (
      <div className={styles.menuMain}>
        <div className={styles.menuChild}>
          <div className={styles.icon}>{icon}</div>
          <div className={styles.menuName}>{menuName}</div>
        </div>
      </div>
    );
  };

  const FooterActive = ({ icon }: FooterType) => {
    return <div className={styles.footerBoxActive}>{icon}</div>;
  };
  const Footer = ({ icon }: FooterType) => {
    return <div className={styles.footerBox}>{icon}</div>;
  };

  const title = `Payly - ${name}`;

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Get payed for your freelance work" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.sideBar}>
        <div className={styles.logo}>
          <img className={styles.logoImage} src="/images/logo-white.png" />
        </div>
        <div className={styles.menu}>
          {name === "Dashboard" ? (
            <MenuChildActive
              icon={<MdSpaceDashboard size={22} />}
              menuName={"Dashboard"}
            />
          ) : (
            <MenuChild
              icon={<MdSpaceDashboard size={22} />}
              menuName={"Dashboard"}
            />
          )}

          {name === "Payment" ? (
            <MenuChildActive
              icon={<ImLink size={22} />}
              menuName={"Payment links"}
            />
          ) : (
            <MenuChild icon={<ImLink size={22} />} menuName={"Payment links"} />
          )}

          <MenuChild icon={<FaHistory size={22} />} menuName={"History"} />
          <MenuChild icon={<BiWallet size={22} />} menuName={"Wallet"} />
          <MenuChild icon={<VscAccount size={22} />} menuName={"Account"} />
        </div>
      </div>
      <div className={styles.mainBar}>
        <div className={styles.profileHeader}>
          <div className={styles.notif}>
            <IoMdNotifications color="#BDBDBD" size={32} />
          </div>
          <div className={styles.profile}>
            <div className={styles.profileInner}></div>
          </div>
        </div>
        {name === "Dashboard" && (
          <div className={styles.pageIntro}>
            <div className={styles.pageIntroInner}>
              <div className={styles.greeting}>Hi Sewa, Welcome!</div>
              <div className={styles.initiateCTA}>
                <div className={styles.initiate}>Initiate payment</div>
              </div>
            </div>
          </div>
        )}
        <div className={styles.childrenContainer}>
          <div className={styles.childrenContainerInner}>{children}</div>
        </div>
      </div>
      <div className={styles.footer}>
        {name === "Dashboard" ? (
          <FooterActive icon={<MdSpaceDashboard size={22} />} />
        ) : (
          <Footer icon={<MdSpaceDashboard size={22} />} />
        )}
        {name === "Payment" ? (
          <FooterActive icon={<ImLink size={22} />} />
        ) : (
          <Footer icon={<ImLink size={22} />} />
        )}

        <Footer icon={<FaHistory size={22} />} />
        <Footer icon={<BiWallet size={22} />} />
        <Footer icon={<VscAccount size={22} />} />
      </div>
    </div>
  );
}

export default MainLayOut;
