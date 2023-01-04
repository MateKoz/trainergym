import React, {useState} from 'react';
import {Datatable} from "../../../components/common/Datatable";
import {headers} from "../data/HeadersTable";
import {DatatableItem} from "../../../components/common/DatatableItem";
import {Clients as data} from "../data/Clients";
import {AiFillDelete} from "react-icons/ai";
import Tooltip from "../../../components/common/Tooltip";
import {BsChatLeftText, BsFillPersonPlusFill} from "react-icons/bs";
import toast from 'react-hot-toast';
import Toast from "../../../components/common/Toast";
import Button from "../../../components/common/Button";


const DatatableClients = () => {
    const [dataItems, setDataItems] = useState(data)
    const [modalOpen, setModalOpen] = useState(true)

    const removeClientHandler = (index) => {
        const currentClientList = [...dataItems];
        currentClientList.splice(index, 1);
        setDataItems(currentClientList)
        onDeleteSuccess();
    }
    console.log(data)

    const onDeleteSuccess = () => {
        toast('Deletion successful')
    }

    return (
        <>
            <div className="flex justify-end items-center w-full">
                <Button color='primary'><BsFillPersonPlusFill size={20}/>Add new
                    client</Button>
            </div>
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
        </>
    );
};

export default DatatableClients;
