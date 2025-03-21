
import './App.css'
import Header from './components/Header/Header.jsx'
import PopNewCard from './components/PopNewCard/PopNewCard.jsx'
import PopBrowse from './components/PopBrowse/PopBrowse.jsx'
import Main from './components/Main/Main.jsx'
import PopExit from './components/popups/PopExit/PopExit.jsx'
import React, { useState, useEffect } from 'react';


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
      <div className="wrapper">
        {/* <!-- pop-up start--> */}
        <PopExit />
        <PopNewCard />
        <PopBrowse />
        
        {/* <!-- pop-up end--> */}

        {loading ?  <><Header /> <p className="loud">Идёт загрузка...</p> </>: (
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
