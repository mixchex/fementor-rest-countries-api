import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout';

const NotFound = () => {
    return (
        <Layout>
            <div className="px-5 py-2 space-y-2">
                <h1 className="font-bold text-xl">Page not found</h1>
                <p>You've tried to find a country that doesn't exist.</p>
                <p><Link to="/" className="underline hover:no-underline hover:text-gray-800">Go back home</Link></p>
            </div>
        </Layout>
    )
}
export default NotFound;