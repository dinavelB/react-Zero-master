import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export function Home() {
  const nav = useNavigate();

  const gotBackLogin = () => {
    nav("/home");
  };
  return (
    <>
      <button onClick={gotBackLogin}>Back</button>
      <h1>
        Welcome to the Homepage, finally u figured it <output></output>!
      </h1>
    </>
  );
}
