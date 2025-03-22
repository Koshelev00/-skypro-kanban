import "./App.css";
import Header from "./components/Header/Header.jsx";
import PopNewCard from "./components/PopNewCard/PopNewCard.jsx";
import PopBrowse from "./components/PopBrowse/PopBrowse.jsx";
import Main from "./components/Main/Main.jsx";
import React, { useState, useEffect } from "react";
import { SGlobal } from "../Global.styled.js";


export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <SGlobal />
      <div className="wrapper">
        {/* <!-- pop-up start--> */}

     
        <PopNewCard />
        <PopBrowse />

        {/* <!-- pop-up end--> */}

        {loading ? (
          <>
            <Header /> <p className="loud">Идёт загрузка...</p>{" "}
          </>
        ) : (
          <>
            <Header />
            <Main />
          </>
        )}
      </div>

      <script src="js/script.js"></script>
    </>
  );
}
