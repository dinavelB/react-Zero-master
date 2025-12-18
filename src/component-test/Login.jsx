import "../../public/components.css";
import image from "../imageLoginPage.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "animate.css";
import { useNavigate, useSearchParams } from "react-router-dom";

export function LoginPage() {
  const [usernameAnima, setUsername] = useState(false);
  const [passwordAnima, setPassword] = useState(false);
  const [change, setChange] = useState("");
  const navigate = useNavigate();

  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState({
    username: false,
    password: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });

    setError({
      ...error,
      [name]: !value,
    });
  };

  const sendData = async (e) => {
    e.preventDefault();

    const { username, password } = data;

    const errors = {
      username: !username.trim(),
      password: !password.trim(),
    };

    setError(errors);

    if (errors.username || errors.password) {
      console.log("please fill all fields");
      return;
    }

    const response = await fetch("/login-account", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const result = await response.json();

    if (!response.ok) {
      console.log(result);
      setError({
        username: true,
        password: true,
      });
      return;
    }

    navigate("/home");
  };

  return (
    <>
      <section id="container">
        <section id="loginContainer">
          <img src={image} alt="" />
          <div id="form">
            <label htmlFor="" id="headText">
              Login
            </label>
            <div className="inputContainer">
              <FontAwesomeIcon
                icon={faUser}
                className={`animate__animated inputIcon ${
                  usernameAnima ? "smoothBounce" : ""
                }`}
              />
              <input
                type="text"
                name="username"
                placeholder={
                  error.username ? " username required" : "enter your username"
                }
                onFocus={() => {
                  setUsername(false);
                  setTimeout(() => setUsername(true), 5);
                }}
                onBlur={() => setUsername(false)}
                onChange={handleChange}
                className={error.username ? "input-error" : ""}
              />
            </div>
            <div className="inputContainer">
              <FontAwesomeIcon
                icon={faEye}
                className={`inputIcon animate__animated ${
                  passwordAnima ? "smoothBounce" : ""
                }`}
              />
              <input
                type="password"
                name="password"
                onFocus={() => setPassword(true)}
                onBlur={() => setPassword(false)}
                onChange={handleChange}
                placeholder={
                  error.password ? " password required" : "enter your password"
                }
                className={error.password ? "input-error" : ""}
              />
            </div>
            <button id="loginBtn" onClick={sendData}>
              Login
            </button>
          </div>
        </section>
      </section>
    </>
  );
}
