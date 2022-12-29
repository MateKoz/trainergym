import React from 'react';
import {CgGym} from "react-icons/cg";

const Navbar = () => {
    return (
        <>
            <div className='bg-white h-30 w-full flex sticky top-0 border-b-2 z-1 border-slate-600'>
                <div className='flex m-5 items-center justify-start'>
                    <CgGym className='text-black text-4xl mr-5'/>
                    <p className='text-black font-semibold text-xl'>Custom Trainer App</p>
                </div>
            </div>
        </>
    );
};

export default Navbar;
