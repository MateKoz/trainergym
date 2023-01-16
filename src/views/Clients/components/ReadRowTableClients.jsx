import React from 'react';
import Tooltip from "../../../components/common/Tooltip";
import {AiFillMinusSquare} from "react-icons/ai";
import Toast from "../../../components/common/Toast";
import {RiEditBoxLine} from "react-icons/ri";

const ReadRowTableClients = ({contacts, handleEditClick, handleDeleteClients}) => {
    return (
        <tr className={`even:bg-lime-100 flex flex-wrap lg:table-row text-center`}>
            <td>{contacts.name}</td>
            <td>{contacts.age}</td>
            <td>{contacts.startIn}</td>
            <td>{contacts.interval} months</td>
            <td>{contacts.target}</td>
            <td>{contacts.diet}</td>
            <td>{contacts.nutrition}</td>
            <td>{contacts.status}</td>
            <div className='flex justify-center items-center my-5 '>
                <Tooltip value={'Remove Client'}>
                    <div className='cursor-pointer text-lime-700 hover:text-red-500'>
                        <button onClick={() => handleDeleteClients(contacts.id)}>
                            <AiFillMinusSquare size={24}/>
                        </button>
                        <Toast/>
                    </div>
                </Tooltip>
                <Tooltip value={'Edit Client'}>
                    <div className='cursor-pointer text-lime-700 hover:text-blue-500'>
                        <button type='button' onClick={(e) => handleEditClick(e, contacts)}>
                            <RiEditBoxLine size={24}/>
                        </button>
                        <Toast/>
                    </div>
                </Tooltip>
            </div>
        </tr>
    )
        ;
};

export default ReadRowTableClients;
