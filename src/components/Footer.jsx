import React from "react";

export default function Footer({ setUser }) {
  return (
    <div className="footer">
      <p>Footer</p>
      <button className="logout" onClick={() => setUser("")}>
        Logout
      </button>
</div>
);
}