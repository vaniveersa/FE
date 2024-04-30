import { Modal, SearchInput } from 'apps/ui-lib/src/lib';
import DropdownWithLabel from 'apps/ui-lib/src/lib/DropDown';
import React, { useState } from 'react'
import { filterIcon, options } from '../../assets/images';




const GoalSetting = () => {
    const [activeTab, setActiveTab] = useState<String>('Goal Mapping');
    const [addGoalClicked,setAddGoalClicked] = useState<boolean>(false);
    const dropdownList = [{name:'Excellent',id:1},{name:'Excellent',id:1},{name:'Excellent',id:1},{name:'Excellent',id:1},]
    const handleTabClick = (tab:String) => {
      setActiveTab(tab);
    };

    const items = [
        {
          title: 'Section 1',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          title: 'Section 2',
          content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        },
        {
          title: 'Section 3',
          content: 'Nulla facilisi. Fusce a metus eu ex interdum sodales sit amet id quam.',
        },
      ];
      
    const [activeIndex, setActiveIndex] = useState(null);
    
    const handleAccordianClick = (index:any) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    const handleAddGoal = (e:React.MouseEvent<HTMLDivElement>) =>{
        e.stopPropagation();
        setAddGoalClicked(!addGoalClicked)
    }
  
    return (
      <div className=''>
        
        <div className="flex border-b border-gray-200  mt-5">
          <button
            className={`pb-5 pt-2 px-5 ml-3 text-sm font-medium ${
              activeTab === 'Goal Mapping'
                ? 'text-gray-700 border-b-2 border-theme-blue'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => handleTabClick('Goal Mapping')}
          >
            Goal Mapping
          </button>
          <button
            className={`pb-5 pt-2 px-5 text-sm font-medium ${
              activeTab === 'My Goals'
                ? 'text-gray-700 border-b-2 border-theme-blue'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => handleTabClick('My Goals')}
          >
            My Goals
          </button>
          <button
            className={`pb-5 pt-2 px-5 text-sm font-medium ${
              activeTab === 'Employees'
                ? 'text-gray-700 border-b-2 border-theme-blue'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => handleTabClick('Employees')}
          >
            Employees
          </button>
        </div>
        <div className="py-4">
          {activeTab === 'Goal Mapping' && (
            <div className='flex flex-col'>
              <div className='flex flex-row items-center justify-between pl-4 py-2'>
                <div className='flex flex-row items-center gap-4'>
                    <div>Stream</div>
                    
                    <div className='w-72'><DropdownWithLabel label="" onChange={()=>console.log('gg')} options={dropdownList} width="w-full" defaultValue="Dev" /></div>
                    
                    <div ><SearchInput /></div>
                </div>
                <div className='flex flex-row items-center gap-4 mr-2'>
                    <div className='p-3 border-[0.063rem] border-gray-200'><img src={filterIcon} /></div>
                    <div className='py-4 px-3 border-[0.063rem] border-gray-200'><img src={options} /></div>
                </div>
              </div>
              <div className="w-full flex flex-col gap-4">
                {items.map((item, index) => (
                <div>                
                    <div key={index} className="border-[0.063rem] bg-custom-table-header rounded-md border-gray-200 border-l-8 border-l-theme-blue">
                        <div
                        className="w-full flex justify-between items-center p-3 text-left focus:outline-none"
                        onClick={() => handleAccordianClick(index)}
                        >
                        <span>{item.title}</span>
                            <div className='flex flex-row justify-between items-center gap-3 '>
                                <div className='flex px-2 bg-white  cursor-default border-[0.125rem] rounded-md border-theme-blue flex-row justify-between items-center gap-2' onClick={(e)=>{handleAddGoal(e)}}>
                                    <div  className='mb-[0.25rem] text-3xl p-1'>+</div>
                                    <div className='p-1' >Add Goal</div>
                                </div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`h-6 w-6 transform ${index === activeIndex ? '-rotate-180' : 'rotate-0'}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </div>
                        </div>
                    
                    </div>
                    {index === activeIndex && (
                        <div className="p-4">
                            <p>{item.content}</p>
                        </div>
                    )}
                </div>

                ))}
              </div>
              
            </div>
          )}
          {activeTab === 'My Goals' && (
            <div></div>
          )}
          {activeTab === 'Employees' && (
            <div>
              

            </div>
          )}
        </div>
      </div>
    );
}
export default GoalSetting
