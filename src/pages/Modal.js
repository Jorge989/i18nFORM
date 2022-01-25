import React from "react";
import styles from "../styles/Modal.module.css";
export default function Modal() {
  return (
    <div className={styles.background}>
      <div className={styles.box}>
        <div className={styles.textos}>
          <h1>Usuário cirado com sucesso!</h1>
        </div>
      </div>
    </div>
  );
}
