import React from "react";
import styles from "../styles/ListUser.module.css";
import { useUsers } from "../context/User";
import { useTranslation } from "react-i18next";
import { IoMdTrash } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { useHistory } from "react-router-dom";
export default function ListUser() {
  const history = useHistory();
  const { users, setUsers, setControlAddButton } = useUsers();
  setControlAddButton(true);
  function handleDeleteUser(id) {
    setUsers((anterior) => {
      return anterior.filter((filtrado) => {
        return id !== filtrado.id;
      });
    });
  }

  // const handleDelete = (id) => {
  //   setEvents((anterior) => {
  //     return anterior.filter((filtrado) => {
  //       return id != filtrado.id;
  //     });
  //   });
  // };
  const { t } = useTranslation();
  return (
    <>
      <div className={styles.container}>
        {users.length <= 0 ? (
          <div className={styles.contianerNull}>
            <h1>{t("not_user_found")}</h1>
          </div>
        ) : (
          users.map((user) => {
            return (
              <div className={styles.containerUser} key={user.id}>
                <div className={styles.nameUser}>
                  <h6>
                    {t("name")}: {user.fullName}
                  </h6>
                  <h6>
                    {t("gender")}: {t(`${user.gender}`)}
                  </h6>
                  <div className={styles.Icondiv}>
                    <button
                      className={styles.Trashbutton}
                      onClick={() => handleDeleteUser(user.id)}
                    >
                      {" "}
                      <IoMdTrash className={styles.TrashIcon} />
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
            );
          })
        )}
      </div>
    </>
  );
}
