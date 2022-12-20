import React from 'react';
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const MainPage = () => {
    return (
        <>
            <section>
                <div>
                    <Navbar/>
                </div>
            </section>
            <section>
                <div className='flex'>
                    <div className='bg-white h-screen p-2 pr-10'>
                        <Sidebar/>
                    </div>
                    <div className='w-full bg-slate-100 h-screen pl-2'></div>
                </div>
            </section>
        </>
    );
};

export default MainPage;
