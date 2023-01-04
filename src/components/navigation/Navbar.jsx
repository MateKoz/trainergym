import React from 'react';
import {GiWeightLiftingUp} from "react-icons/gi";

const Navbar = () => {
    return (
        <>
            <div className='bg-white h-30 w-full flex sticky top-0 border-b-2 border-lime-400'>
                <div className='flex items-center justify-start'>
                    <GiWeightLiftingUp className='text-lime-400 text-8xl m-2 font-bold'/>
                    <div className='flex flex-col'>
                        <span className='items-center font-bold text-lime-400 font-semibold text-xl'>Krystian
                            Kochmański
                            <p className='text-slate-400 ml-4'>Trener personalny</p>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
