import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import { Country } from "../../Model";

import Layout from '../Layout';

import CountryFilters from '../../components/CountryFilters';
import CountryList from '../../components/CountryList';


const CountryIndex = () => {
    const location = useLocation();

    const [timer, setTimer] = useState<number | null>(null);
    const [countries, setCountries] = useState<Country[]>([]);

    useEffect(() => {
        debounceCountries();
    }, [location.search])

    const debounceCountries = () => {
        if (timer) {
            window.clearTimeout(timer);
        }
        setTimer(window.setTimeout(() => {
            if (location.search) {
                getCountries();
            }
        }, 500));
    }

    const getCountries = () => {
        const q = new URLSearchParams(location.search);
        let url = "https://restcountries.com/v3.1/all";
        if (q.get('s') != null) {
            url = `https://restcountries.com/v3.1/name/${q.get('s')}`
        }
        else if (q.get('region') != null) {
            url = `https://restcountries.com/v3.1/region/${q.get('region')}`
        }
        axios.get(url)
            .then(response => {
                console.log('response', response.data);
                setCountries(response.data);
            })
            .catch(error => {
                console.log('error', error);
            });
    }

    return (
        <Layout>
            <CountryFilters  />
            <CountryList countries={countries} />
        </Layout>
    )
}

export default CountryIndex;