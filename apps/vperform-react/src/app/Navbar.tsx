import {logoVeersa,appraisalCycle,appraiseeView,home,showNav,settings,performance,collapse,logout,fullVeersaLogo} from '../assets/images'
import { useEffect, useState } from 'react'
import { To, useNavigate } from 'react-router-dom'

interface Props{
    selectedOption:String,
    setSelectedOption:Function
}
const Navbar = ({selectedOption,setSelectedOption}:Props) => {
    const navigate = useNavigate();
    const currentPath = window.location.pathname;
    function nav(to:String,title:String):void{
        setSelectedOption(to);
        navigate(to as To);
        setShowsidenav(false);
    }

    const [showsidenav,setShowsidenav] = useState<boolean>(false)
    // const [selectedOption,setSelectedOption] = useState<String|undefined>("")
    interface Navelements{
        logo:any,
        title:String 
        to:String
      }
    
      const navElements : Array<Navelements>= [
        {logo:home,title:'Dashboard',to:''},
        {logo:appraisalCycle,title:'Appraisal Cycle',to:'appraisalcycle'},
        {logo:appraiseeView,title:'Appraisee View',to:'appraiseeview'},
        {logo:performance,title:'Performance Module',to:'performancemodule'},
        {logo:settings,title:'Settings',to:'settings'}
      ]

      useEffect(()=>{
        
        const segments = currentPath?.split('/');
        const lastSegment = (segments[segments?.length - 1]);
        const currentPage =  navElements.find(obj => obj.to === lastSegment)?.to
        setSelectedOption(currentPage)
      },[selectedOption,currentPath])
  return (
   
    <div className='fixed left-1 w-full z-40 bg-black bg-opacity-50 flex flex-row overflow-hidden'>
        <aside id="separator-sidebar" className="bg-theme-blue fixed top-0 left-1 rounded-lg  w-20 h-screen  block " aria-label="Sidebar">
            <div className='p-3 border-b border-gray-200 w-full flex items-center justify-center'><img src={logoVeersa}/></div>
            <div className="h-full px-3 py-4  ">
                
                <ul className="space-y-2 font-medium flex flex-col items-center mt-10">
                    {navElements.map((item,index)=>(
                        <li key={index} className={`p-1 rounded-md hover:bg-gray-700  ${selectedOption===item.to?' bg-gray-50 bg-opacity-50':'bg-none'}`}>
                            <p onClick={()=>{nav(item.to,item.title)}} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white  group">
                                <img src={item.logo} />
                            </p>
                        </li>
                    ))}

                    </ul>
                    <ul className="pt-4 mt-12 pace-y-2 font-medium  border-t {{ showsidenav ? 'border-none' : 'border-t' }}  border-gray-200 dark:border-gray-700">
                        <li onClick={()=>setShowsidenav(!showsidenav)} className='p-1'>
                            <p className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                                <img src={`${!showsidenav?showNav:collapse}`}/>
                            </p>
                        </li>
                        <li className='p-1'>
                            <p className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                                <img src={logout}/>
                            </p>
                        </li>
                    </ul>
                </div>
            </aside>  
            {showsidenav?<div className={`h-screen w-60 z-10 bg-white ml-20  transition-transform duration-300 transform translate-x-0 opacity-100`}>
                <div className='fixed top-0 left-0 p-3 border-b border-gray-200 w-full'>
                    <img src={fullVeersaLogo}/>
                </div>
                <div className="h-full mt-16 px-3 py-4 ">
                    
                    <ul className="space-y-2 font-medium flex flex-col items-start mt-10">
                        {navElements.map((item,index)=>(
                            <li key={index} className='p-1 cursor-default'>
                                <p onClick={()=>{nav(item.to,item.title)}} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <span>{item.title}</span>
                                
                                </p>
                            </li>
                        ))}
                        
                        
                        
                        
                    </ul>
                    <ul className="pt-3.5 mt-[2.813rem]  font-medium border-t border-gray-200 dark:border-gray-700">
                        <li onClick={()=>setShowsidenav(false)} className='p-1'>
                            <p  className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                                Collapse
                            </p>
                        </li>
                        <li className='p-1'>
                            <p className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                                Logout
                            </p>
                        </li>
                    </ul>
                </div>
            </div>:null}
            
        </div>
    // </div>
    )
}

export default Navbar