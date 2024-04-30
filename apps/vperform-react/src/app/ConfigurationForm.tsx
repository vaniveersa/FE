import InputField from 'apps/ui-lib/src/lib/InputField'
import DropDown from 'apps/ui-lib/src/lib/DropDown'
import attachIcon from '../assets/images/attachIcon.png'
import edit from '../assets/images/edit.png'

import { useEffect, useState } from 'react'

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


import DateRangePicker from 'apps/ui-lib/src/lib/DateRangePicker'

import React from 'react'

const ConfigurationForm = () => {

    const [configurationFormData, setConfigurationFormData] = useState({
        name: '',
        description:'',
        kra:false,
        goals:false,
        joinDateRadio:'',
        rating:false,
        comment:false,
        lockRating:false,
        ratingDescription1:'Outstanding',
        ratingRange1:'5',
        ratingDescription2:'Exceed Expectations',
        ratingRange2:'4-5',
        ratingDescription3:'Meets Expectations',
        ratingRange3:'3-4',
        ratingDescription4:'Partially Meets Expectations',
        ratingRange4:'2-3',
        ratingDescription5:'Below Expectations',
        ratingRange5:'1-2',
        instruction:''
    });

    const handleInputChange = (e:any) => {
        console.log("event value",e.target.value)
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;

        setConfigurationFormData((prevData) => ({
          ...prevData,
          [name]: newValue,
        }));
        console.log(configurationFormData)
    };

    //states for dropdowns
    const [stream, setStream] = useState<string|undefined>()
    const [job, setJob] = useState<string|undefined>()
    const [ratingType, setRatingType] = useState<string|undefined>()

    //for text editor
    const [instruction, setInstruction] = useState('');

    // State to store the uploaded file name
    const [fileName, setFileName] = useState(''); 

    const handleFileChange = (e:any) => {
        const file = e.target.files[0]; 
        if (file) {
        setFileName(file.name);
        } else {
        setFileName('');
        }
    };


    const streamOptions=[{
        name:'xyz',
        id:'1'
    },
    {
        name:'xyz2',
        id:'2'
    }]

    const jobOptions=[{
        name:'qwe1',
        id:'1'
    },
    {
        name:'qwe2',
        id:'2'
    }]

    const ratingTypeOptions=[
        {
            name:'dhruv',
            id:'1',
        },
        {
            name:'dhruv2',
            id:'2',
        },
    ]
  return (
    <>
        <div className="container mt-5">
            <div className="section pl-6">
                <div className="flex w-full gap-6 mb-6">
                    <div className='w-[33%]'>
                        <InputField name='name' label='Name of the appraisal *' width='full' placeholder='Enter' 
                           value={configurationFormData.name}
                           handleInput={handleInputChange} />
                    </div>
                    <div className='w-[33%]'>
                        {/* <DateRangePicker 
                        />  */}
                    </div>
                </div>
                <div className="flex w-full gap-6">
                    <div className='w-[68.5%]'>
                        <InputField name='description' label='Description *' height='4.625rem' width='full' placeholder='Enter Description'
                            value={configurationFormData.description}
                            handleInput={handleInputChange}/>
                    </div>
                    <div className="w-[25%]">
                        <div className="relative w-full">
                            {/* Hidden file input */}
                            <input
                                type="file"
                                id="file-upload"
                                onChange={handleFileChange}
                                className="opacity-0 absolute inset-0 w-full h-full cursor-pointer" // Hides the input and makes it clickable
                            />

                            {/* Styled visible part */}
                            <div className="block px-2.5 pb-2.5 pt-4 text-sm text-gray-900 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:border-blue-600">
                                <label
                                htmlFor="file-upload"
                                className={`absolute text-sm text-gray-500 transition-all duration-300 transform -translate-y-4 scale-75 
                                            top-2 z-10 origin-[0] bg-white px-2 
                                            ${fileName ? 'peer-focus:top-2 peer-focus:scale-75' : 'peer-placeholder-shown:top-1/2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2'}`}
                                >
                                    Guideline Document 
                                </label>
                                <span className='flex justify-between overflow-hidden'>
                                    {!fileName ? <span className="opacity-50">Browse</span> : <span className='truncate'>{fileName}</span>} 
                                    <img className='mt-[5px] h-[0.75rem]' src={attachIcon} />
                                </span>
                            </div>
                        </div>
                        <div className="upload-condition font-normal text-[0.875rem] pl-[5px]">Upload upto 10mb</div> 
                    </div>
                </div>
            </div>

            <hr className='mb-6 mt-6'></hr>
            
            <div className="section pl-6">
                <div className="heading mb-6 font-bold text-lg text-[#3C4063]">
                    Appraisal Process Configuration Details
                </div>
                <div>
                    <InputField label='Name of the appraisal *' width='1/3' placeholder='Enter'/>
                </div>
            </div>

            <hr className='mb-6 mt-6'></hr>
            
            <div className="section pl-6">
                <div className="heading mb-6 font-bold text-lg text-[#3C4063]">
                    Module(s) to be included
                </div>
                <div className='bg-[#F0F7FFA6] w-[75%] pt-3.5 pb-3.5 pl-6 pr-6 rounded-sm'>
                    <div className='font-semibold text-sm'>
                        Performance Modules to be included <span className='text-[red]'>*</span>
                    </div>
                    <div className="flex">
                        <div className="flex items-center me-4">
                            <input name="kra" type="checkbox" id="kra"
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                checked={configurationFormData.kra}
                                onChange={handleInputChange}/>
                            <label htmlFor="kra" className="ms-2 text-sm text-gray-900 dark:text-gray-300">KRA</label>
                        </div>
                        <div className="flex items-center me-4">
                            <input name="goals" type="checkbox" id="goals"
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                checked={configurationFormData.goals}
                                onChange={handleInputChange}/>
                            <label htmlFor="goals" className="ms-2 text-sm text-gray-900 dark:text-gray-300">Goals</label>
                        </div>
                    </div>   
                </div>
            </div>

            <hr className='mb-6 mt-6'></hr>

            <div className="section pl-6">
                <div className="heading mb-6 font-bold text-lg text-[#3C4063]">
                    Applicable for
                </div>
                <div className="border w-[75%] pt-3.5 pb-3.5 pl-6 pr-6 rounded-sm">
                    <div className='font-normal text-sm pb-3.5'>
                        Date of joining <span className='text-[red]'>*</span>
                    </div>
                    <div className="flex mb-6">
                        <div className="flex items-center me-4">
                            <input id="join-date-radio" type="radio" value="until" 
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                name="joinDateRadio" 
                                onChange={handleInputChange}
                            />
                            <label htmlFor="join-date-radio" className="font-normal ms-2 text-sm text-gray-900 dark:text-gray-300">Until</label>
                        </div>
                        <div className="flex items-center me-4">
                            <input id="join-date-radio-2" type="radio" value="fromTo" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                name="joinDateRadio"
                                onChange={handleInputChange}
                            />
                            <label htmlFor="join-date-radio-2" className="font-normal ms-2 text-sm text-gray-900 dark:text-gray-300">From & To</label>
                        </div>
                    </div>
                    <InputField name='' label='Name of the appraisal *' width='1/2' placeholder='Enter'/>
                </div>
                <div className="mt-6 flex gap-6">
                    <div className='flex w-1/4'>
                        <DropDown label="Stream" onChange={setStream} 
                            options={streamOptions} width="w-full" defaultValue="Select Stream"
                            value={stream}
                        />
                    </div>
                    <div className='flex w-1/4'>
                        <DropDown label="Job title" onChange={setJob} 
                            options={jobOptions} width="w-full" defaultValue="Select Job Title"
                            value={job}
                        />
                    </div>
                </div>  
            </div>

            <hr className='mb-6 mt-6'></hr>

            <div className="section pl-6">
                <div className='flex gap-6'>
                    <div className="w-1/4">
                        <DropDown label="Choose rating type" width="w-full" defaultValue="Rating type"
                            options={ratingTypeOptions}
                            onChange={setRatingType}
                            value={ratingType} 
                        />
                    </div>
                    <div className="checkbox-container">
                        <div className='font-semibold text-sm'>
                            Set mandatory
                        </div>
                        <div className="flex">
                            <div className="flex items-center me-4">
                                <input id="mandatory-checkbox-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                   name="rating"
                                   checked={configurationFormData.rating} 
                                   onChange={handleInputChange}/>
                                <label htmlFor="mandatory-checkbox-1" className="ms-2 text-sm text-gray-900 dark:text-gray-300">Rating</label>
                            </div>
                            <div className="flex items-center me-4">
                                <input id="mandatory-checkbox-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    name="comment"
                                    checked={configurationFormData.comment} 
                                    onChange={handleInputChange}/>
                                <label htmlFor="mandatory-checkbox-2" className="ms-2 text-sm text-gray-900 dark:text-gray-300">Comment</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <hr className='mb-6 mt-6'></hr>

            <div className="section pl-6">
                <div className="heading mb-6 font-bold text-lg text-[#3C4063]">
                    Rating and score range
                </div>
                <div className='bg-[#F9F9F9] border font-normal text-sm px-6 py-3.5 w-[75%] rounded-sm'>
                    Rating will be selected automatically in the review form based on the 
                    configured score range. However, the reviewer can edit it manually. To restrict 
                    the manual edit, enable Lock rating option 
                </div>
                <div className="flex items-center me-4 mt-6 mb-6">
                    <input id="lockRating" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        name="lockRating"
                        checked={configurationFormData.lockRating}
                        onChange={handleInputChange}
                    />
                    <label htmlFor="lockRating" className="ms-2 text-sm text-gray-900 dark:text-gray-300">Lock Rating</label>
                </div>
                <div className="rating-container">
                    <div className='mb-[14px] bg-[#F9F9F9] flex border border-[#BAC1DA] rounded-sm font-normal text-sm px-6 py-3.5 w-[60%] rounded-sm gap-3'>
                        <input className='p-[5px] bg-[#F9F9F9] font-semibold text-base w-[80%] rounded-sm' 
                            disabled={configurationFormData.lockRating}
                            name="ratingDescription1"
                            value={configurationFormData.ratingDescription1} 
                            onChange={handleInputChange}
                        />
                        <input className='p-[5px] bg-[#F9F9F9] font-semibold text-base w-[10%] rounded-sm' 
                            disabled={configurationFormData.lockRating}
                            name="ratingRange1"
                            value={configurationFormData.ratingRange1} 
                            onChange={handleInputChange}
                        />
                        {!configurationFormData.lockRating && <img src={edit} className='h-[0.85rem] self-center'/>}
                    </div>
                    <div className='mb-[14px] bg-[#F9F9F9] flex border border-[#BAC1DA] rounded-sm font-normal text-sm px-6 py-3.5 w-[60%] rounded-sm gap-3'>
                    <input className='p-[5px] bg-[#F9F9F9] font-semibold text-base w-[80%] rounded-sm' 
                            disabled={configurationFormData.lockRating}
                            name="ratingDescription2"
                            value={configurationFormData.ratingDescription2} 
                            onChange={handleInputChange}
                        />
                        <input className='p-[5px] bg-[#F9F9F9] font-semibold text-base w-[10%] rounded-sm' 
                            disabled={configurationFormData.lockRating}
                            name="ratingRange2"
                            value={configurationFormData.ratingRange2} 
                            onChange={handleInputChange}
                        />
                        {!configurationFormData.lockRating && <img src={edit} className='h-[0.85rem] self-center'/>}
                    </div>
                    <div className='mb-[14px] bg-[#F9F9F9] flex border border-[#BAC1DA] rounded-sm font-normal text-sm px-6 py-3.5 w-[60%] rounded-sm gap-3'>
                    <input className='p-[5px] bg-[#F9F9F9] font-semibold text-base w-[80%] rounded-sm' 
                            disabled={configurationFormData.lockRating}
                            name="ratingDescription3"
                            value={configurationFormData.ratingDescription3} 
                            onChange={handleInputChange}
                        />
                        <input className='p-[5px] bg-[#F9F9F9] font-semibold text-base w-[10%] rounded-sm' 
                            disabled={configurationFormData.lockRating}
                            name="ratingRange3"
                            value={configurationFormData.ratingRange3} 
                            onChange={handleInputChange}
                        />
                        {!configurationFormData.lockRating && <img src={edit} className='h-[0.85rem] self-center'/>}
                    </div>
                    <div className='mb-[14px] bg-[#F9F9F9] flex border border-[#BAC1DA] rounded-sm font-normal text-sm px-6 py-3.5 w-[60%] rounded-sm gap-3'>
                    <input className='p-[5px] bg-[#F9F9F9] font-semibold text-base w-[80%] rounded-sm' 
                            disabled={configurationFormData.lockRating}
                            name="ratingDescription4"
                            value={configurationFormData.ratingDescription4} 
                            onChange={handleInputChange}
                        />
                        <input className='p-[5px] bg-[#F9F9F9] font-semibold text-base w-[10%] rounded-sm' 
                            disabled={configurationFormData.lockRating}
                            name="ratingRange4"
                            value={configurationFormData.ratingRange4} 
                            onChange={handleInputChange}
                        />
                        {!configurationFormData.lockRating && <img src={edit} className='h-[0.85rem] self-center'/>}
                    </div>
                    <div className='mb-[14px] bg-[#F9F9F9] flex border border-[#BAC1DA] rounded-sm font-normal text-sm px-6 py-3.5 w-[60%] rounded-sm gap-3'>
                    <input className='p-[5px] bg-[#F9F9F9] font-semibold text-base w-[80%] rounded-sm' 
                            disabled={configurationFormData.lockRating}
                            name="ratingDescription5"
                            value={configurationFormData.ratingDescription5} 
                            onChange={handleInputChange}
                        />
                        <input className='p-[5px] bg-[#F9F9F9] font-semibold text-base w-[10%] rounded-sm' 
                            disabled={configurationFormData.lockRating}
                            name="ratingRange5"
                            value={configurationFormData.ratingRange5} 
                            onChange={handleInputChange}
                        />
                        {!configurationFormData.lockRating && <img src={edit} className='h-[0.85rem] self-center'/>}
                    </div>
                </div>
            </div>

            <hr className='mb-6 mt-6'></hr>

            <div className="section pl-6 mb-6">
                <label htmlFor="quill-editor" className="font-medium text-md">
                    Instructions and guidelines <span className="text-[red]">*</span>
                </label>
                <ReactQuill id='quill-editor' theme="snow" 
                    
                    value={instruction} 
                    onChange={setInstruction} />
            </div>

        </div>
    </>
  )
}

export default ConfigurationForm

