import React from 'react';
import { Country } from "../../Model";
import CountryListItem from '../CountryListItem';
import Loader from '../Loader';
import Alert from '../Alert';
interface Props {
    countries: Country[],
    loading: boolean,
    error: {
        status?: number,
        message?: string
    }
}

const CountryList = ({
    countries,
    loading,
    error
}: Props) => {
    return (
        <div className="py-2 px-5">
            {
                typeof error.message !== 'undefined' ?
                    <Alert error={error} /> :
                    <>
                        {loading && <Loader />}
                        <div className={`transition-transform animate-move-in ${loading && 'translate-y-20'} fixed bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full shadow-lg bg-white dark:bg-blue-700 font-bold`}>
                            Showing {countries.length} {countries.length !== 1 ? 'countries' : 'country'}
                        </div>
                        {(!loading && countries.length !== 0) ?
                            <ul className="flex flex-wrap md:-mx-11 md:space-x-12 2xl:space-x-11">
                                {countries.map((country, i) =>
                                    <li key={i} className={`md:w-80 mx-auto sm:mx-0 mb-8 md:mb-12 ${i === 0 && 'md:ml-11'}`}>
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
                    </>
            }
        </div>
    )
}
export default CountryList;