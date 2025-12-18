import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../public/components.css";
console.log("CreateAccount.jsx loaded");

export function CreateAccount() {
  const nav = useNavigate();

  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });
  //default state
  const [error, setError] = useState({
    username: false,
    email: false,
    password: false,
  });

  const [userDupeN, setUserDupe] = useState({
    username: "",
    email: "",
    password: "",
  });

  const passValue = (e) => {
    const { name, value } = e.target;

    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError((prev) => ({
      ...prev,
      [name]: !value,
    }));

    if (name === "username" && userDupeN.username) {
      setUserDupe((prev) => ({
        ...prev,
        username: "",
      }));
    }
  };

  const createAccount = async (e) => {
    e.preventDefault();
    const { username, email, password } = userData;

    //if no username email password, the value becomes true, because i inputted a variable
    const errors = {
      username: !username,
      email: !email,
      password: !password,
    };

    setError(errors);

    if (errors.username || errors.email || errors.password) {
      console.log("please fill all fields");
      return;
    }

    const sendData = await fetch("/create-account", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const result = await sendData.json();
    console.log(result);

    if (!sendData.ok) {
      const message =
        result.error === "user already exists!"
          ? "username already exists."
          : "enter your username";
      console.log(sendData);

      setUserDupe((prev) => ({
        ...prev,
        username: message,
      }));
      return;
    }

    nav("/login");
  };

  return (
    <section className="form-container">
      <h1>Create Account</h1>
      <form action="" onSubmit={createAccount} className="create-account-form">
        <label htmlFor="">Username</label>
        <input
          type="text"
          placeholder={
            userDupeN.username ||
            (error.username && "username required") ||
            "enter your username"
          }
          name="username"
          onChange={passValue}
          className={userDupeN.username || error.username ? "input-error" : ""}
        />
        <label htmlFor="">Email</label>
        <input
          type="text"
          name="email"
          onChange={passValue}
          className={error.email ? "input-error" : ""}
          placeholder={error.email ? "email required" : "enter your email"}
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          placeholder={
            error.password ? "password required" : "enter your password"
          }
          name="password"
          onChange={passValue}
          className={error.password ? "input-error" : ""}
        />
        <button type="submit">Create Account</button>
      </form>
    </section>
  );
}
