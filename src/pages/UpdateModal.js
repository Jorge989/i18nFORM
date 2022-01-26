import React from "react";
import styles from "../styles/Modal.module.css";
import { useTranslation } from "react-i18next";
export default function Modal() {
  const { t } = useTranslation();
  return (
    <div className={styles.background}>
      <div className={styles.box}>
        <div className={styles.textos}>
          <h1>{t("update_modal_message")}</h1>
        </div>
      </div>
    </div>
  );
}
