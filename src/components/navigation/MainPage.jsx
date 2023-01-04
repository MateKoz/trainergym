import React from 'react';
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import RoutesPath from "../../routes/Routes";

const MainPage = () => {
    return (
        <>
            <Navbar/>
            <div className='flex'>
                <Sidebar/>
                <div className='w-screen h-screen'>
                    <div className='h-screen bg-slate-100 px-20 pt-5'>
                        <RoutesPath/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainPage;
