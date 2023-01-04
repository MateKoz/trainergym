import React, {useState} from 'react';
import {Datatable} from "../../../components/common/Datatable";
import {headers} from "../data/HeadersTable";
import {DatatableItem} from "../../../components/common/DatatableItem";
import {Clients as data} from "../data/Clients";
import {AiFillDelete} from "react-icons/ai";
import Tooltip from "../../../components/common/Tooltip";
import {BsChatLeftText} from "react-icons/bs";
import toast from 'react-hot-toast';
import Toast from "../../../components/common/Toast";


const DatatableClients = () => {
    const [dataItems, setDataItems] = useState(data)

    const removeClientHandler = (index) => {
        const currentClientList = [...dataItems];
        currentClientList.splice(index, 1);
        setDataItems(currentClientList)
        onDeleteSuccess();
    }

    const onDeleteSuccess = () => {
        toast('Deletion successful')
    }
    console.log(Toast)

    return (
        <Datatable headers={headers}>
            {dataItems?.map(
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
                            <BsChatLeftText className='text-slate-400 hover:text-black'/>
                        </Tooltip>
                        <Tooltip value={'Remove Client'}>
                            <div className='cursor-pointer text-slate-300 hover:text-red-500'>
                                <button onClick={() => removeClientHandler(index)}>
                                    <AiFillDelete/>
                                </button>
                                <Toast/>
                            </div>
                        </Tooltip>
                    </DatatableItem>
                ),
            )}
        </Datatable>


    );
};

export default DatatableClients;
