import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Selectedcountry from "./pages/SelectedCountry";
// import Contextcountry,{ CountrtyContext } from "./components/ContextCountry";

function App() {
   const [theme, setTheme] = useState(false);

   let clickHandler = () => {
      setTheme(!theme);
   };
   

   return (
         <Routes>
            <Route
               path="/"
               element={<NavBar darkMode={theme} onClick={clickHandler} />}
            >
               <Route index element={<Home darkMode={theme} />} />
               <Route
                  path=":countryId"
                  element={<Selectedcountry darkMode={theme} />}
               />
            </Route>
         </Routes>
   );
}

export default App;
