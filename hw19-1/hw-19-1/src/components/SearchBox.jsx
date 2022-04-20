import React, { useState, useContext } from "react";
import { useEffect } from "react";
import { CountrtyContext } from "./ContextCountry";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from '@mui/icons-material/Close';
const Searchbox = ({ darkMode }) => {
   let countryName = [];
   const [filteredData, setFilteredData] = useState([]);
   const [wordEntered, setWordEntered] = useState('');
   const { countries, loading } = useContext(CountrtyContext);

   const handleFilter = (e) => {
      const searchWord = e.target.value;
      setWordEntered(searchWord)
      const newFilter = Object.values(countries).filter(country =>
         country.name.toLowerCase().includes(searchWord.toLowerCase())
      );
      if(searchWord === "") {
        setFilteredData([])
      }else {
        setFilteredData(newFilter);
      }
   };

   const clearInput = () => {
    setFilteredData([])
    setWordEntered('')
   }

   return (
      <>
         <div className="search">
            <input
               style={darkMode ? darkModeTheme : lightMode}
               type="text"
               value={wordEntered}
               placeholder="Search a Country..."
               onChange={handleFilter}
            />
              <span className="icon-search">
                {filteredData.length == 0 ? 
                  <SearchIcon /> :
                 <CloseIcon id="close-btn" onClick={clearInput}/>}
              </span>  
         {filteredData.length != 0 && (
            <div className={`search-resault ${darkMode && "dark"}`}>
               {filteredData
                  .slice(0, 15)
                  .map((country, key) => {
                     return (
                        <Link
                           className="links"
                           key={key}
                           to={`/${country.alpha2Code}`}
                            style={darkMode ? darkModeTheme : lightMode}

                        >
                           <p>{country.name}</p>
                        </Link>
                     );
                  })}
            </div>
         )}
         </div>
      </>
   );
};

const darkModeTheme = {
	backgroundColor: "hsl(209, 23%, 22%)",
	color: "hsl(0, 0%, 100%)",
   boxShadow:"none"
};

const lightMode = {
	color: "hsl(200, 15%, 8%)",
};
export default Searchbox;
