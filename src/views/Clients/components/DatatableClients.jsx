import React, {useRef, useState} from 'react';
import {Datatable} from "../../../components/common/Datatable";
import {headers} from "../data/HeadersTable";
import {DatatableItem} from "../../../components/common/DatatableItem";
import {AiFillMinusSquare} from "react-icons/ai";
import Tooltip from "../../../components/common/Tooltip";
import {BsFillPersonPlusFill, BsPersonPlusFill} from "react-icons/bs";
import toast from 'react-hot-toast';
import Toast from "../../../components/common/Toast";
import Button from "../../../components/common/Button";
import Card from "../../../components/common/Card";
import {RiEditBoxFill} from "react-icons/ri";
import clientsList from "../data/clientsList";

const DatatableClients = () => {
    const [dataItems, setDataItems] = useState(clientsList)
    const [modalAddOpen, setModalAddOpen] = useState(false)
    const [modalEditOpen, setModalEditOpen] = useState(false)

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [age, setAge] = useState('');
    const [startIn, setStartIn] = useState('');
    const [target, setTarget] = useState('');
    const [diet, setDiet] = useState('');
    const [supplementation, setSupplementation] = useState('');
    const [status, setStatus] = useState('Active');


    const removeClientHandler = (index) => {
        const currentClientList = [...dataItems];
        currentClientList.splice(index, 1);
        setDataItems(currentClientList)
        onDeleteSuccess();
    }

    const onDeleteSuccess = () => {
        toast('Deletion successful')
    }

    const formInputs = useRef({
        name: '',
        surname: '',
        age: '',
        startIn: '',
        target: '',
        diet: '',
        supplementation: '',
        status: '',
    });

    const editClientHandler = (index) => {
        setModalEditOpen(true)
        const selectedUser = clientsList[index]
        console.log(selectedUser)

        formInputs.current.name.value = selectedUser.name;
        formInputs.current.surname.value = selectedUser.surname;
        formInputs.current.age.value = selectedUser.age;
        formInputs.current.startIn.value = selectedUser.startIn;
        formInputs.current.target.value = selectedUser.target;
        formInputs.current.diet.value = selectedUser.diet;
        formInputs.current.supplementation.value = selectedUser.supplementation;
        formInputs.current.status.value = selectedUser.status;
    }



    const newItem = {
        name: name,
        surname: surname,
        age: age,
        startIn: startIn,
        target: target,
        diet: diet,
        supplementation: supplementation,
        status: status,
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setDataItems([...dataItems, newItem]);
        setModalAddOpen(false)
        setName('')
        setSurname('')
        setAge('')
        setStartIn('');
        setTarget('');
        setDiet('')
        setSupplementation('')
        setStatus('Active')
    };


    return (
        <>
            <div className="flex justify-end items-center w-full my-2">
                {!modalAddOpen && !modalEditOpen && (
                    <Button onClick={() => setModalAddOpen(true)}
                            color='primary'>
                        <BsFillPersonPlusFill size={20}/>Add new client
                    </Button>)
                }
            </div>

            {modalEditOpen && (
                <>
                    <Card className='my-2'>
                        <div className='flex justify-center items-center mb-5'>
                            <BsPersonPlusFill className='text-lime-600' size={32}/>
                            <div className='text-lime-600 text-sm ml-2'>Edit client</div>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col gap-2 pb-2">
                                <div className="grid grid-cols-4 gap-x-4 gap-y-2">
                                    <div className='flex flex-col'>
                                        <label className='text-sm text-slate-400'>
                                            Imię:
                                        </label>
                                        <input
                                            ref={formInputs.current.name}
                                            type="text"
                                            className=' bg-slate-100 h-9 px-1 border-2 border-lime-200'
                                            placeholder={`Wprowadź imię`}
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}/>
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='text-sm text-slate-400'>
                                            Nazwisko:
                                        </label>
                                        <input
                                            type="text"
                                            ref={formInputs.current.surname}
                                            className='bg-slate-100 h-9 px-1 border-2 border-lime-200'
                                            value={surname}
                                            placeholder={'Wprowadź nazwisko'}
                                            onChange={(e) => setSurname(e.target.value)}/>
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='text-sm text-slate-400'>
                                            Wiek:
                                        </label>
                                        <input
                                            ref={formInputs.current.age}
                                            type="number"
                                            placeholder={'Wprowadź wiek'}
                                            className='bg-slate-100 h-9 px-1 border-2 border-lime-200'
                                            value={age}
                                            onChange={(e) => setAge(e.target.value)}/>
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='text-sm text-slate-400'>
                                            Start:
                                        </label>
                                        <input
                                            type="text"
                                            ref={formInputs.current.startIn}
                                            className='bg-slate-100 h-9 px-1 border-2 border-lime-200'
                                            placeholder={`Wprowadź imię`}
                                            value={startIn}
                                            onChange={(e) => setStartIn(e.target.value)}/>
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='text-sm text-slate-400'>
                                            Cel:
                                        </label>
                                        <input
                                            type="text"
                                            ref={formInputs.current.target}
                                            className='bg-slate-100 h-9 px-1 border-2 border-lime-200'
                                            placeholder={`Wprowadź imię`}
                                            value={target}
                                            onChange={(e) => setTarget(e.target.value)}/>
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='text-sm text-slate-400'>
                                            Dieta:
                                        </label>
                                        <input
                                            type="text"
                                            ref={formInputs.current.diet}
                                            className='bg-slate-100 h-9 px-1 border-2 border-lime-200'
                                            placeholder={`Wprowadź imię`}
                                            value={diet}
                                            onChange={(e) => setDiet(e.target.value)}/>
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='text-sm text-slate-400'>
                                            Suplementacja:
                                        </label>
                                        <input
                                            type="text"
                                            ref={formInputs.current.supplementation}
                                            className='bg-slate-100 h-9 px-1 border-2 border-lime-200'
                                            placeholder={`Wprowadź imię`}
                                            value={supplementation}
                                            onChange={(e) => setSupplementation(e.target.value)}/>
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='text-sm text-slate-400'>
                                            Status:
                                        </label>
                                        <select
                                            ref={formInputs.current.status}
                                            className='bg-slate-100 h-9 px-1 border-2 border-lime-200'
                                            placeholder={`Wprowadź imię`}
                                            onChange={(e) => {
                                                let statusOptions = e.target.options[e.target.selectedIndex].innerText
                                                setStatus(statusOptions)
                                            }}>
                                            <option value="active">Active</option>
                                            <option value="finish">Finished</option>
                                            <option value="freeze">Freeze</option>
                                            <option value="waiting">Waiting</option>
                                            <option value="soon">Soon</option>
                                        </select>
                                    </div>
                                    <div className='flex gap-1'>
                                        <Button
                                            className='bg-inherit text-black border-2 border-black hover:bg-slate-100'
                                            onClick={() => setModalEditOpen(false)}>Anuluj</Button>
                                        <Button type="edit">Edytuj</Button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </Card>
                </>
            )}
            {modalAddOpen && (
                <>
                    <Card className='my-2'>
                        <div className='flex justify-center items-center mb-5'>
                            <BsPersonPlusFill className='text-lime-600' size={32}/>
                            <div className='text-lime-600 text-sm ml-2'>Add new client</div>
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
                                            className=' bg-slate-100 h-9 px-1 border-2 border-lime-200'
                                            placeholder={`Wprowadź imię`}
                                            name={name}
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}/>
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='text-sm text-slate-400'>
                                            Nazwisko:
                                        </label>
                                        <input type="text"
                                               className='bg-slate-100 h-9 px-1 border-2 border-lime-200'
                                               name={surname}
                                               value={surname}
                                               placeholder={'Wprowadź nazwisko'}
                                               onChange={(e) => setSurname(e.target.value)}/>
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='text-sm text-slate-400'>
                                            Wiek:
                                        </label>
                                        <input type="number"
                                               placeholder={'Wprowadź wiek'}
                                               className='bg-slate-100 h-9 px-1 border-2 border-lime-200'
                                               name={age}
                                               value={age}
                                               onChange={(e) => setAge(e.target.value)}/>
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='text-sm text-slate-400'>
                                            Start:
                                        </label>
                                        <input
                                            type="text"
                                            className='bg-slate-100 h-9 px-1 border-2 border-lime-200'
                                            placeholder={`Wprowadź imię`}
                                            name={startIn}
                                            value={startIn}
                                            onChange={(e) => setStartIn(e.target.value)}/>
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='text-sm text-slate-400'>
                                            Cel:
                                        </label>
                                        <input
                                            type="text"
                                            className='bg-slate-100 h-9 px-1 border-2 border-lime-200'
                                            placeholder={`Wprowadź imię`}
                                            name={target}
                                            value={target}
                                            onChange={(e) => setTarget(e.target.value)}/>
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='text-sm text-slate-400'>
                                            Dieta:
                                        </label>
                                        <input
                                            type="text"
                                            className='bg-slate-100 h-9 px-1 border-2 border-lime-200'
                                            placeholder={`Wprowadź imię`}
                                            name={diet}
                                            value={diet}
                                            onChange={(e) => setDiet(e.target.value)}/>
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='text-sm text-slate-400'>
                                            Suplementacja:
                                        </label>
                                        <input
                                            type="text"
                                            className='bg-slate-100 h-9 px-1 border-2 border-lime-200'
                                            placeholder={`Wprowadź imię`}
                                            name={supplementation}
                                            value={supplementation}
                                            onChange={(e) => setSupplementation(e.target.value)}/>
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='text-sm text-slate-400'>
                                            Status:
                                        </label>
                                        <select
                                            className='bg-slate-100 h-9 px-1 border-2 border-lime-200'
                                            placeholder={`Wprowadź imię`}
                                            name={status}
                                            onChange={(e) => {
                                                let statusOptions = e.target.options[e.target.selectedIndex].innerText
                                                setStatus(statusOptions)
                                            }}>
                                            <option value="active">Active</option>
                                            <option value="finish">Finished</option>
                                            <option value="freeze">Freeze</option>
                                            <option value="waiting">Waiting</option>
                                            <option value="soon">Soon</option>
                                        </select>
                                    </div>
                                    <div className='flex gap-1'>
                                        <Button
                                            className='bg-inherit text-black border-2 border-black hover:bg-slate-100'
                                            onClick={() => setModalAddOpen(false)}>Anuluj</Button>
                                        <Button type="submit">Dodaj</Button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </Card>
                </>
            )}

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
                         status
                     }, index) => (
                        <DatatableItem headers={headers} key={index}>
                            <div>{name}</div>
                            <div>{surname}</div>
                            <div>{age}</div>
                            <div>{startIn}</div>
                            <div>{target}</div>
                            <div>{diet}</div>
                            <div>{supplementation}</div>
                            <div>{status}</div>
                            <div className='flex'>
                                <Tooltip value={'Remove Client'}>
                                    <div className='cursor-pointer text-lime-300 hover:text-red-500'>
                                        <button onClick={() => removeClientHandler(index)}>
                                            <AiFillMinusSquare size={24}/>
                                        </button>
                                        <Toast/>
                                    </div>
                                </Tooltip>
                                <Tooltip value={'Edit client'}>
                                    <div className='cursor-pointer text-lime-300 hover:text-lime-600'>
                                        <button onClick={() => editClientHandler(index)}>
                                            <RiEditBoxFill size={24}/>
                                        </button>
                                        <Toast/>
                                    </div>
                                </Tooltip>
                            </div>
                        </DatatableItem>
                    ),
                )}
            </Datatable>

        </>
    );
};

export default DatatableClients;