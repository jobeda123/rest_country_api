import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './CountryDetails.css';

const CountryDetails = () => {
    const { name  } = useParams();
    const [ country, setCountry ] = useState([]);
    const history = useHistory();

    useEffect(() =>{
        const url = `https://restcountries.eu/rest/v2/name/${name}`;
        fetch(url)
        .then(res => res.json())
        .then(data =>{
            setCountry(data[0]);
            //console.log(country);
        });
    }, []);

    const buttonHandle =()=>{
        const url ='/home';
        history.push(url);
    }

    return (

        <div className="country">
            <img src={country.flag} alt=""/>
            <h3>Name: {country.name}</h3>
            <h5>Country Code: {country.alpha3Code}</h5>
            <h5>Capital: {country.capital}</h5>
            <h5>Area: {country.area}</h5>
            <h5>Population: {country.population}</h5>
            <h5>Region: {country.region}</h5>
            <h5>TimeZone: {country.timezones}</h5>
            <button onClick={buttonHandle}>Back To Home</button>
        </div>
    );
};

export default CountryDetails;