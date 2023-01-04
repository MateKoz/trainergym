import React, {useState} from 'react';
import {Datatable} from "../../../components/common/Datatable";
import {headers} from "../data/HeadersTable";
import {DatatableItem} from "../../../components/common/DatatableItem";
import {Clients as data} from "../data/Clients";
import {AiFillDelete} from "react-icons/ai";
import Tooltip from "../../../components/common/Tooltip";
import {BsChatLeftText, BsFillPersonPlusFill, BsPersonPlusFill} from "react-icons/bs";
import toast from 'react-hot-toast';
import Toast from "../../../components/common/Toast";
import Button from "../../../components/common/Button";
import Card from "../../../components/common/Card";


const DatatableClients = () => {
    const [dataItems, setDataItems] = useState(data)
    const [modalOpen, setModalOpen] = useState(false)
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [age, setAge] = useState('');

    const removeClientHandler = (index) => {
        const currentClientList = [...dataItems];
        currentClientList.splice(index, 1);
        setDataItems(currentClientList)
        onDeleteSuccess();
    }

    const newItem = {
        name: name,
        surname: surname,
        age: age
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setDataItems([...dataItems, newItem]);
        setModalOpen(false)
        setName('')
        setSurname('')
        setAge('')
    };

    const onDeleteSuccess = () => {
        toast('Deletion successful')
    }

    return (
        <>
            <div className="flex justify-end items-center w-full my-2">
                {!modalOpen && (
                    <Button onClick={() => setModalOpen(true)}
                        color='primary'>
                    <BsFillPersonPlusFill size={20}/>Add new client
                </Button>)
                }
            </div>
            {modalOpen && (
                <>
                    <Card className='my-2'>
                        <div className='flex justify-center items-center mb-5'>
                            <BsPersonPlusFill className='text-lime-600' size={32}/>
                            <div className='text-lime-600 text-sm ml-2'> Add new client</div>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col gap-2 pb-2">
                                <div className="grid grid-cols-4 gap-x-4 gap-y-2">
                                    <div className='flex flex-col'>
                                        <label className='text-sm text-slate-400'>
                                            Imię:
                                        </label>
                                        <input
                                            type="text"
                                            className='bg-slate-100 p-1 border-2 border-lime-200'
                                            placeholder={`Wprowadź imię`}
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}/>
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='text-sm text-slate-400'>
                                            Nazwisko:
                                        </label>
                                        <input type="text"
                                               className='bg-slate-100 p-1 border-2 border-lime-200'
                                               value={surname}
                                               onChange={(e) => setSurname(e.target.value)}/>
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='text-sm text-slate-400'>
                                            Wiek:
                                        </label>
                                        <input type="number"
                                               className='bg-slate-100 p-1 border-2 border-lime-200'
                                               value={age}
                                               onChange={(e) => setAge(e.target.value)}/>
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='text-sm text-slate-400'>
                                            Start:
                                        </label>
                                        <input
                                            type="text"
                                            className='bg-slate-100 p-1 border-2 border-lime-200'
                                            placeholder={`Wprowadź imię`}
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}/>
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='text-sm text-slate-400'>
                                            Cel:
                                        </label>
                                        <input
                                            type="text"
                                            className='bg-slate-100 p-1 border-2 border-lime-200'
                                            placeholder={`Wprowadź imię`}
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}/>
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='text-sm text-slate-400'>
                                            Dieta:
                                        </label>
                                        <input
                                            type="text"
                                            className='bg-slate-100 p-1 border-2 border-lime-200'
                                            placeholder={`Wprowadź imię`}
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}/>
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='text-sm text-slate-400'>
                                            Suplementacja:
                                        </label>
                                        <input
                                            type="text"
                                            className='bg-slate-100 p-1 border-2 border-lime-200'
                                            placeholder={`Wprowadź imię`}
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}/>
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='text-sm text-slate-400'>
                                            Opis:
                                        </label>
                                        <textarea
                                            className='bg-slate-100 p-1 border-2 border-lime-200'
                                            placeholder={`Wprowadź imię`}
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}/>
                                    </div>
                                    <div className='flex gap-1'>
                                        <Button className='bg-inherit text-black border-2 border-black hover:bg-slate-100' onClick={() => setModalOpen(false)}>Anuluj</Button>
                                        <Button type="submit">Dodaj</Button>
                                    </div>
                                </div>
                            </div>
                        </form>

                    </Card>
                </>
            )
            }

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
