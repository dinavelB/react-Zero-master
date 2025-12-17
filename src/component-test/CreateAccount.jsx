import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../public/components.css";

export default function CreateAccount() {
  const [userData, setUserData] = useState("");

  const createAccount = async (e) => {
    e.preventDefault();
  };

  return (
    <section className="form-container">
      <h1>Create Account</h1>
      <form action="" className="create-account-form">
        <label htmlFor="">Username</label>
        <input type="text" placeholder="enter your username" />
        <label htmlFor="">Email</label>
        <input type="text" placeholder="enter your email" />
        <label htmlFor="">Password</label>
        <input type="text" placeholder="enter your password" />
        <button type="submit">Create Account</button>
      </form>
    </section>
  );
}
