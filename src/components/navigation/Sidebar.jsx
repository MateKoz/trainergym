import React from 'react';
import {SidebarData as data} from "../../data/SidebarData";
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    console.log(data)

    return (
        <div>
            {data.map((item, index) => {
                return (
                    <NavLink to={item.path} key={index}
                             className='flex hover:bg-slate-100 rounded ml-4 flex p-2 cursor-pointer text-gray-700  transition-transform ease-in-out hover:translate-x-1 duration-300 my-1  truncate '>
                        <div className='flex items-center py-1'>
                            <div className='mr-2 text-3xl'>{item.icon}</div>
                            <div className='text-xl'>{item.titles}</div>
                        </div>
                    </NavLink>
                )
            })}
        </div>
    );
};

export default Sidebar;
