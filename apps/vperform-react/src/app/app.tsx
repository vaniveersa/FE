import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import {ConfirmationPopUp, FilterComponent, PageTemplate} from '../../../ui-lib/src/lib/index'

import {PageHeader} from '../../../ui-lib/src/lib/index'
import ManageAppraiseeList from './AppraisalCycle/ManageAppraiseeTable';
import AppraisalCycle from './AppraisalCycle/AppraisalCycle';
import { useState } from 'react';
import Home from './Dashboard/Home';
import AppraiseeView from './AppraiseeView/AppraiseeView';
import PerformanceModule from './PerformanceModule/PerformanceModule';
import Settings from './Settings/Settings';
import EmployeeList from './AppraiseeView/EmployeeList';
// import AppraiseeView from './AppraiseeView';

export function App() {

  const [selectedOption,setSelectedOption] = useState<String>("")
  return (

    <div>
      
            <BrowserRouter>
        <Navbar selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='appraisalcycle' element={<AppraisalCycle setSelectedOption={setSelectedOption} />}/>
          <Route path='appraiseeview' element={<AppraiseeView/>} />
          <Route path='performanceModule' element={<PerformanceModule />} />
          <Route path='settings' element={<Settings/>} />
          <Route path='/' element={<div className='ml-[84px] p-1 h-60'><PageHeader title={"Dashboard"} icon={Home} /></div>} />
          <Route path='/appraisalcycle' element={<div className='ml-[84px] p-1 '><PageHeader title={"Appraisal Cycle"} icon={AppraisalCycle} /><AppraisalCycle  setSelectedOption={setSelectedOption}/></div>} />
          <Route path='/appraiseeview' element={<div className='ml-[84px] p-1'><PageHeader title={"Appraisee View"} icon={AppraiseeView} /><AppraiseeView/></div>} />
          <Route path='/performanceModule' element={<div className='ml-[84px] p-1'><PageHeader title={"Performance Module"} icon={performance} /></div>} />
          <Route path='/settings' element={<div className='ml-[84px] p-1'><PageHeader title={"Settings"} icon={Settings} /></div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;