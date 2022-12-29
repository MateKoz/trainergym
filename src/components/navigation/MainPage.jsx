import React from 'react';
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import RoutesPath from "../../routes/Routes";

const MainPage = () => {
    return (
        <>
            <Navbar/>
            <div className='flex h-screen'>
                <div className='bg-white h-max p-2 pr-10'>
                    <Sidebar/>
                </div>
                <div className='w-full h-full bg-green-100 px-20 pt-5'>
                    <RoutesPath/>
                </div>
            </div>
        </>
    );
};

export default MainPage;
