import React from 'react'
import {PageHeader} from '../../../../ui-lib/src/lib/index'
import { home } from '../../assets/images'
const Home = () => {
  return (
    <div className='ml-[84px] p-1 h-60'>
        <PageHeader title={"Dashboard"} icon={home} />
    </div>
  )
}

export default Home
