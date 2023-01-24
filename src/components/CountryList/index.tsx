import React from 'react';
import { Country } from "../../Model";
import CountryListItem from '../CountryListItem';

interface Props {
    countries: Country[]
}

const CountryList = ({
    countries
}: Props) => {
    return (
        <div className="py-2 px-5">
            {countries.length !== 0 ?
                <ul className="flex flex-wrap justify-between">
                    {countries.map((country, i) => 
                        <li key={i} className={`md:w-80 mx-auto sm:mx-0 mb-8 md:mb-12`}>
                            <CountryListItem
                                name={country.name.common}
                                population={country.population}
                                capital={country.capital}
                                region={country.region}
                                flagSrc={country.flags.svg}
                            />
                        </li>
                   )}
                </ul>
            : <em>No countries found.</em>}
        </div>
    )
}
export default CountryList;