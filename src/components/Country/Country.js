import { Button } from 'react-bootstrap';
import React from 'react';
import './Country.css';
import { Link } from 'react-router-dom';

const Country = (props) => {
    console.log(props);
    const {name, flag} = props.country;
    return (
        <div className="country">
            <img src={flag} alt=""/>
            <h3>{name}</h3>
            <Link to={`/country/${name}`}>
                <Button variant="dark">Show Detail</Button>
            </Link>
        </div>
    );
};

export default Country;