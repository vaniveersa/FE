import React from 'react'
const PageTemplate = () => {
  return (
    <div className='ml-20'>
     <header className="bg-blue-500 text-white px-4 py-2  flex ">
       <img className='mx-2' src="" alt=""/>
   <h1 className="text-xl  font-bold text-left">Appraisal Cycle</h1>
</header>
<main>
{/* <AppraiseeView/> */}
</main>
<footer className=" fixed bottom-0 left-0 text-white right-0 py-4 px-6 flex justify-end">
      <button className="bg-blue-500  text-white font-bold py-2 px-4 rounded">
        Done
      </button>
    </footer>
    </div>
  )
}
export default PageTemplate
