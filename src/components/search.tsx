"use client"


import React, { useState } from 'react';
import { SearchIcon } from '@primer/octicons-react';

const Search = () => {
    const [expanded, setExpanded] = useState(false);

    const handleFocus = () => {
        setExpanded(true);
    };

    const handleBlur = () => {
        setExpanded(false);
    };

    return ( 
        <div className={`flex items-center bg-gray-900 bg-opacity-75 pr-4 rounded-full border border-solid  ${expanded ? 'w-[350px] border-[#5218fa]' : 'w-[200px] border-gray-400'}  py-[5px]  transition-width duration-500 ease-in-out`}>
            <button className='flex items-center justify-center w-[15%] text-white'><SearchIcon/></button>
            <input
                type="search"
                name=""
                placeholder='Buscar todo en todo'
                id=""
                className='bg-transparent w-[85%] outline-none text-white'
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
        </div>
    );
}

export default Search;
