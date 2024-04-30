import { PageHeader } from 'apps/ui-lib/src/lib'
import React from 'react'
import { useState } from 'react'
import EmployeeList from './EmployeeList'
import { appraiseeView } from '../../assets/images'
import MyAppraisalForm from './MyAppraisalForm'
import RejectionFeedback from './RejectionFeedback'
import {Tabs} from 'apps/ui-lib/src/lib'

const AppraiseeView = () => {
  const [activeTab, setActiveTab] = useState('employeeList');

  const handleTabClick = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };
  return (
    <div className='ml-[5.25rem] p-1'>
        <PageHeader title={"Appraisee View"} icon={appraiseeView} />
        {/* <div className="flex border-b border-gray-200 p-4 mt-5"> */}
<div className='m-4'>
        <Tabs
      titles={['Employee List', 'My Appraisal Form']}
      children={[
        <div><EmployeeList/></div>,
        <div><MyAppraisalForm/></div>,
      ]}
    />
    </div>
    </div>


  )
}

export default AppraiseeView
