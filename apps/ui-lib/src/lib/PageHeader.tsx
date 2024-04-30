import React from 'react'
import EmployeeAppraisalForm from '../../../vperform-react/src/app/AppraiseeView/EmployeeAppraisalForm'

interface PageHeader{
    title:String,
    icon : any
}

const PageHeader = ({title,icon}:PageHeader) => {
  return (
    <>
    <div className='rounded-lg bg-theme-blue flex flex-row  items-center justify-start font-medium'>
      <div className='p-2'><img  src={icon} /></div>
      <div className='p-2 text-white'>{title}</div>
    </div>
    {/* <div>
       <EmployeeAppraisalForm employeeName={'Nicholls Pearson'} employeeEmail={'nicholls.pearson@lorem.ipsum'} employeeRole={'head hr'} experience={0} projects={0} selfRating={0} managerRating={0} managerFeedback={'ugfghouytfvbnmjhgfd'} />
    </div> */}
  </>
  )
}

export default PageHeader