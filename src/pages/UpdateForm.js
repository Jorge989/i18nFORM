import React, { useState, useEffect } from "react";
import styles from "../styles/Form.module.css";
import { useTranslation } from "react-i18next";
import Modal from "../pages/UpdateModal";
import { ImMan } from "react-icons/im";
import { FaSpinner } from "react-icons/fa";
import { ImWoman } from "react-icons/im";
import { useParams, useHistory } from "react-router-dom";
import { useUsers } from "../context/User";
export default function UpdateForm() {
  const { users, setUsers, controlAddButton, setControlAddButton } = useUsers();
  const history = useHistory();
  const { t } = useTranslation();
  const [isLoading, setIsLoding] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();

  const filtrado = users.filter((user) => {
    return user.id.toString() === id.toString();
  });
  const addUsers = (users) => {
    setUsers((usuariosAnteriores) => {
      const usuariosNovos = [...usuariosAnteriores];
      var index = usuariosAnteriores.findIndex((user) => {
        return user.id === id;
      });
      usuariosNovos[index] = users;
      return usuariosNovos;
    });
  };

  const [fullName, setFullName] = useState(
    filtrado[0].fullName ? filtrado[0].fullName : ""
  );
  const [gender, setGender] = useState(
    filtrado[0].gender ? filtrado[0].gedner : ""
  );
  const [day, setDay] = useState(filtrado[0].day ? filtrado[0].day : "");
  const [month, setMonth] = useState(
    filtrado[0].month ? filtrado[0].month : ""
  );
  const [year, setYear] = useState(filtrado[0].year ? filtrado[0].year : "");

  useEffect(() => {
    setControlAddButton(false);
  }, [controlAddButton, setControlAddButton]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoding(true);
      const user = {
        fullName: fullName,
        day: day,
        month: month,
        year: year,
        gender: gender,
        id: id,
      };
      // console.log(user);
      setTimeout(() => {
        addUsers(user);
        setIsLoding(false);

        history.push("/listuser");
      }, 2000);
      setTimeout(() => {
        setShowModal(true);
      }, 1000);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form className={styles.RegisterForm} onSubmit={handleSubmit}>
        <h1>{t(`update`)}</h1>
        <div className={styles.gender}>
          <div className={styles.genderInput}>
            <input
              type="radio"
              id="contactChoice1"
              name="contact"
              value="men"
              checked={gender === "men"}
              onChange={(e) => setGender(e.target.value)}
            />
            <label for="contactChoice1" className={styles.genderLabel}>
              <ImMan style={{ color: "#FFE900", fontSize: "22px" }} />
              <p>{t(`men`)}</p>
            </label>
          </div>
          <div className={styles.genderInput}>
            <input
              checked={gender === "woman"}
              type="radio"
              id="contactChoice2"
              name="contact"
              value="woman"
              onChange={(e) => setGender(e.target.value)}
            />
            <label for="contactChoice2" className={styles.genderLabel}>
              <ImWoman style={{ color: "#FFE900", fontSize: "22px" }} />
              <p>{t(`woman`)}</p>
            </label>
          </div>
        </div>
        <label className={styles.FullNamelabel}>
          <span>{t(`full_name`)}</span>
          <input
            value={fullName}
            id={styles.fullnameInput}
            placeholder={t(`full_name`)}
            className={styles.FullNameInput}
            onChange={(e) => setFullName(e.target.value)}
          ></input>
        </label>
        <label className={styles.DateLabelContainer}>
          <span>{t("date_of_birth")}</span>
          <div className={styles.DateBox}>
            <div className={styles.DateContainer}>
              <select
                value={day}
                type="number"
                name="days"
                onChange={(e) => setDay(e.target.value)}
              >
                {" "}
                <option value="01">1</option>
                <option value="02">2</option>
                <option value="03">3</option>
                <option value="04">4</option>
                <option value="05">5</option>
                <option value="06">6</option>
                <option value="07">7</option>
                <option value="08">8</option>
                <option value="09">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </select>
            </div>
            <div className={styles.DateContainer}>
              <select
                value={month}
                type="text"
                name="month"
                onChange={(e) => setMonth(e.target.value)}
              >
                {" "}
                <option value="01">{t(`january`)}</option>
                <option value="02">{t(`february`)}</option>
                <option value="03">{t(`march`)}</option>
                <option value="04">{t(`april`)}</option>
                <option value="05">{t(`may`)}</option>
                <option value="06">{t(`june`)}</option>
                <option value="07">{t(`july`)}</option>
                <option value="08">{t(`august`)}</option>
                <option value="09">{t(`setember`)}</option>
                <option value="10">{t(`october`)}</option>
                <option value="11">{t(`november`)}</option>
                <option value="12">{t(`december`)}</option>
              </select>
            </div>
            <div className={styles.DateContainer}>
              <select
                value={year}
                type="number"
                onChange={(e) => setYear(e.target.value)}
                name="years"
              >
                {" "}
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
                <option value="2011">2011</option>
                <option value="2010">2010</option>
                <option value="2009">2009</option>
                <option value="2008">2008</option>
                <option value="2007">2007</option>
                <option value="2006">2006</option>
                <option value="2005">2005</option>
                <option value="2004">2004</option>
                <option value="2003">2003</option>
                <option value="2002">2002</option>
                <option value="2001">2001</option>
                <option value="2000">2000</option>
                <option value="1999">1999</option>
                <option value="1998">1998</option>
                <option value="1997">1997</option>
                <option value="1996">1996</option>
                <option value="1995">1995</option>
                <option value="1994">1994</option>
                <option value="1993">1993</option>
                <option value="1992">1992</option>
                <option value="1991">1991</option>
                <option value="1990">1990</option>
                <option value="1989">1989</option>
                <option value="1988">1988</option>
                <option value="1987">1987</option>
                <option value="1986">1986</option>
                <option value="1985">1985</option>
                <option value="1984">1984</option>
                <option value="1983">1983</option>
                <option value="1982">1982</option>
                <option value="1981">1981</option>
                <option value="1980">1980</option>
                <option value="1979">1979</option>
                <option value="1978">1978</option>
                <option value="1977">1977</option>
                <option value="1976">1976</option>
                <option value="1975">1975</option>
                <option value="1974">1974</option>
                <option value="1973">1973</option>
                <option value="1972">1972</option>
                <option value="1971">1971</option>
                <option value="1970">1970</option>
                <option value="1969">1969</option>
                <option value="1968">1968</option>
                <option value="1967">1967</option>
                <option value="1966">1966</option>
                <option value="1965">1965</option>
                <option value="1964">1964</option>
                <option value="1963">1963</option>
                <option value="1962">1962</option>
                <option value="1961">1961</option>
                <option value="1960">1960</option>
                <option value="1959">1959</option>
                <option value="1958">1958</option>
                <option value="1957">1957</option>
                <option value="1956">1956</option>
                <option value="1955">1955</option>
                <option value="1954">1954</option>
                <option value="1953">1953</option>
                <option value="1952">1952</option>
                <option value="1951">1951</option>
                <option value="1950">1950</option>
                <option value="1949">1949</option>
                <option value="1948">1948</option>
                <option value="1947">1947</option>
                <option value="1946">1946</option>
                <option value="1945">1945</option>
                <option value="1944">1944</option>
                <option value="1943">1943</option>
                <option value="1942">1942</option>
                <option value="1941">1941</option>
                <option value="1940">1940</option>
                <option value="1939">1939</option>
                <option value="1938">1938</option>
                <option value="1937">1937</option>
                <option value="1936">1936</option>
                <option value="1935">1935</option>
                <option value="1934">1934</option>
                <option value="1933">1933</option>
                <option value="1932">1932</option>
                <option value="1931">1931</option>
                <option value="1930">1930</option>
                <option value="1929">1929</option>
                <option value="1928">1928</option>
                <option value="1927">1927</option>
                <option value="1926">1926</option>
                <option value="1925">1925</option>
                <option value="1924">1924</option>
                <option value="1923">1923</option>
                <option value="1922">1922</option>
                <option value="1921">1921</option>
                <option value="1920">1920</option>
                <option value="1919">1919</option>
                <option value="1918">1918</option>
                <option value="1917">1917</option>
                <option value="1916">1916</option>
                <option value="1915">1915</option>
                <option value="1914">1914</option>
                <option value="1913">1913</option>
                <option value="1912">1912</option>
                <option value="1911">1911</option>
                <option value="1910">1910</option>
                <option value="1909">1909</option>
                <option value="1908">1908</option>
                <option value="1907">1907</option>
                <option value="1906">1906</option>
                <option value="1905">1905</option>
                <option value="1904">1904</option>
                <option value="1903">1903</option>
                <option value="1902">1902</option>
                <option value="1901">1901</option>
                <option value="1900">1900</option>
                <option value="1900">1900</option>
              </select>
            </div>
          </div>
        </label>
        {!isLoading && (
          <button className={styles.SubmitRegisterForm} type="submit">
            {t(`confirm`)}
          </button>
        )}
        {isLoading && (
          <button
            className={styles.SubmitRegisterFormloading}
            type="submit"
            disabled
          >
            {t(`loading`)} <FaSpinner className={styles.spinner} />
          </button>
        )}
      </form>
      {showModal && <Modal></Modal>}
    </>
  );
}
