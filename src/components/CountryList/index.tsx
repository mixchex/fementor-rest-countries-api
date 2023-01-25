import React from 'react';
import { Country } from "../../Model";
import CountryListItem from '../CountryListItem';
import Loader from '../Loader';
import { XCircleIcon } from '@heroicons/react/24/outline';
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
    console.log('err', error);
    return (
        <div className="py-2 px-5">
            {
                typeof error.message !== 'undefined' ?
                    <div className="flex items-center space-x-4 px-6 py-4 bg-red-200 text-red-800 rounded dark:bg-red-800 dark:text-white">
                        <XCircleIcon className="w-8 h-8"/><span>{error.message}</span>
                    </div> :
                    <>
                        <div className="fixed bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full shadow-lg bg-white dark:bg-blue-700 font-bold">
                            {loading ?
                                <Loader />
                                :
                                <>Showing {countries.length} {countries.length !== 1 ? 'countries' : 'country'}
                                </>}
                            </div>
                            {(!loading && countries.length !== 0) ?
                                <ul className="flex flex-wrap -mx-4 md:-mx-6 lg:-mx-11 space-x-4 md:space-x-6 lg:space-x-11">
                                    {countries.map((country, i) =>
                                        <li key={i} className={`md:w-80 mx-auto sm:mx-0 mb-8 md:mb-12 ${i == 0 && 'ml-4 md:ml-6 lg:ml-11'}`}>
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