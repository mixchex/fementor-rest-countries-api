import React, { useEffect, useState } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';

import axios from 'axios';
import { ArrowLeftIcon } from "@heroicons/react/24/outline"

import { Country } from '../../Model';

import Loader from '../../components/Loader';
import Layout from '../Layout';
import CountryListItem from '../../components/CountryListItem';
import Alert from '../../components/Alert';
interface Currency {
    name: string,
    symbol: string
}

const defaultCountry = {
    capital: [],
    flags: {
        svg: '',
        png: ''
    },
    languages: {
        
    },
    currencies: [],
    name: {
        official: '',
        common: '',
        nativeName: {
            eng: {
                commom: '',
                official: ''
            },
            fra: {
                common: '',
                official: ''
            }
        }
    },
    population: 0,
    region: '',
    subregion: '',
    tld: [],
    borders: []
}

const CountryShow = () => {
    const params = useParams();
    const location = useLocation();

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [country, setCountry] = useState(defaultCountry);
    const [nativeName, setNativeName] = useState('');
    const [currencies, setCurrencies] = useState(['none']);

    const getCountry = (countryName: string | undefined) => {
        setLoading(true);
        axios.get(`/v3.1/name/${countryName}`)
            .then(response => {
                const data = response.data[0]
                setCountry(data);
                setNativeName(getNativeName(data));
                setCurrencies(getCurrencies(data));
                setLoading(false);
            })
            .catch(err => {
                setError(err.response.data);
                setLoading(false);
            })
    }

    useEffect(() => {
        let country = params.country;
        getCountry(country);
    }, []);

    useEffect(() => {
        let country = params.country;
        getCountry(country);
    }, [location]);

    const getNativeName = (data: Country): string => {
        return typeof Object.values(data.name.nativeName)[0].common != undefined
            ? Object.values(data.name.nativeName)[0].common : 'none'
    }

    const getCurrencies = (data: Country): string[] => {
        let items = Object.values(data.currencies);
        const curr: string[] = [];
        items.map((item: Currency) => {
            curr.push(item.name);
        })
        return curr;
    }

    return (
        <Layout>
            <div className="px-5 py-2">
                <div className="inline-block mb-8 md:mb-10">
                    <Link to="/" className="flex space-x-2 items-center px-8 h-12 rounded shadow-md bg-white text-blue-800 dark:bg-blue-700 dark:text-white">
                        <ArrowLeftIcon className="w-4 h-4" />
                        <span>Back</span>
                    </Link>
                </div>
                {loading ? 
                    <Loader />
                    :
                    (
                        error ? 
                        <Alert error={error} /> :
                        <CountryListItem
                            name={country.name.official}
                            nativeName={nativeName}
                            flagSrc={country.flags.svg}
                            capital={country.capital}
                            currencies={currencies}
                            region={country.region}
                            subregion={country.subregion}
                            population={country.population}
                            languages={country.languages}
                            borders={country.borders}
                            tld={country.tld}
                            card={false}
                            />
                    )
                }
            </div>
        </Layout>
    )
}

export default CountryShow;