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

  const passValue = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const createAccount = async (e) => {
    e.preventDefault();

    const sendData = await fetch("/create-account", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    console.log("Data sent at route: '/create-account'");
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
        />
        <label htmlFor="">Email</label>
        <input
          type="text"
          placeholder="enter your email"
          name="email"
          onChange={passValue}
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          placeholder="enter your password"
          name="password"
        />
        <button type="submit">Create Account</button>
      </form>
    </section>
  );
}
