import React, { useState } from "react";
import Loader from "../components/Loader/Loader";
import styles from "./Homepage.module.css";

function Homepage() {
  const [text, settext] = useState("");
  const [loader, setloader] = useState(false);

  const clickedButton = () => {
    console.log(text);
  };

  return (
    <div className={`${styles.wrapper}`}>
      <div className={`${styles.image_container}`}>
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/chandler_laugh.jpg`}
          alt="Chandler Laugh"
        />
      </div>
      <div className={`${styles.content_container}`}>
        <div className={`${styles.header}`}>
          <h1>Sarcasm Detector</h1>
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
    </div>
  );
}

export default Homepage;
