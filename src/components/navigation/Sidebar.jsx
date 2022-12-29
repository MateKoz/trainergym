import React from 'react';
import {SidebarData as data} from "../../data/SidebarData";
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return (
        <div className='bg-white h-screen p-1 pr-6'>
            {data.map((item, index) => {
                return (
                    <NavLink to={item.path} key={index}
                             className='flex ml-4 flex p-2 group hover:bg-lime-200 hover:border-b-2 hover:rounded hover:border-lime-200 cursor-pointer transition-transform ease-in-out hover:translate-x-1 duration-300 my-1  truncate '>
                            <div className='mr-2 group-hover:text-slate-800 text-xl text-lime-600'>{item.icon}</div>
                            <div className='text-md group-hover:text-slate-800 text-lime-600'>{item.titles}</div>
                    </NavLink>
                )
            })}
        </div>
    );
};

export default Sidebar;
