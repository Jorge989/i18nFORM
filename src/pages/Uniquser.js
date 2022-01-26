import React from "react";
import styles from "../styles/Uniqueuser.module.css";
import { useUsers } from "../context/User";
import { useTranslation } from "react-i18next";
import { useParams, useHistory } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
export default function Uniquser() {
  const { id } = useParams();

  const { users, setControlAddButton } = useUsers();

  const filtrado = users.filter((user) => {
    return user.id == id;
  });
  console.log("aqui2222", filtrado);
  const history = useHistory();
  const { t } = useTranslation();
  setControlAddButton(false);
  return (
    <div className={styles.container}>
      {filtrado.map((user) => {
        return (
          <>
            <div className={styles.containerUser}>
              <div className={styles.nameUser}>
                <h6>
                  {t("name")}: {user.fullName}
                </h6>
                <h6>
                  {t("gender")}: {t(`${user.gender}`)}
                </h6>
                <div className={styles.Icondiv}>
                  <button
                    className={styles.PencilButton}
                    onClick={() => history.push(`/updateuser/${user.id}`)}
                  >
                    {" "}
                    <FaPencilAlt className={styles.PencilIcon} />
                  </button>
                  <button
                    className={styles.EyeButton}
                    onClick={() => history.push(`/uniqueuser/${user.id}`)}
                  >
                    {" "}
                    <FaEye className={styles.EyeIcon} />
                  </button>
                </div>
              </div>
              <div className={styles.ListBirth}>
                <h6>{t("date_of_birth")}</h6>
                <h6>{`${user.day}/${user.month}/${user.year}`}</h6>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
