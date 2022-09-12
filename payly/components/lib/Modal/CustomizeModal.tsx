import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import styles from "./Customize.module.css";

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
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className={styles.container}>
            <div className={styles.title}>Customise payment link</div>
            <div className={styles.amount}>
              <div className={styles.amountTitle}>Amount*</div>
              <div className={styles.amountInput}>
                <div className={styles.currency}>USDC</div>
                <div className={styles.inputContainer}>
                  <input className={styles.input} />
                </div>
              </div>
            </div>
            <div className={styles.paymentFor}>
              <div className={styles.descTitle}>Payment for*</div>
              <div className={styles.descInput}>
                <div className={styles.descContainer}>
                  <textarea className={styles.descInput} />
                </div>
              </div>
            </div>
            <div className={styles.email}>
              <div className={styles.emailTitle}>Email</div>
              <div className={styles.emailInput}>
                <div className={styles.descContainer}>
                  <input className={styles.input} />
                </div>
              </div>
            </div>
            <div className={styles.CTA}>
              <div onClick={() => setOpen(false)} className={styles.cancel}>
                Cancel
              </div>
              <div className={styles.createLink}>Create link</div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
