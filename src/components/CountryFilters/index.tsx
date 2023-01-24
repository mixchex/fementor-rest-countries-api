import React, { useState, useEffect, ChangeEvent } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import { MagnifyingGlassIcon as SearchIcon, ChevronDownIcon } from "@heroicons/react/24/outline"

interface Filters {
    s?: string,
    region?: string
}
const CountryFilters = () => {
    const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

    const location = useLocation();
    const navigate = useNavigate();

    const [showRegions, setShowRegions] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [currentRegion, setCurrentRegion] = useState<string>('');

    const handleRegionClick = (region: string) => {
        const q = new URLSearchParams(location.search);
        const reg = q.get('region');
        if (reg !== region) {
            navigate({ search: `?region=${region.toLowerCase()}`, pathname: '' });
            setCurrentRegion(region);
            setShowRegions(false);
        }
    }

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
        setSearchValueForQueryString(e.target.value);
    }

    const changeCurrentRegion = () => {
        const q = new URLSearchParams(location.search);
        const reg = q.get('region'); 
        if (reg) {
            setCurrentRegion(reg);
        }
        else {
            setCurrentRegion('');
        }
    }

    const getFiltersFromQueryString = () => {
        const urlParams = new URLSearchParams(location.search);
        return Object.fromEntries(urlParams);
    };

    const getQueryStringFromFilters = (filters: {}) => {
        return new URLSearchParams(filters).toString();
    };

    const setSearchValueForQueryString = (value: string) => {
        let filters: Filters = {};
        value == "" ? delete filters.s : (filters.s = value);
        navigate({
            pathname: location.pathname,
            search: getQueryStringFromFilters(filters),
        });
    };

    const setupSearch = () => {
        let filters = getFiltersFromQueryString();
        if (filters.s != null) {
            setSearchValue(filters.s);
        }
    }

    useEffect(() => {
        setupSearch();
    }, []);

    useEffect(() => {
        changeCurrentRegion();
    }, [location]);

    return (
        <div className="flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 sm:flex-row sm:justify-between mb-4 md:mb-6 px-5">
            <div className="w-full row mb-4 md:mb-0 md:w-3/5 lg:w-2/5">
                <label htmlFor="countrySearch" className="sr-only">
                    Search for a country
                </label>
                <div className="relative"> 
                    <SearchIcon className="w-5 h-5 absolute top-5 mt-0.5 left-7 text-gray-700 dark:text-white"/>
                    <input
                        id="countrySearch"
                        name="countrySearch"
                        type="search"
                        value={searchValue}
                        onChange={handleSearchChange}
                        placeholder="Search for a country..."
                        className="bg-white dark:bg-blue-700 dark:text-white transition-colors rounded w-full h-16 pl-16 pr-4 shadow-md focus:outline-offset-2 focus:outline-2 focus:outline-blue-800 dark:focus:outline-gray-100"
                        />
                </div>
            </div>
            <div className="w-full md:w-48 sm:grow-0 relative">
                <button onClick={() => setShowRegions(!showRegions)} className="relative capitalize whitespace-nowrap z-10 bg-white text-blue-800 dark:bg-blue-700 dark:text-white transition-colors flex justify-between items-center rounded w-full h-16 px-6 shadow-md focus:outline-offset-2 focus:outline-2 focus:outline-blue-800 dark:focus:outline-gray-100 cursor-pointer">
                    {currentRegion ? currentRegion : 'Filter by Region' }
                    <ChevronDownIcon className={`w-4 h-4 text-gray-700 transition-transform rotate-0 ${showRegions && 'rotate-180'}`} />
                </button>
                <div className={`bg-white text-gray-800 dark:bg-blue-700 dark:text-white transition-all absolute z-20 top-full mt-2 left-0 w-full shadow-md rounded ${showRegions ? 'visible' : 'hidden'}`}>
                    <ul className="my-2 text-center">
                        {regions.map((region, i) => 
                            <li key={i}>
                                <button onClick={() => handleRegionClick(region)} className={`w-full text-left px-6 py-2 hover:bg-gray-100 dark:hover:bg-blue-800 focus:outline-offset-2 focus:outline-2 focus:outline-blue-800 dark:focus:outline-gray-100 cursor-pointer ${currentRegion.toLowerCase() == region.toLowerCase() && 'bg-gray-100 font-semibold dark:bg-blue-900 dark:text-white'}`}>
                                    {region}
                                </button>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default CountryFilters;