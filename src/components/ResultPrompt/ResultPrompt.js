import React from "react";
import styles from "./ResultPrompt.module.css";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";

function ResultPrompt({ isDialogOpen, setisDialogOpen, data }) {
  const clickedClose = () => {
    setisDialogOpen(false);
  };

  return (
    <Dialog open={isDialogOpen} className={`${styles.dialog}`}>
      <div className={`${styles.dialog_wrapper}`}>
        <CloseIcon className={`${styles.close_icon}`} onClick={clickedClose} />
        <div className={`${styles.text_container}`}>
          <p>{data.text}</p>
        </div>
        <div className={`${styles.score_container}`}>
          <div className={`${styles.score}`}>
            <h6>CNN Score</h6>
            <p>{data.cnnPred}%</p>
          </div>
          <div className={`${styles.score}`}>
            <h6>LSTM Score</h6>
            <p>{data.lstmPred}%</p>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

export default ResultPrompt;
