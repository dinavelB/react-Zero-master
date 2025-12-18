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

  const passValue = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
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
    nav("/login");
  };

  return (
    <section className="form-container">
      <h1>Create Account</h1>
      <form action="" onSubmit={createAccount} className="create-account-form">
        <label htmlFor="">Username</label>
        <input
          type="text"
          placeholder="enter your username"
          name="username"
          onChange={passValue}
          className={error.username ? "input-error" : ""}
        />
        <label htmlFor="">Email</label>
        <input
          type="text"
          placeholder="enter your email"
          name="email"
          onChange={passValue}
          className={error.email ? "input-error" : ""}
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          placeholder="enter your password"
          name="password"
          onChange={passValue}
          className={error.password ? "input-error" : ""}
        />
        <button type="submit">Create Account</button>
      </form>
    </section>
  );
}
