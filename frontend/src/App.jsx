import React from 'react'
import Sidebar from './Components/Sidebar'
import { Navbar } from './Components/Navbar'
import Center from './Components/Center'
import Navigation from './Components/Navigation'


const App = () => {
  return (
    <div className='w-full'>
  <Navbar/>
<div className="w-full  max-md:w-full m-auto">
<Navigation/>
</div>
  <div className='w-full flex '>
  <Sidebar/>
  <Center/>
  </div>
 
    </div>
  )
}

export default App