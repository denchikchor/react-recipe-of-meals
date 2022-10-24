import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './Search.scss';

export default function Search({ serchMeal }) {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            navigate(`/searchMeal/${search}`);
        }
    };

    return (
        <div className="Search">
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Name of dish"
                onKeyDown={handleKeyDown}
            />
            <Link
                to={`/searchMeal/${search}`}
                onClick={() => setSearch('')}
                style={{ pointerEvents: search ? '' : 'none' }}
            >
                Search
            </Link>
        </div>
    );
}
