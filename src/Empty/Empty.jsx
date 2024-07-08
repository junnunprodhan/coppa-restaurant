import React from 'react';
import { Link } from 'react-router-dom';

const Empty = ({ path }) => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-3xl font-bold">No Content Found</h1>
                <p className="text-gray-600 mt-4">Sorry, there is no content to display on this page.</p>
                <Link to={path}>
                    <button
                        className="bg-blue-500 text-white uppercase font-semibold px-4 py-2 mt-4 rounded-full hover:bg-blue-700"

                    >
                        GO BACK
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Empty;