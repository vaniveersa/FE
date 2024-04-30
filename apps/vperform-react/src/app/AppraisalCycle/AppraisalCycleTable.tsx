import React, { useState } from 'react';
import { appraisalCycle, deleteIcon, editIcon, manageAppraisee, noRecordsIcon, setting1, settings } from '../../assets/images';
import { useNavigate } from 'react-router-dom';
import {  ConfirmationPopUp, Modal, PageHeader, SearchInput, TableHeader } from 'apps/ui-lib/src/lib';
import PerformanceReviewForm from './PerformanceReviewForm';
import ConfigurationForm from '../ConfigurationForm';

interface p{
  nameOfAppraisal:String,
  startDate:String,
  endDate:String,
  status:String,
}

interface Props{ 
  setSelectedOption:Function,// for navbar
  setManageAppraiseeListClicked:Function // for conditional rendering of appraisal cycle and manage appraisee list
}
const AppraisalCycleTable = ({setSelectedOption,setManageAppraiseeListClicked}:Props) => {
  //const data : Array<p> = []  
  const data = [{
        nameOfAppraisal:'Appraisal_2024_2',
        startDate:'20-June-2024',
        endDate:'20-June-2024',
        status: 'pending'
    },
    {
      nameOfAppraisal:'Appraisal_2024_2',
      startDate:'20-June-2024',
      endDate:'20-June-2024',
      status: 'pending'
  },
  {
    nameOfAppraisal:'Appraisal_2024_2',
    startDate:'20-June-2024',
    endDate:'20-June-2024',
    status: 'pending'
},
    {
      nameOfAppraisal:'Samarth',
      startDate:'20-June-2024',
      endDate:'20-June-2024',
      status: 'pending'
  },
  {
    nameOfAppraisal:'Samarth',
    startDate:'20-June-2024',
    endDate:'20-June-2024',
    status: 'pending'
},

{
  nameOfAppraisal:'Samarth',
  startDate:'20-June-2024',
  endDate:'20-June-2024',
  status: 'pending'
},
{
  nameOfAppraisal:'Samarth',
  startDate:'20-June-2024',
  endDate:'20-June-2024',
  status: 'pending'
},
{
  nameOfAppraisal:'Samarth',
  startDate:'20-June-2024',
  endDate:'20-June-2024',
  status: 'pending'
},
{
  nameOfAppraisal:'Samarth',
  startDate:'20-June-2024',
  endDate:'20-June-2024',
  status: 'pending'
},
{
  nameOfAppraisal:'Samarth',
  startDate:'20-June-2024',
  endDate:'20-June-2024',
  status: 'pending'
}]

  

  const [showConfigAppraisalModal,setShowConfigAppraisalModal] = useState<boolean>(false);
  const [showPerformanceFormModal,setShowPerformanceFormModal] = useState<boolean>(false);
  const [showPopup,setShowPopup]  = useState<boolean>(false)
  const navigate = useNavigate();

  const showManageAppraisee =  () => {
    setManageAppraiseeListClicked(true);
  }

  
  return (

    <div className='p-1 overflow-hidden h-[34.375rem]'>
      <div className='flex flex-row items-center justify-between w-full py-1'>
        <SearchInput />
        <div onClick={()=>setShowConfigAppraisalModal(true)} className='p-2 border-[0.125rem] rounded-md border-theme-blue flex flex-row items-center'><img className=' pr-1' src={setting1} /><button>Configure Appraisal Cycle</button></div>
      </div>
      <Modal innerJsx={<ConfigurationForm />} showModal = {showConfigAppraisalModal} setShowModal={setShowConfigAppraisalModal} logo={settings} title='Configure Appraisal Cycle' content='frg' action='Done' />
      <Modal innerJsx = {<PerformanceReviewForm/>} logo={appraisalCycle} title='Performance Review Form Details' content='' action='Done' setShowModal={setShowPerformanceFormModal} showModal={showPerformanceFormModal}/>
      <ConfirmationPopUp  />
      <div className='h-[500px] overflow-auto'>
        <table className="min-w-full divide-y divide-gray-200 ">
          <thead className="bg-custom-table-header">
            <tr >
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name of Appraisal
              </th>
              <th scope="col" className="px-6 py-3  text-xs text-center font-medium text-gray-500 uppercase tracking-wider">
                Manage Appraisees
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Start Date
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                End Date
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          {data.length!==0?<tbody className="bg-white divide-y divide-gray-200 ">
            {data.map((item,index)=>(
              <tr className=' bg-custom-table-row ' key={index}>
                <td onClick={()=>setShowPerformanceFormModal(true)} className=" cursor-pointer px-6 py-4 whitespace-nowrap underline text-theme-blue">{item.nameOfAppraisal}</td>
                <td onClick={()=>{showManageAppraisee()}} className="px-6 py-4 whitespace-nowrap flex flex-row justify-center"><img src={manageAppraisee} /></td>
                <td className="px-6 py-4 whitespace-nowrap">{item.startDate}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.endDate}</td>
                <td className="px-4 py-2 whitespace-nowrap "><div className='rounded-md px-2 py-2 text-[#CFA100] font-medium bg-[#FFFBDB]'>Pending</div></td>
                <td className="px-6 py-4 gap-6 whitespace-nowrap flex flex-row items-center">
                  <img onClick={()=>setShowConfigAppraisalModal(true)} className=' bg-white p-1' src={editIcon} />
                  <img onClick={()=>setShowPopup(true)} className=' bg-white p-1' src={deleteIcon}/>
                </td>

              </tr>
            ))}
            
            
          </tbody>:null}
        </table>
      </div>
        {data.length===0?<div className='text-center mt-28 flex h-20 flex-row items-center justify-center'>
          <span className='h-12 w-12 rounded-full flex flex-row items-center justify-center  bg-slate-200'><img className='h-8 w-8 rounded-lg  ' src={noRecordsIcon} /></span>
          <span>No records available, configure appraisal cycle to initiate the process</span>
        </div>:null}
      
    </div>
  );
}

export default AppraisalCycleTable;
