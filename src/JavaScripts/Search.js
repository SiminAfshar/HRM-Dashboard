import React, { useState } from 'react';
import "../Styles/Search.css"

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        onSearch(query);
    };

    return (
        <div className='search'>
            
            <input
                className='input'
                type="text"
                placeholder="... "
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                
            />
            {/* <button onClick={handleSearch}>جستجو</button> */}

            <i onClick={handleSearch} className='bi bi-search searchIcon'></i>
        </div>
    );
};

export default SearchBar;