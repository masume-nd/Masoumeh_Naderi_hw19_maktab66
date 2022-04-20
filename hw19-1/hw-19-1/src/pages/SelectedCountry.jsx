import React from "react";
import { useContext, useEffect, useState } from "react";
import { useSearchParams,useParams, Link } from "react-router-dom";
import { CountrtyContext } from "../components/ContextCountry";
import { IoMdArrowBack } from "react-icons/io";
import Borderscountry from "../components/BordersCountry";
const Selectedcountry = ({ darkMode }) => {
   const { countries, loading } = useContext(CountrtyContext);
   let params = useParams();
   const [searchParams] = useSearchParams();
   console.log(searchParams);
   const [selected, setSelected] = useState({ currencies: [{ name: "" }] });

   useEffect(() => {
      const currentCountry = Object.values(countries).filter(
         (country) => country.alpha2Code == params.countryId
      );
      console.log(currentCountry);
      setSelected(currentCountry[0]);
   });

   return (
      <div
         className={`country-details-container ${
            darkMode ? "darkBackground" : ""
         }`}
      >
         <div className="back-home-btn container">
            <div className="icon">
               <IoMdArrowBack />
            </div>
            <Link to="/">
               <input
                  className={`button ${darkMode && "dark"}`}
                  type="button"
                  value="Back"
               />
            </Link>
         </div>

         <div className="country-container">
            <div className="flag">
               <img src={selected?.flags?.png} />
            </div>
            <div className="texts">
               <ul className="selected-ul">
               <h2>{selected.name}</h2>
                  <li className="selected-li dark-li">
                     <strong>Native Name: </strong>
                     {selected.nativeName}
                  </li>
                  <li className="selected-li">
                     <strong>Population: </strong>
                     {selected.population}
                  </li>
                  <li className="selected-li">
                     <strong>Region: </strong>
                     {selected.region}
                  </li>
                  <li className="selected-li">
                     <strong>Sub Region: </strong>
                     {selected.subregion}
                  </li>
                  <li className="selected-li">
                     <strong>Capital: </strong>
                     {selected.capital}
                  </li>
               </ul>
            </div>
            <ul className="selected-ul">
               <li className="selected-li">
                  <strong>Top Level Domain: </strong>
                  {selected.topLevelDomain}
               </li>
               <li className="selected-li">
                  <strong>Currencies: </strong>
                  {selected.currencies ? selected?.currencies[0]?.name : "-"}
               </li>
               <li className="selected-li">
                  <strong>Language: </strong>
                  {selected?.languages?.map((language, index) => (
                     <span key={index}>{language.name}</span>
                  ))}
               </li>
            </ul>
               <div className="border-countries">
                  <span><strong>Border Countries:</strong></span>{" "}
                  {selected.borders ? (
                     <Borderscountry
                        borders={selected.borders || []}
                        darkMode={darkMode}
                     />
                  ) : (
                     " - "
                  )}
               </div>
         </div>
      </div>
   );
};

export default Selectedcountry;
