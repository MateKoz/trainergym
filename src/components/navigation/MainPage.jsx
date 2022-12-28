import React from 'react';
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import RoutesPath from "../../routes/Routes";

const MainPage = () => {
    return (
        <>
            <Navbar/>
                <div className='flex'>
                    <div className='bg-white h-screen p-2 pr-10'>
                        <Sidebar/>
                    </div>
                    <div className='w-full bg-lime-300 h-screen pl-2'>
                    <RoutesPath/>
                    </div>
                </div>
        </>
    );
};

export default MainPage;
