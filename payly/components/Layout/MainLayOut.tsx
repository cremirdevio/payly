import Head from "next/head";
import React, { ReactElement, useState, useEffect } from "react";
import styles from "./MainLayOut.module.css";
import { MdSpaceDashboard } from "react-icons/md";
import { ImLink } from "react-icons/im";
import { FaHistory } from "react-icons/fa";
import { BiWallet } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";
import { IoMdNotifications } from "react-icons/io";
import Router from "next/router";
import BasicModal from "../lib/Modal/CustomizeModal";

type Props = {
  name: string;
  children: ReactElement;
};

interface MenuChildProps {
  icon: any;
  menuName: string;
  url: string;
}

interface FooterType {
  icon: any;
  url: string;
}

function MainLayOut({ children, name }: Props) {
  const nav = (url: string) => {
    Router.push(url);
  };

  const [open, setOpen] = useState(false);
  const [firstName, setFirstName] = useState("");

  const handleOpen = () => setOpen(true);

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

  const MenuChild = ({ icon, menuName, url }: MenuChildProps) => {
    return (
      <div onClick={() => nav(url)} className={styles.menuMain}>
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
  const Footer = ({ icon, url }: FooterType) => {
    return (
      <div onClick={() => nav(url)} className={styles.footerBox}>
        {icon}
      </div>
    );
  };

  useEffect(() => {
    let firstName = localStorage.getItem("firstName");
    if (firstName) {
      setFirstName(firstName);
    }
  }, []);

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
              url={"/"}
              icon={<MdSpaceDashboard size={22} />}
              menuName={"Dashboard"}
            />
          ) : (
            <MenuChild
              url={"/"}
              icon={<MdSpaceDashboard size={22} />}
              menuName={"Dashboard"}
            />
          )}

          {name === "Payment" ? (
            <MenuChildActive
              url={"payment"}
              icon={<ImLink size={22} />}
              menuName={"Payment links"}
            />
          ) : (
            <MenuChild
              url={"payment"}
              icon={<ImLink size={22} />}
              menuName={"Payment links"}
            />
          )}
          <MenuChild
            url={"/"}
            icon={<FaHistory size={22} />}
            menuName={"History"}
          />
          <MenuChild
            url={"/"}
            icon={<BiWallet size={22} />}
            menuName={"Wallet"}
          />
          <MenuChild
            url={"/"}
            icon={<VscAccount size={22} />}
            menuName={"Account"}
          />
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
              <div className={styles.greeting}>Hi {firstName}, Welcome!</div>
              <div className={styles.initiateCTA}>
                <div onClick={() => handleOpen()} className={styles.initiate}>
                  Initiate payment
                </div>
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
          <FooterActive url={"/"} icon={<MdSpaceDashboard size={22} />} />
        ) : (
          <Footer url={"/"} icon={<MdSpaceDashboard size={22} />} />
        )}
        {name === "Payment" ? (
          <FooterActive url={"/payemnt"} icon={<ImLink size={22} />} />
        ) : (
          <Footer url={"/payment"} icon={<ImLink size={22} />} />
        )}

        <Footer url={"/"} icon={<FaHistory size={22} />} />
        <Footer url={"/"} icon={<BiWallet size={22} />} />
        <Footer url={"/"} icon={<VscAccount size={22} />} />
      </div>
      <BasicModal open={open} setOpen={setOpen} />
    </div>
  );
}

export default MainLayOut;
