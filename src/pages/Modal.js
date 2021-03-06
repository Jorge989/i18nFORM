import React from "react";
import { useTranslation } from "react-i18next";
import styles from "../styles/Modal.module.css";
export default function Modal() {
  const { t } = useTranslation();
  return (
    <div className={styles.background}>
      <div className={styles.box}>
        <div className={styles.textos}>
          <h1>{t("create_user")}</h1>
        </div>
      </div>
    </div>
  );
}
