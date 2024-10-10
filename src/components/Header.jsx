import { useState } from "react";

export default function Header({ user }) {
  const [username, setUsername] = useState("");

  const initial = user.split("")[0];

  const promptUser = username.split("")[0];

  const handleuserLogin = () => {
    const name = prompt("Enter Your Name");
    setUsername(name);
  };
  return (
    <div className="header">
      <h1>Header</h1>
      <button onClick={handleuserLogin}>Login</button>
      <span className="circle">{promptUser || initial}</span>
</div>
);
}