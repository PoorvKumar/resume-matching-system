import React from 'react'
import SearchComponent from '../components/SearchComponent'
import Result from '../components/Result'

const Home = () => {
  return (
    <div className='flex flex-col items-center'>
        <SearchComponent />
        {/* <Result /> */}
    </div>
  )
}

export default Home