import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./mainpage.module.css";
export default function Mainpage() {
  const location = useLocation();
  console.log(location.state);
  return (
    <div className={styles.mainpage}>
      <h3>MAIN</h3>
      <p>{location.state.email} 로그인이 성공하였습니다</p>
    </div>
  );
}
