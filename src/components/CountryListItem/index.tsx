import React, { useState, useEffect, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import borderMap from '../../assets/borders.json';

interface Props {
    name?: string,
    nativeName?: string,
    currencies?: string[],
    capital: string[],
    region?: string,
    subregion?: string,
    languages?: {},
    population: number,
    tld?: string[],
    card?: Boolean,
    flagSrc: string,
    borders?: string[]
}

const CountryListItem = ({
    card = true,
    flagSrc = '',
    name = '',
    nativeName = '',
    capital = [],
    currencies = [],
    region = '',
    subregion = '',
    languages = {},
    population = 0,
    borders = [],
    tld = []
}: Props) => {
    
    const [url, setUrl] = useState<string>('');

    useEffect(() => {
        setupUrl();
        //setupBorders();
    }, []);

    const setupUrl = () => {
        let newName = name.split(' ');
        setUrl(`/countries/${newName[newName.length-1].toLowerCase()}`);
    }

    const theBorder = (key: string) => {
        console.log('ke', key);
        const keyTyped = key as keyof typeof borderMap;
        return borderMap[keyTyped]; 
    }

    return (
        <div className={card ? 'bg-white dark:bg-blue-700 shadow-md rounded md:h-80 overflow-hidden transition-colors': 'flex flex-col md:flex-row md:justify-between'}>
            { /* image */}
            <div className={card ? 'w-full' : 'w-full md:w-1/3 xl:w-1/2 md:pr-5 xl:pr-20'}>
                {card ?
                    <Link to={url} className="w-full h-48 md:h-40 overflow-hidden">
                        <img
                            src={flagSrc}
                            alt={`Flag of ${name}`}
                            className="object-center object-cover aspect-video"
                        />
                    </Link>
                    :
                    <img
                        src={flagSrc}
                        alt={`Flag of ${name}`}
                        className="object-center object-cover shadow-md rounded"
                    />
                }
            </div>
            <div className={card ? 'w-full p-8 md:p-4' : 'w-full py-4 md:py-0 xl:py-8 md:w-2/3 xl:w-1/2 md:pl-5 xl:pl-20'}>
                <h2 className={`font-bold mb-2 truncate overflow-hidden ${card ? 'text-lg' : 'text-xl md:text-2xl'}`}>
                    {card ?
                        <Link to={url}>
                            {name}
                        </Link>
                        : name
                    }
                </h2>
                <div className={`md:text-sm space-y-1 ${card ? '' : 'flex flex-col xl:flex-row'}`}>
                    <div className={`space-y-1 ${card ? '' : 'xl:w-1/2'}`}>
                        { nativeName !== '' &&
                            <dl>
                                <dt className="font-semibold inline-block">Native Name:</dt>
                                <dd className="inline-block clear-both ml-1">{nativeName}</dd>
                            </dl>
                        }
                        { population !== 0 && 
                            <dl>
                                <dt className="font-semibold inline-block">Population:</dt>
                                <dd className="inline-block clear-both ml-1">{population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</dd>
                            </dl>
                        }
                        { region !== '' &&
                            <dl>
                                <dt className="font-semibold inline-block">Region:</dt>
                                <dd className="inline-block clear-both ml-1">{region}</dd>
                            </dl>
                        }
                        { subregion !== '' &&
                            <dl>
                                <dt className="font-semibold inline-block">Sub Region:</dt>
                                <dd className="inline-block clear-both ml-1">{subregion}</dd>
                            </dl>    
                        }
                        { capital.length !== 0 &&
                            <dl>
                                <dt className="font-semibold inline-block">Capital:</dt>
                                <dd className="inline-block clear-right ml-1">{ capital ? capital.join(', ') : <em>N/A</em>}</dd>
                            </dl>
                        }
                    </div>
                    {
                        currencies.length !== 0 &&
                        <div className={`space-y-1 ${card ? '' : 'xl:w-1/2'}`}>
                        {tld &&
                            <dl>
                                <dt className="font-semibold inline-block">Top Level Domain:</dt>
                                <dd className="inline-block clear-both ml-1">{tld.length !== 0 ? tld.join(', ') : <em>N/A</em>}</dd>
                            </dl>
                        }
                        <dl>
                            <dt className="font-semibold inline-block">Currencies:</dt>
                            <dd className="inline-block clear-both ml-1">{currencies ? currencies.join(', ') : <em>N/A</em>}</dd>
                        </dl>
                        <dl>
                            <dt className="font-semibold inline-block">Languages:</dt>
                            <dd className="inline-block clear-both ml-1">{languages ? Object.values(languages).join(', ') : <em>N/A</em>}</dd>
                        </dl>
                    </div>
                    }
                </div>
                { borders.length !== 0 &&
                    <div className="mt-8 lg:mt-12 flex flex-col md:flex-row lg:space-x-2">
                        <h3 className="font-bold text-lg md:text-sm md:font-semibold whitespace-nowrap md:mt-1.5">Border Countries:</h3>
                        {borders.length !== 0 ? <ul className="flex flex-wrap pl-0 space-x-2 space-y-2 md:-mt-2">
                            {borders.map((border: string, i) => {
                                return (<li key={border} className={`${i === 0 && 'mt-2 md:ml-2'}`}>
                                    <Link to={`/countries/${theBorder(border)}`} className="bg-white text-blue-800 dark:bg-blue-700 dark:text-white shadow-md flex items-center  h-10 md:h-8 px-6 md:px-8">
                                        {theBorder(border)}
                                    </Link>
                                </li>)
                            })}
                        </ul> : <em>None</em>
                        }
                    </div>
                }
            </div>
        </div>
    )
}
export default CountryListItem;