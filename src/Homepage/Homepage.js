import React, { useState } from "react";
import { apiDetectSarcasm } from "../api";
import Loader from "../components/Loader/Loader";
import ResultPrompt from "../components/ResultPrompt/ResultPrompt";
import styles from "./Homepage.module.css";
import { showErrorToastNotification } from "../components/ToastNotification";

function Homepage() {
  const [text, settext] = useState("");
  const [loader, setloader] = useState(false);
  const [isDialogOpen, setisDialogOpen] = useState(false);
  const [dialogData, setdialogData] = useState({});
  const clickedButton = async () => {
    setloader(true);
    const resp = await apiDetectSarcasm(text);
    setloader(false);
    if (resp === undefined || resp.status === undefined) {
      showErrorToastNotification(<p>Server Error</p>);
    } else if (resp.status === 200) {
      setdialogData(resp.data);
      setisDialogOpen(true);
      settext("");
    } else if (resp.status === 500) {
      showErrorToastNotification(<p>{resp.data.message}</p>);
    }
  };

  return (
    <div className={`${styles.wrapper}`}>
      <div className={`${styles.image_container}`}>
        <img
          // src={`${process.env.PUBLIC_URL}/assets/images/chandler_laugh.jpg`}
          src="https://media.giphy.com/media/RkLBjygu1lKFCjdsxb/giphy.gif"
          alt="Chandler Laugh"
        />
      </div>
      <div className={`${styles.content_container}`}>
        <div className={`${styles.header}`}>
          <h1>Sarcasm Detector</h1>
          <p>Are you funny? Try testing yourself -_-</p>
        </div>
        {loader && <Loader />}

        <div
          style={{ display: loader ? "none" : "flex" }}
          className={`${styles.form_container}`}
        >
          <textarea
            className={`${styles.textarea}`}
            value={text}
            onChange={(e) => settext(e.target.value)}
          />
        </div>
        <div
          style={{ display: loader ? "none" : "flex" }}
          className={`${styles.button_container}`}
        >
          <button
            onClick={() => clickedButton()}
            className={`${styles.button}`}
          >
            Check
          </button>
        </div>
      </div>
      <ResultPrompt
        isDialogOpen={isDialogOpen}
        setisDialogOpen={setisDialogOpen}
        data={dialogData}
      />
    </div>
  );
}

export default Homepage;
