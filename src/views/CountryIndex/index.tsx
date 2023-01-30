import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import { Country } from "../../Model";

import Layout from '../Layout';

import CountryFilters from '../../components/CountryFilters';
import CountryList from '../../components/CountryList';


const CountryIndex = () => {
    const location = useLocation();

    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState({});
    const [timer, setTimer] = useState<number | null>(null);
    const [countries, setCountries] = useState<Country[]>([]);

    useEffect(() => {
        getCountries();
    }, []);

    useEffect(() => {
        debounceCountries();
    }, [location])

    const debounceCountries = () => {
        setError({});
        if (location.search !== "") {
            if (timer) {
                window.clearTimeout(timer);
            }
            setTimer(window.setTimeout(() => {
                if (location.search) {
                    getCountries();
                }
            }, 500));
        }
        else {
            getCountries();
        }
    }

    const getCountries = () => {
        setLoading(true);
        const q = new URLSearchParams(location.search);
        let url = "";
        if (q.get('s') != null) {
            url = `https://restcountries.com/v3.1/name/${q.get('s')}`
        }
        else if (q.get('region') != null) {
            url = `https://restcountries.com/v3.1/region/${q.get('region')}`
        }
        else {
            url = "https://restcountries.com/v3.1/all";
        }
        axios.defaults.withCredentials = false;
        axios.get(url)
            .then(response => {
                setCountries(response.data);
                setLoading(false);
            })
            .catch(err => {
                setLoading(false);
                setError(err.response.data);
            });
    }

    return (
        <Layout>
            <CountryFilters />
            <CountryList error={error} loading={loading} countries={countries} />
        </Layout>
    )
}

export default CountryIndex;