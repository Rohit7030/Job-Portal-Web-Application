import Header from '@/components/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'

function AppLayout() {
  return (
    <div>
      <div className='grid-background'></div>
      <main className='container mx-auto px-4'>
      <Header/>
      <Outlet/>
      </main>
      <div className='p-10 text-center bg-gray-800 mt-10'>Made by RoHiT</div>
      </div>
  )
}

export default AppLayout