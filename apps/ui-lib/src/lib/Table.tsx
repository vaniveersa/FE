import React, { Key } from 'react'


interface Tableheader{
  headerName:String,
  fontStyle:String,
  fontColour:String,
  fontSize:String,
  fontWeight:String,
  paddingX:String,
  paddingY:String,
  align:String,
  letterSpacing:String
  
}
interface Props{
  tableHead:Array<Tableheader>
}

interface RowData{

}



interface TableData{

}


const TableHeader = ({tableHead}:Props) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-custom-table-header">
        {/* <tr >
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
        </tr> */}
        <tr>
          {tableHead.map((item:Tableheader,index:Key)=>(
            <th scope='col' key={index} className={`px-${item.paddingX} py-${item.paddingY} text-${item.align} text-${item.fontSize} font-${item.fontWeight} text-${item.fontColour} tracking-${item.letterSpacing}`}>{item.headerName}</th>
          ))}
        </tr>
      </thead>
    </table>
  )
}

export default TableHeader
