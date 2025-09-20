import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
    return (
        <div className='flex flex-col bg-[#03080E] min-h-screen w-full text-white'>
            <Navbar />
            <main className='flex-1 px-3 mt-2'>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default AppLayout