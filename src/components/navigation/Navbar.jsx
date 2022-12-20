import React from 'react';
import {CgGym} from "react-icons/cg";

const Navbar = () => {
    return (
        <>
            <div className='bg-white h-35 w-full flex border-b-4 border-slate-600'>
                <div className='flex m-5 items-center justify-start'>
                    <CgGym className='text-black text-7xl mr-5'/>
                    <p className='text-black font-semibold text-3xl'>Trainer Gym App</p>
                </div>
            </div>
        </>
    );
};

export default Navbar;
