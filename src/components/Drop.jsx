import React, { useState } from 'react';

const SimpleComponent = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleDropdown = () => setIsOpen(!isOpen);

  const filterItems = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative">
      <button
        id="dropdownMenuButton"
        data-dropdown-toggle="dropdownMenu"
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-500 border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-blue-500"
        onClick={toggleDropdown}
      >
        Select or Type
        <svg
          className="-mr-1 ml-2 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.293l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          id="dropdownMenu"
          className="hidden z-10 absolute top-full left-0 w-full bg-white rounded-md shadow-sm py-1 text-left"
          data-dropdown-show
        >
          <input
            type="text"
            id="searchText"
            className="block w-full px-4 py-2 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 mb-2"
            placeholder="Search or Select"
            onChange={(e) => filterItems(e.target.value)}
            value={searchTerm}
          />

          <ul id="dropdownItems" className="max-h-60 overflow-y-auto">
            {filteredItems.map((item) => (
              <li key={item} className="py-1 px-2 hover:bg-gray-100">
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SimpleComponent;
