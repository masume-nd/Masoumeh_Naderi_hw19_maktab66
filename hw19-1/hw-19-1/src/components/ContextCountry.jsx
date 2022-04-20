import React, { useState, useEffect } from "react";
import axios from "axios";
export const CountrtyContext = React.createContext();

const Contextcountry = ({ children }) => {
   const [countries, setcountries] = useState({});
   const [loading, setLoading] = useState(true);
   
   useEffect(() => {
      const getData = async () => {
         await axios.get("https://restcountries.com/v2/all").then((res) => {
            setcountries(res.data);
            setLoading(false);
         });
      };
      getData();
   }, []);


   return (
      <CountrtyContext.Provider value={{ countries, loading }}>
         { children }      
      </CountrtyContext.Provider>
   );
};

export default Contextcountry;
