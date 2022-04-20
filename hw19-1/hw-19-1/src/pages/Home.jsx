import React,{ useContext }  from 'react';import Cards from '../components/Cards';
import Filterbyregion from '../components/FilterByRegion';
import { CountrtyContext } from '../components/ContextCountry';

const Home = ({ darkMode }) => {
  const {countries, loading} = useContext(CountrtyContext);
  return (
    <>
      <Filterbyregion darkMode={darkMode} />
    </>
  );
}

export default Home;
