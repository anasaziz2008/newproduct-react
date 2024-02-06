import React from "react";
import styles from "./navbar.module.css";
export const NavbarComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <p
          style={{
            color: "#000",

            fontFamily: "Lato",
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "normal",
            margin: "0",
          }}
        >
          {" "}
          Add Product{" "}
        </p>
      </div>
    </div>
  );
};
