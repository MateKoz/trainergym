import React from 'react';
import {Datatable} from "../../../components/common/Datatable";
import {headers} from "../data/HeadersTable";
import {DatatableItem} from "../../../components/common/DatatableItem";
import {Clients as data} from "../data/Clients";
import {AiFillDelete} from "react-icons/ai";
import Tooltip from "../../../components/common/Tooltip";
import {BsChatLeftText} from "react-icons/bs";

const DatatableClients = () => {
    return (
        <Datatable headers={headers}>
            {data?.map(
                ({
                     name,
                     surname,
                     age,
                     startIn,
                     target,
                     diet,
                     supplementation,
                     description
                 }, index) => (
                    <DatatableItem headers={headers} key={index}>
                        <div>{name}</div>
                        <div>{surname}</div>
                        <div>{age}</div>
                        <div>{startIn}</div>
                        <div>{target}</div>
                        <div>{diet}</div>
                        <div>{supplementation}</div>
                        <Tooltip
                            value={description}
                            className='cursor-pointer'>
                            <BsChatLeftText/>
                        </Tooltip>
                        <Tooltip value={'Remove Client'}>
                            <div className='cursor-pointer text-slate-300 hover:text-red-500'>
                                <button onClick={()=>{
                                    console.log(index)}}>
                                    <AiFillDelete/>
                                </button>
                            </div>
                        </Tooltip>
                    </DatatableItem>
                ),
            )}

        </Datatable>

    );
};

export default DatatableClients;
