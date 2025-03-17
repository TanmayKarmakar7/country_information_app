import React, { useContext, useEffect, useState } from 'react';
import './CountryDetails.css';
import { Link, useParams } from 'react-router-dom';
import CountryDetailsLoading from './CountryDetailsLoading';
import { ThemeContext } from '../context/ThemeContext';

const CountryDetails = () => {
    const params = useParams();
    const countryName = params.country;

    const [country, setCountry] = useState({});
    const [borderCountries, setBorderCountries] = useState([]);

    useEffect(() => {
        fetch(`https://restcountries.com/v3/name/${countryName}?fullText=true`)
            .then((res) => res.json())
            .then(([data]) => {
                setCountry({
                    name: data.name?.common || "-------",
                    image: data.flags?.[1] || "",
                    nativeName: data.name?.nativeName ? Object.values(data.name.nativeName)[0]?.official || "-------" : "-------",
                    population: data.population ? data.population.toLocaleString('en-IN') : "-------",
                    area: data.area ? data.area.toLocaleString('en-IN') : "-------",
                    region: data.region || "-------",
                    subregion: data.subregion || "-------",
                    capital: data.capital?.[0] || "-------",
                    tld: data.tld?.join(', ') || "-------",
                    currencies: data.currencies ? Object.values(data.currencies).map(currency => currency.name).join(', ') : "-------",
                    languages: data.languages ? Object.values(data.languages).join(', ') : "-------",
                    timezones: data.timezones?.join(', ') || "-------",
                    unMember: data.unMember ? "Yes" : "No",
                    idd: data.idd || { root: "-------", suffixes: ["-------"] },
                    independent: data.independent ? "Yes" : "No",
                    borders: data.borders || []
                });

                // Fetch border country names using the border codes
                if (data.borders) {
                    Promise.all(
                        data.borders.map((borderCode) =>
                            fetch(`https://restcountries.com/v3/alpha/${borderCode}`)
                                .then((res) => res.json())
                                .then(([borderData]) => borderData.name?.common || "-------")
                        )
                    )
                    .then(setBorderCountries);
                }
            });
    }, [countryName]);

    const [isDark] = useContext(ThemeContext);

    return (
        <div id="main" className={isDark ? 'dark' : ''}>
            <button className="back-btn" onClick={() => window.history.back()}>
                <i className="fa-solid fa-arrow-left"></i> Back
            </button>
            {!country.name ? <CountryDetailsLoading /> :
                <div className="country--container">
                    <div className="country--flag">
                        <img src={country.image} alt={`Flag of ${country.name}`} loading="lazy" />
                    </div>
                    <div className="country--details">
                        <h3>{country.name}</h3>
                        <ul>
                            <li><b>Native Name: </b>{country.nativeName}</li>
                            <li><b>Population: </b>{country.population}</li>
                            <li><b>Area: </b>{country.area} Square km</li>
                            <li><b>Region: </b>{country.region}</li>
                            <li><b>Sub Region: </b>{country.subregion}</li>
                            <li><b>Capital: </b>{country.capital}</li>
                            <li><b>Top Level Domain: </b>{country.tld}</li>
                            <li><b>Currencies: </b>{country.currencies}</li>
                            <li><b>Languages: </b>{country.languages}</li>
                            <li><b>Timezones: </b>{country.timezones}</li>
                            <li><b>UN Member: </b>{country.unMember}</li>
                            <li><b>Country Code: </b>{country.idd?.root}{country.idd?.suffixes?.[0]}</li>
                            <li><b>Independent: </b>{country.independent}</li>
                        </ul>
                        <div className="border--countries">
                            <p>Border Countries: </p>
                            {
                                borderCountries.length > 0 ?
                                    borderCountries.map((border) => (
                                        <Link key={border} to={`/${border}`}>{border}</Link>
                                    )) :
                                    <span>No Border Countries</span>
                            }
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default CountryDetails;
