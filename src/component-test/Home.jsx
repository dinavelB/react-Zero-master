import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export function Home() {
  const [userName, setUsername] = useState("");
  const nav = useNavigate();

  const gotBackLogin = () => {
    nav("/");
  };

  useEffect(() => {
    const receivedData = async () => {
      const response = await fetch("submit-response");
      const data = await response.json();
      setUsername(data.username || "");
    };
    receivedData();
  }, []);

  return (
    <>
      <button onClick={gotBackLogin}>Back</button>
      <h1>Welcome to the Homepage, finally u figured it out {userName}!</h1>
    </>
  );
}
