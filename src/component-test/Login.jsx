import "../../public/components.css";
import image from "../imageLoginPage.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "animate.css";
import { useNavigate, useSearchParams } from "react-router-dom";

export function LoginPage() {
  //for class in input
  const [username, setUsername] = useState(false);
  const [password, setPassword] = useState(false);
  const [change, setChange] = useState("");

  ///this is how you store a data in use state, in this sample,
  // we store an object. perfect for sendisn multiple data
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  //implicit return means it return itself, must be no curky brackets,
  //otherwise explicit, returning an element because it inside the curly bracket
  const handleChange = (e) => {
    const { name, value } = e.target; //name is on the input.
    setData((prev) => ({
      ...prev, //all previous value
      [name]: value,
    }));
  };

  const sendData = async (e) => {
    e.preventDefault();

    //this is a backend api only
    const response = await fetch("submit-response", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    console.log("Data sent successfully: ", data);
    navigate("/home");
  };

  const navigate = useNavigate();

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
                  username ? "smoothBounce" : ""
                }`}
              />
              <input
                type="text"
                name="username"
                placeholder="Enter your username"
                onFocus={() => {
                  setUsername(false);
                  setTimeout(() => setUsername(true), 5);
                }}
                onBlur={() => setUsername(false)}
                onChange={handleChange}
              />
            </div>
            <div className="inputContainer">
              <FontAwesomeIcon
                icon={faEye}
                className={`inputIcon animate__animated ${
                  password ? "smoothBounce" : ""
                }`}
              />
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                onFocus={() => setPassword(true)}
                onBlur={() => setPassword(false)}
                onChange={handleChange}
              />
            </div>
            <button id="loginBtn" onClick={sendData}>
              {" "}
              Login{" "}
            </button>
          </div>
        </section>
      </section>
    </>
  );
}
