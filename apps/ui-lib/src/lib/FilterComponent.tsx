import React, { useState } from 'react';
import filterIcon from '../../../vperform-react/src/assets/images/filterIcon.svg'

const FilterComponent = () => {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const options = ['First', 'Second', 'Third'];

  return (
    <div className="relative">
      <img src={filterIcon} alt="logo" className="cursor-pointer" onClick={toggleOptions}/>
      {showOptions && (
        <div className="absolute z-10 mt-2 bg-white shadow-md rounded-md">
          <ul >
            {options.map((option, index) => (
              <li key={index} className="py-2 px-4 cursor-pointer hover:bg-gray-100">
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FilterComponent;


// import React, { useState } from 'react';
// // import filterIcon from './filter-icon.png';

// interface FilterOption {
//   value: string;
//   label: string;
// }

// const FilterComponent = () => {
//   const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
//   const [selectedOption, setSelectedOption] = useState<string>('');

//   const options: FilterOption[] = [
//     { value: 'option1', label: 'Option 1' },
//     { value: 'option2', label: 'Option 2' },
//     { value: 'option3', label: 'Option 3' },
//   ];

//   const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setSelectedOption(e.target.value);
//   };
//   const toggleFilter = () => {
//     // console.log('Hie')
//      setIsFilterOpen(!isFilterOpen);
//   };
//   return (
//     <div className="flex items-center justify-center">
//       <div className="relative">
//         <button
//           className="flex items-center justify-center bg-white border border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow focus:outline-none focus:shadow-outline"
//           onClick={toggleFilter}
//         > <img src="" alt="" className="h-4 w-4 mr-2" />
//         </button>
//         {isFilterOpen && (
//           <div className="absolute z-10 mt-2 bg-white border border-gray-400 rounded shadow">
//             <select
//               className="block appearance-none w-full bg-white px-4 py-2 rounded focus:outline-none focus:shadow-outline"
//               value={selectedOption}
//               onChange={handleOptionChange}
//             >
//               {options.map((option) => (
//                 <option key={option.value} value={option.value}>
//                   {option.label}
//                 </option>
//               ))}
//             </select>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FilterComponent;