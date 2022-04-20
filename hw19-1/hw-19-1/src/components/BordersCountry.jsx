import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { CountrtyContext } from "./ContextCountry";
import { Link } from "react-router-dom";
const Borderscountry = ({ borders, darkMode }) => {
   const [bordersInfo, setBordersInfo] = useState([]);
   const { countries, loading } = useContext(CountrtyContext);

   useEffect(() => {
      const filterCountry = Object.values(countries).filter(
         (country) => borders.includes(country.alpha3Code)

         // return borders.includes(country.alpha3Code) ? country.name : null;
      );
      const borderCountry = filterCountry.map((country) => [
         country.name,
         country.alpha2Code,
      ]);
      setBordersInfo(borderCountry); // setBordersCode(borderAlpha2Code)
   }, []);
   return (
      <div>
         {bordersInfo.map((neighbor) => (
            <Link
               to={`/${neighbor[1]}`}
               style={{ color: "inherit", textDecoration: "none" }}
            >
               <input
                  className={`button ${darkMode && "dark"}`}
                  type="button"
                  value={neighbor[0]}
               />
            </Link>
         ))}
      </div>
   );
};

export default Borderscountry;
