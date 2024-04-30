import { FC, useState, useEffect, useRef } from 'react';
import downArrow from '../../../vperform-react/src/assets/images/Vector.png'
 
//! <-----------------ROTAT------------>
 
interface DropdownOption {
  name: string;
  id: string|number;
}
 
interface DropdownWithLabelProps {
  id?: string;
  options: DropdownOption[];
  height?: string;
  width?: string;
  onChange: (selected: string|undefined) => void;
  value?: string | undefined;
  defaultValue?: string;
  dropdownPosition?: 'up' | 'down'; // New prop for dropdown position
  label?: string | undefined;
}
 
const DropdownWithLabel: FC<DropdownWithLabelProps> = ({ options, height, width, onChange, value, defaultValue, dropdownPosition = 'down', label }) => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(value);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
 
 
 
  useEffect(() => {
    setSelectedValue(value);
  }, [value]);
 
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
 
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
 
  const handleOptionClick = (option: DropdownOption) => {
    const newValue: string | undefined = option.name === defaultValue ? undefined : option.name;
    onChange(newValue);
    setSelectedValue(newValue);
    setIsOpen(false);
  };
 
  const dropdownStyle = dropdownPosition === 'up' ? "origin-bottom-left bottom-full" : "origin-top-left top-full";
 
  return (
    <div className={`z-20 relative inline-block text-left ${width} ${height}`} ref={dropdownRef}>
      <div>
        <span className="rounded-md shadow-sm">
          <button
            type="button"
            className="inline-flex justify-between w-full rounded border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:outline-primary items-center"
            aria-haspopup="true"
            aria-expanded="true"
            onClick={toggleDropdown}
          >
            <span className="font-gothamLight">
              {selectedValue !== undefined ? selectedValue : defaultValue}
            </span>
            <img src={downArrow} className={`${isOpen ? 'transform rotate-180' : ''}`} alt="dropdown-arrow" />
            {/* <SvgDropDownArrow/> */}
          </button>
        </span>
        {label && <label
        className={`absolute top-0 left-0 px-2 bg-white text-gray-600 -translate-y-1/2 transform ml-4 text-sm`}
        >{label} <span className='text-red-500'>*</span>
        </label>}
      </div>
      {isOpen && (
        <div className={`absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10 w-full ${dropdownStyle}`}>
          <div className="py-2" role="menu" aria-orientation="vertical">
            {options.map(option => (
              <div
                key={option.name}
                className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleOptionClick(option)}
              >
                <span className="text-sm font-gothamLight">{option.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
 
export default DropdownWithLabel;