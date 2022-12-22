import React from 'react';
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import NavPage from "./NavPage";

const MainPage = () => {
    return (
        <>
            <Navbar/>
                <div className='flex'>
                    <div className='bg-white h-screen p-2 pr-10'>
                        <Sidebar/>
                    </div>
                    <div className='w-full bg-slate-100 h-screen pl-2'>
                    <NavPage/>
                    </div>
                </div>
        </>
    );
};

export default MainPage;
