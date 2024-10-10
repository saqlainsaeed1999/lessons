import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [user, setUser] = useState("Waleed");
  return (
    <div className="super-parent">
      <Header user={user} />
      <div className="parent">
        <p>Hello</p>
      </div>
      <Footer setUser={setUser} />
    </div>
  );
}

export default App;