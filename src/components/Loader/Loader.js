import React from "react";
import styles from "./Loader.module.css";

function Loader() {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.loader}`}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p className={`${styles.text}`}>Checking</p>
    </div>
  );
}

export default Loader;
