import React, { FC, ReactNode, ReducerAction } from 'react';
import {closeIcon} from '../../../vperform-react/src/assets/images/index'
interface ModalProps {
    showModal:boolean,
    setShowModal:Function,
    logo: any;
    title: string;
    content: string;
    action: string;
    innerJsx:ReactNode
}

const Modal: FC<ModalProps> = ({
    showModal,
    setShowModal,
    logo,
    title,
    content,
    action,
    innerJsx
}) => {

    const handleClose = () => {
        setShowModal(false);
    }
    return (
        <>
        
            {showModal && (
                <div
                    id="static-modal"
                    data-modal-backdrop="static"
                    aria-hidden="true"
                    className="fixed top-0 h-full  right-0  left-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
                >
                    <div className='relative w-full  max-w-4xl h-[90%]  bg-white rounded-md flex flex-col'>
                        {/* header */}
                        <div className='border-b border-slate-300 w-full p-2'>
                            <div className='bg-theme-blue w-full flex p-4 rounded-md border-spacing-2 border-gray-400 justify-between items-center'>
                                <div className='flex items-center gap-4 ml-2'>
                                    <img src={logo} alt='configuration icon'/>
                                    <span className='text-white text-lg font-medium capitalize'>{title}</span>
                                </div>
                                <button type='button' onClick={handleClose}>
                                    <img src={closeIcon} alt='close icon'/>
                                </button>
                            </div>
                        </div>

                        {/* content */}
                        <div className='overflow-y-auto scrollbar-hide scroll flex-grow p-2 border-b border-slate-300'>
                            {innerJsx}
                        </div>

                        {/* footer */}
                        <div className='p-2 flex justify-end rounded-b-md'>
                            <button type="button" className="text-white bg-theme-blue hover:bg-blue-600 font-medium rounded-md px-10 py-3 mr-4 dark:bg-blue-600 dark:hover:bg-blue-700 ">
                                <span className='text-white text-md font-medium capitalize'>
                                    {action}
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

    
//     return (
//         <>
        
//              (
//                 <div
//                     id="static-modal"
//                     data-modal-backdrop="static"
//                     aria-hidden="true"
//                     className="fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
//                 >
//                     <div className='relative w-full max-w-3xl h-3/4  bg-white rounded-md flex flex-col'>
//                         {/* header */}
//                         <div className='border-b border-slate-300 w-full p-2'>
//                             <div className='bg-blue-500 w-full flex p-4 rounded-md border-spacing-2 border-gray-400 justify-between items-center'>
//                                 <div className='flex items-center gap-4 ml-2'>
//                                     <img  alt='configuration icon'/>
//                                     <span className='text-white text-lg font-medium capitalize'>title</span>
//                                 </div>
//                                 <button type='button' >
//                                     <img  alt='close icon'/>
//                                 </button>
//                             </div>
//                         </div>

//                         {/* content */}
//                         <div className='overflow-y-auto scrollbar-hide scroll flex-grow p-2 border-b border-slate-300'>
                            
//                         </div>

//                         {/* footer */}
//                         <div className='p-2 flex justify-end rounded-b-md'>
//                             <button type="button" className="text-white bg-blue-500 hover:bg-blue-600 font-medium rounded-md px-10 py-3 mr-4 dark:bg-blue-600 dark:hover:bg-blue-700 ">
//                                 <span className='text-white text-md font-medium capitalize'>
                                    
//                                 </span>
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             )
//         </>
//     );
// };
// const Modal = () => {

    
//     return (
//         <>
        
//              (
//                 <div
//                     id="static-modal"
//                     data-modal-backdrop="static"
//                     aria-hidden="true"
//                     className="fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
//                 >
//                     <div className='relative w-full max-w-3xl h-3/4  bg-white rounded-md flex flex-col'>
//                         {/* header */}
//                         <div className='border-b border-slate-300 w-full p-2'>
//                             <div className='bg-blue-500 w-full flex p-4 rounded-md border-spacing-2 border-gray-400 justify-between items-center'>
//                                 <div className='flex items-center gap-4 ml-2'>
//                                     <img  alt='configuration icon'/>
//                                     <span className='text-white text-lg font-medium capitalize'>title</span>
//                                 </div>
//                                 <button type='button' >
//                                     <img  alt='close icon'/>
//                                 </button>
//                             </div>
//                         </div>

//                         {/* content */}
//                         <div className='overflow-y-auto scrollbar-hide scroll flex-grow p-2 border-b border-slate-300'>
                            
//                         </div>

//                         {/* footer */}
//                         <div className='p-2 flex justify-end rounded-b-md'>
//                             <button type="button" className="text-white bg-blue-500 hover:bg-blue-600 font-medium rounded-md px-10 py-3 mr-4 dark:bg-blue-600 dark:hover:bg-blue-700 ">
//                                 <span className='text-white text-md font-medium capitalize'>   
//                                 </span>
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             )
//         </>
//     );
// };

export default Modal;
