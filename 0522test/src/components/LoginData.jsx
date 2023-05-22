import React, { useState } from "react";
import styles from "./logindata.module.css";
import { auth } from "../database/firebase";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Link } from "react-router-dom";
export default function LoginData() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const create = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        });
        alert("회원가입이 되었습니다");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        if (errorCode === "auth/email-already-in-use")
          alert("이미 가입되어 있는 계정입니다");
      });
  };
  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/main");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (error.code) {
          alert("등록되지 않은 이메일이거나 비밀번호가 잘못되었습니다");
        }
        navigate("/");
      });
  };
  return (
    <div className={styles.loginpage}>
      <h3>로그인 또는 회원가입 페이지 입니다</h3>
      <label>이메일</label>
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <label>비밀번호</label>
      <input
        type="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={create} className={styles.enter}>
        회원가입
      </button>
      <button onClick={login} className={styles.login}>
        로그인
      </button>
    </div>
  );
}
