import { searchIcon } from 'apps/vperform-react/src/assets/images';
import React from 'react';

const SearchInput = () => {
  return (
    <div className="relative">
      <input
        type="search"
        className="border border-gray-300 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:border-theme-blue"
        placeholder="Search..."
      />
      <div className="absolute inset-y-0 left-2 flex items-center pr-3 pointer-events-none">
        <img src={searchIcon} />
      </div>
    </div>
  );
};

export default SearchInput;
