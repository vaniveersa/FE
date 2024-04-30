import { ToggleSwitch } from 'apps/ui-lib/src/lib'
import DropdownWithLabel from 'apps/ui-lib/src/lib/DropDown';
import InputField from 'apps/ui-lib/src/lib/InputField';
import React, { useState } from 'react'
import { appraisalCycle, calendarIcon, downArrow } from '../../assets/images';

const PerformanceReviewForm = () => {
  const [isChecked,setIsChecked] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  
  const dropdownList = [{name:'Excellent',id:1},{name:'Excellent',id:1},{name:'Excellent',id:1},{name:'Excellent',id:1},]
  return (
    <div className='pl-3'>
      <div className='flex flex-col justify-between gap-4'>
        <div className='p-2 flex flex-row items-center w-full justify-start gap-5 '>
          <div className="relative w-1/3 mt-1">
              <div className="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-gray-50 text-gray-900 rounded-md border-[0.063rem] border-gray-300  ">Lorem Ipsum</div>
              <label className="absolute text-lg
               text-black duration-300 transform -translate-y-[1.8rem]
                scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2
                 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500
                  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2
                   peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75
                    peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                      Added By 
              </label>
              <img className='absolute right-2 top-6  ' src={downArrow} />
          </div>
          <div className="relative w-1/3 mt-1">
              <div className="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-gray-50 text-gray-900 rounded-md border-[0.063rem] border-gray-300  ">Lorem Ipsum</div>
              <label className="absolute text-lg
               text-black duration-300 transform -translate-y-[1.8rem]
                scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2
                 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500
                  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2
                   peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75
                    peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                      Appraisal Cycle Period
              </label>
              <img className='absolute right-2 top-4  ' src={calendarIcon} />
          </div>
          
        </div>
        <div>Instructions and guidelines</div>
        <div className='text-theme-blue'>Please read and understand all the guidelines below before you start with the Self-Appraisal process:</div>
        <ul className='list-disc ml-5'>
          <li>
            <p>The Performance Review Form should reflect the Appraisee's performance on the set Goals and Key Result Areas (KRAs) for the review period preceding this evaluation</p>
          </li>
          <li>
            <p>Utilize this forum to gain more clarity on your Job Titles and responsibilities and future growth paths in the organization.</p>
          </li>
        </ul>
        <div>Please rate yourself on the KRA's based on the rating scale of 1-5 on each KRA Tab/ Section. On the Rating scale</div>
        <div className="overflow-x-auto p-1">
          <table className="table-auto border-collapse border border-gray-500">
            <thead className='bg-custom-table-header'>
              <tr>
                <th className="px-4 py-2 border border-gray-500">Rating Scale</th>
                <th className="px-4 py-2 border border-gray-500">Performance Level</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border border-gray-500">5</td>
                <td className="px-4 py-2 border border-gray-500">Outstanding</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-500">4</td>
                <td className="px-4 py-2 border border-gray-500">Exceed Expectations</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-500">3</td>
                <td className="px-4 py-2 border border-gray-500">Meets Expectations</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-500">2</td>
                <td className="px-4 py-2 border border-gray-500">Partially Meets Expectations</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-500">1</td>
                <td className="px-4 py-2 border border-gray-500">Below Expectations</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>

        <div className='w-full flex flex-col items-start justify-evenly '> 
          <div>Past Engagement in 6 Months</div>
          {[1,2,3].map(()=>(
            <div className='flex flex-row items-start justify-start  pl-6 w-1/2'>
              <div className=' p-1 w-full flex flex-row items-center justify-start'><InputField width={'full'} label={'Project1'} placeholder={'Enter Project'}/></div>
              <div className=' p-1 w-full flex flex-row items-center justify-start'><InputField width={'full'} label={'Project manager'} placeholder={'Enter Project manager'}/></div>
            </div>
          ))}         
          

        </div>
        <div className='text-theme-blue'>Add KRA</div>
        {[1,2,3,4].map((item,index)=>(
          <div className=' my-4 rounded-lg border-[0.125rem] border-gray-200 p-5 gap-3 flex flex-col items-start justify-evenly'>
            <div className='flex flex-row items-center justify-start w-full'>
              <div className='py-2 w-1/2'>
                <ToggleSwitch isChecked={isChecked} setIsChecked={setIsChecked} title={'KRA Name'} />
              </div>
              <label className="py-2 ml-6 inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-indigo-600"
                  checked={isChecked}
                  onChange={()=>setIsChecked(!isChecked)}
                  
                />
                <span className="ml-2 text-gray-700">Show Goals against KRA</span>
              </label>
              
            </div>
            
            {isChecked&&<div className="flex flex-col justify-center mt-4 w-full">
              <div
                className="border-[0.063rem] border-gray-200 bg-custom-table-header text-black px-4 w-full py-2 cursor-pointer"
                onClick={()=>setIsVisible(!isVisible)}
              >
                View Goals
              </div>
              {isVisible && (
                <div className="border-[0.063rem] border-gray-200 transition-all duration-1000 ease-in-out ">
                  <p className=" px-4 py-2">This is the hidden paragraph.</p>
                </div>
              )}
            </div>}
          
            
            <div className='p-1 rounded-lg border-[0.063rem] border-gray-200'>
              <p className='p-1'>​It reflects your performance on the various Projects (one/ multiple) you have worked on in the First Half of Year 2023.
                It is all about managing work expectations.It covers criteria like the quality of delivery,
                delivery deadlines, no. of defects, etc.- all related to the project/ assignment you are expected to be working on.
                You should mention the name of the project/s you have worked on in the Year 2023 with your Job Title and achievements in the project.
              </p>
            </div>
            
              
              <div className='w-1/3'>
                <DropdownWithLabel label="Self Rating" onChange={()=>console.log('gg')} 
                            options={dropdownList} width="w-full" defaultValue="Select" />
              </div>
          
            <div className='w-full'><InputField width={'full'} label={'Self Comments'} placeholder={'Enter Comments'} /></div>
          </div>
        ))}
        
        
      </div>
    </div>
  )
}

export default PerformanceReviewForm
