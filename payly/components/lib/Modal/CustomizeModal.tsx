import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import styles from "./Customize.module.css";
import { useState, useEffect } from "react";
import { IoMdCopy } from "react-icons/io";
import { CopyToClipboard } from "react-copy-to-clipboard";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  maxWidth: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

interface props {
  setOpen: (value: boolean) => void;
  open: boolean;
}

export default function BasicModal({ open, setOpen }: props) {
  const [success, setSuccess] = useState(false);

  const [amount, setAmount] = useState("");
  const [desc, setDesc] = useState("");
  const [email, setEmail] = useState("");

  const randomString = Date.now();

  const handleClick = () => {
    if (
      amount.length > 0 &&
      desc.length > 0 &&
      email.match(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      setSuccess(true);
      localStorage.setItem("amount", amount);
      localStorage.setItem("desc", desc);
    }
  };

  const handleClose = () => {
    setOpen(false), setSuccess(false);
    setAmount("");
    setEmail("");
    setDesc("");
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {!success ? (
            <div className={styles.container}>
              <div className={styles.title}>Customise payment link</div>
              <div className={styles.amount}>
                <div className={styles.amountTitle}>Amount*</div>
                <div className={styles.amountInput}>
                  <div className={styles.currency}>USDC</div>
                  <div className={styles.inputContainer}>
                    <input
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className={styles.input}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.paymentFor}>
                <div className={styles.descTitle}>Payment for*</div>
                <div className={styles.descInput}>
                  <div className={styles.descContainer}>
                    <textarea
                      value={desc}
                      onChange={(e) => setDesc(e.target.value)}
                      className={styles.descInput}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.email}>
                <div className={styles.emailTitle}>Email</div>
                <div className={styles.emailInput}>
                  <div className={styles.descContainer}>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={styles.input}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.CTA}>
                <div onClick={() => setOpen(false)} className={styles.cancel}>
                  Cancel
                </div>
                <div
                  onClick={() => handleClick()}
                  className={styles.createLink}
                >
                  Create link
                </div>
              </div>
            </div>
          ) : (
            <div className={styles.containerLink}>
              <div className={styles.r1}>Payment link</div>
              <div className={styles.r2}>
                <img className={styles.img} src="/images/pngfind.png" />
              </div>
              <div className={styles.r3}>Link successfully generated</div>
              <div className={styles.amountBox}>
                <div className={styles.r4}>
                  <div className={styles.r4Text}>Amount:</div>
                  <div className={styles.r4Number}>$ {amount}</div>
                </div>
                <div className={styles.r5}>
                  <div className={styles.r4Text}>Payment for: </div>
                  <div className={styles.r4Number}>{desc}</div>
                </div>
              </div>
              <div className={styles.copyLink}>
                <CopyToClipboard
                  text={`https://payly-git-teslim-cremirdevio.vercel.app/pay/${randomString}`}
                >
                  <div className={styles.copyText}>
                    https://www.payly.com/pay/{randomString}
                  </div>
                </CopyToClipboard>
                <CopyToClipboard
                  text={`https://payly-git-teslim-cremirdevio.vercel.app/pay/${randomString}`}
                >
                  <div className={styles.copyIcon}>
                    <IoMdCopy color="#828282" />
                  </div>
                </CopyToClipboard>
              </div>
            </div>
          )}
        </Box>
      </Modal>
    </div>
  );
}
