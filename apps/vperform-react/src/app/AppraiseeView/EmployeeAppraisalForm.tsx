

import RejectionFeedback from './RejectionFeedback';
import React from 'react';
// import profile from '../assets/images/profile.svg'
import { useState } from 'react';

interface EmployeeAppraisalFormProps {
  employeeName: string;
  employeeEmail: string;
  employeeRole: string;
  experience: number;
  projects: number;
  selfRating: number;
  managerRating: number;
  managerFeedback: string;
}

const EmployeeAppraisalForm: React.FC<EmployeeAppraisalFormProps> = ({
  employeeName,
  employeeEmail,
  employeeRole,
  experience,
  projects,
  selfRating,
  managerRating,
  managerFeedback,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }
  const handleBack = () => {
    // Implement back functionality here
    console.log('Back button clicked');
  };
  const [showRejectionFeedback, setShowRejectionFeedback] = useState(false);

  const handleApprove = () => {
    // Implement approve functionality here
    console.log('Approve button clicked');
  }

  const handleReject = () => {
    setShowRejectionFeedback(true);
  };

  const handleDone = () => {
    setShowRejectionFeedback(false);
  };
  return (
    <>
    <div className="bg-white p-4 rounded-md shadow-md m-4">
      <div className="flex items-center mb-4">
        <img
          src=""
          alt="Profile"
          className="w-143 h-95 rounded-full mr-4"
        />
        <div>
          <h2 className="font-bold">{employeeName}</h2>
          <p className="text-gray-600">{employeeEmail}</p>
          <p className="text-gray-600 uppercase">{employeeRole}</p>
        </div>
      </div>
      <div className="flex justify-start items-center mb-4">
        <div className=" items-center">
          <p className="mr-2">Exp</p>
          <p className="  ">{experience} years</p>
        </div>
        <div className=" items-center">
          <p className="mr-2">Projects</p>
          <p className=" py-1 px-2 ">{projects}</p>
        </div> 
         <div className=" items-center">
          <p className="mr-2">Self Rating</p>
          <p className=" py-1 px-2 ">{selfRating}</p>
          
         </div>
         <div className=" items-center">
           <p className="mr-2">Manager's Rating</p>
           <p className=" py-1 px-2 ">{managerRating}</p>
        </div>
         
      </div>
      <div className='flex justify-end'>
      <div className=" text-gray-600 mb-4">Manager's Overall Feedback</div>
      <p className="text-gray-500">{managerFeedback}</p>
      </div>
    
    </div>
    <div className="bg-white p-4 rounded-md shadow-md m-4">
      <h1 className='text-blue-800 px-2 '>Past Engagement in 6 months </h1>
      <div className="flex items-center space-x-4 m-4">
     <div className="relative">
       <input
         type="text"
         placeholder="Enter project 1"
         className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
       />
       <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
       </div>
     </div>
     <div className="relative">
       <input
         type="text"
         placeholder="Enter project manager"
         className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
       />
       <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        
       </div>
     </div>
    
   </div>
   <div className="flex items-center space-x-4 m-4">
     <div className="relative">
       <input
         type="text"
         placeholder="Enter project 2"
         className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
       />
       <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
       </div>
     </div>
     <div className="relative">
       <input
         type="text"
         placeholder="Enter project manager"
         className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
       />
       <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        
       </div>
     </div>
    
   </div>
   <div className="flex items-center space-x-4 m-4">
     <div className="relative">
       <input
         type="text"
         placeholder="Enter project 3"
         className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
       />
       <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
       </div>
     </div>
     <div className="relative">
       <input
         type="text"
         placeholder="Enter project manager"
         className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
       />
       <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
       </div>
     </div>
   </div>
          </div>
          <div className="bg-white p-4 rounded-md shadow-md m-4">   <div className="flex items-center">
      <h2 className="text-blue-800 px-2 py-2">
       Result Orientation
      </h2>
      <span className=" bg-blue-200 font-semibold rounded-md text-blue-700">35</span>
    </div>
                    <p className='tracking-tight py-2'>​It reflects your performance on the various Projects(one/ multiple) you have worked on in the First Half of Year 2023.
            <br/>It is all about managing work expectations.<br/>
            It covers criteria like the quality of delivery, delivery deadlines, no. of defects, etc.- all related to the project/ assignment you are expected to be working on.<br/>
            You should mention the name of the project/s you have worked on in the Year 2023 with your Job Title and achievements in the project.</p>
          <div>
      <button
        onClick={toggleDropdown}
        className="  w-full text-left px-4 py-2 rounded border-solid border-2   "
      > Dropdown</button>
      {isOpen && (
        <div className="absolute  bg-white rounded-md ">
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Item 1
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Item 2
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Item 3
          </a>
        </div>
      )}
    </div>
    <label htmlFor="self_rating" className="block my-2 text-sm font-medium text-gray-900 dark:text-white">Self Rating</label>
            <input type="text" id="self_rating" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block  p-2.5  " placeholder="5" required />
            
<label htmlFor="message" className="block  mb-2 text-sm font-medium text-gray-900 dark:text-white">Self Comments</label>
<textarea id="message"  className="flex  block p-2.5 w-full h-full text-sm text-gray-900 bg-gray-50 rounded " placeholder=" EnterIpsum magna ipsum labore sit amet consectetur adipiscing do eiusmod incididunt aliqua. Ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. comments"></textarea>
<label htmlFor="message" className="block  mb-2 text-sm font-medium text-gray-900 dark:text-white">Manager's Feedback</label>
<textarea id="message"  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded " placeholder=" EnterIpsum magna ipsum labore sit amet consectetur adipiscing do eiusmod incididunt aliqua. Ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. comments"></textarea>
    </div>




    <div className="bg-white p-4 rounded-md shadow-md m-4">
    <div className="flex items-center">
      <h2 className="text-blue-800 px-2 py-2">
        Contribution & Commitment to Veersa
      </h2>
      <span className=" bg-blue-200 font-semibold rounded-md text-blue-700">35</span>
    </div>
                    <p className='tracking-tight py-2'>​It reflects your performance on the various Projects(one/ multiple) you have worked on in the First Half of Year 2023.
            <br/>It is all about managing work expectations.<br/>
            It covers criteria like the quality of delivery, delivery deadlines, no. of defects, etc.- all related to the project/ assignment you are expected to be working on.<br/>
            You should mention the name of the project/s you have worked on in the Year 2023 with your Job Title and achievements in the project.</p>
          <div>
      <button
        onClick={toggleDropdown}
        className="  w-full text-left px-4 py-2 rounded border-solid border-2   "
      > Dropdown</button>
      {isOpen && (
        <div className="absolute  bg-white rounded-md ">
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Item 1
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Item 2
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Item 3
          </a>
        </div>
      )}
    </div>
    <label htmlFor="self_rating" className="block my-2 text-sm font-medium text-gray-900 dark:text-white">Self Rating</label>
            <input type="text" id="self_rating" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block  p-2.5  " placeholder="5" required />
<label htmlFor="message" className="block  mb-2 text-sm font-medium text-gray-900 dark:text-white">Self Comments</label>
<textarea id="message"  className="flex  block p-2.5 w-full h-full text-sm text-gray-900 bg-gray-50 rounded " placeholder=" EnterIpsum magna ipsum labore sit amet consectetur adipiscing do eiusmod incididunt aliqua. Ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. comments"></textarea>
<label htmlFor="message" className="block  mb-2 text-sm font-medium text-gray-900 dark:text-white">Manager's Feedback</label>
<textarea id="message"  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded " placeholder=" EnterIpsum magna ipsum labore sit amet consectetur adipiscing do eiusmod incididunt aliqua. Ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. comments"></textarea>
    </div>


    
    <div className="bg-white p-4 rounded-md shadow-md m-4">
    <div className="flex items-center">
      <h2 className="text-blue-800 px-2 py-2">
       Self Development and Learning
      </h2>
      <span className=" bg-blue-200 font-semibold rounded-md text-blue-700">35</span>
    </div>
                    <p className='tracking-tight py-2'>​It reflects your performance on the various Projects(one/ multiple) you have worked on in the First Half of Year 2023.
            <br/>It is all about managing work expectations.<br/>
            It covers criteria like the quality of delivery, delivery deadlines, no. of defects, etc.- all related to the project/ assignment you are expected to be working on.<br/>
            You should mention the name of the project/s you have worked on in the Year 2023 with your Job Title and achievements in the project.</p>
          <div>
      <button
        onClick={toggleDropdown}
        className="  w-full text-left px-4 py-2 rounded border-solid border-2   "
      > Dropdown</button>
      {isOpen && (
        <div className="absolute  bg-white rounded-md ">
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Item 1
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Item 2
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Item 3
          </a>
        </div>
      )}
    </div>
    <label htmlFor="self_rating" className="block my-2 text-sm font-medium text-gray-900 dark:text-white">Self Rating</label>
            <input type="text" id="self_rating" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block  p-2.5  " placeholder="5" required />
<label htmlFor="message" className="block  mb-2 text-sm font-medium text-gray-900 dark:text-white">Self Comments</label>
<textarea id="message"  className="flex  block p-2.5 w-full h-full text-sm text-gray-900 bg-gray-50 rounded " placeholder=" EnterIpsum magna ipsum labore sit amet consectetur adipiscing do eiusmod incididunt aliqua. Ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. comments"></textarea>
<label htmlFor="message" className="block  mb-2 text-sm font-medium text-gray-900 dark:text-white">Manager's Feedback</label>
<textarea id="message"  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded " placeholder=" EnterIpsum magna ipsum labore sit amet consectetur adipiscing do eiusmod incididunt aliqua. Ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. comments"></textarea>
    </div>

    
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Performance Improvement Plan</h2>
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded">
        </button>
      </div>
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="w-full border border-gray-300 rounded-lg px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        </div>
      </div>
    </div>

    <div className="bottom-0 left-0 right-0 bg-white py-4 px-6 flex justify-end items-center ">
      {/* <button
        className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
        onClick={handleBack}
      >
        &larr; Back
      </button> */}
      {/* <div> */}
      <button
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded mr-2 "
        onClick={handleBack}
      >Back </button>
       {showRejectionFeedback && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-96">
            <RejectionFeedback  onDone={handleDone}/>
          </div>
        </div>
      )}
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded mr-2 "
          onClick={handleReject}
        >
          Reject
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors duration-200"
          onClick={handleApprove}
        >
          Approve
        </button>
      </div>
    {/* </div> */}

    

    
       
</>
  );
};

export default EmployeeAppraisalForm;

