import React from 'react'
import Brand from './Brand'
import SidebarMenu from './SidebarMenu'

const Sidebar = () => {
  return (
    <aside className='min-h-screen  bg-gray-100'>
      <div className='p-2'>
       <Brand />
      </div>
      <div className='p-2'>
        <h2 className='pl-2 text-sm font-bold'>Main Menu</h2>
        <SidebarMenu/>
      </div>
    </aside>
  )
}

export default Sidebar