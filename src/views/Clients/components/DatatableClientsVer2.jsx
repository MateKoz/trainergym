import React, {useEffect, useState} from 'react';
import {Datatable} from "../../../components/common/Datatable";
import {headers} from "../../../data/HeadersTable";
import {BsFillPersonPlusFill, BsPersonPlusFill} from "react-icons/bs";
import Button from "../../../components/common/Button";
import Card from "../../../components/common/Card";
import data from "../../../data/clientsList";
import ReadRowTableClients from "./ReadRowTableClients";
import EditableRow from "./EditableRow";
import {nanoid} from "nanoid";

const DatatableClientsVer2 = () => {
    const [modalAddOpen, setModalAddOpen] = useState(false);
    const [contacts, setContacts] = useState(data);
    const [addFormData, setAddFormData] = useState({
        name: '',
        age: '',
        startIn: '',
        target: '',
        diet: '',
        nutrition: '',
        status: '',
        interval: '',
    });
    const [editContactId, setEditContactId] = useState(null);
    const [editFormData, setEditFormData] = useState({
        name: '',
        age: '',
        startIn: '',
        target: '',
        diet: '',
        nutrition: '',
        status: '',
        interval: '',
    });

    const handleEditFormChange = (e) => {
        e.preventDefault();
        const fieldName = e.target.getAttribute('name');
        const fieldValue = e.target.value
        const newFormData = {...editFormData};
        newFormData[fieldName] = fieldValue
        setEditFormData(newFormData)
    }

    const handleAddForm = (e) => {
        e.preventDefault();
        const fieldName = e.target.getAttribute('name');
        const fieldValue = e.target.value

        const newFormData = {...addFormData};
        newFormData[fieldName] = fieldValue

        setAddFormData(newFormData)
    }

    const handleEditClick = (e, contacts) => {
        e.preventDefault();
        setEditContactId(contacts.id)
        const formValues = {
            name: contacts.name,
            age: contacts.age,
            startIn: contacts.startIn,
            target: contacts.target,
            diet: contacts.diet,
            nutrition: contacts.nutrition,
            status: contacts.status,
            interval: contacts.interval,
            id: contacts.id
        }
        setEditFormData(formValues)
    }

    const handleEditFormSubmit = (e) => {
        e.preventDefault();
        const editContact = {
            name: editFormData.name,
            age: editFormData.age,
            startIn: editFormData.startIn,
            target: editFormData.target,
            diet: editFormData.diet,
            nutrition: editFormData.nutrition,
            status: editFormData.status,
            interval: editFormData.interval,
            id: nanoid()
        }
        const newContacts = [...contacts];
        const index = contacts.findIndex((contact) => contact.id === editContactId);

        newContacts[index] = editContact
        setContacts(newContacts)
        setEditContactId(null)
    }

    const handleCancelEditForm = (e) => {
        e.preventDefault()
        setEditContactId(null)
    }

    const handleDeleteClients = (contactId) => {
        const newContacts = [...contacts]

        const index = contacts.findIndex((contact) => contact.id === contactId)
        newContacts.splice(index, 1)

        setContacts(newContacts)
    }

    const handleAddFormSubmit = (e) => {
        e.preventDefault();

        const newClient = {
            name: addFormData.name,
            age: addFormData.age,
            startIn: addFormData.startIn,
            target: addFormData.target,
            diet: addFormData.diet,
            nutrition: addFormData.nutrition,
            status: addFormData.status,
            interval: addFormData.interval,
            id: nanoid()
        }

        const newClients = [...contacts, newClient]
        setContacts(newClients)
        setModalAddOpen(false)
    }
    console.log(contacts.status)
    return (
        <>
            <div className="flex justify-end items-center w-full my-2">
                <Button onClick={() => setModalAddOpen(!modalAddOpen)}
                        color='primary'>
                    <BsFillPersonPlusFill size={20}/>Add new client
                </Button>
            </div>
            {modalAddOpen &&
            <Card className='my-2'>
                <div className='flex justify-center items-center mb-5'>
                    <BsPersonPlusFill className='text-lime-600' size={32}/>
                    <div className='text-lime-600 text-sm ml-2'>Add new client</div>
                </div>
                <form onSubmit={handleAddFormSubmit}>
                    <div className="flex flex-col gap-2 pb-2">
                        <div className="grid grid-cols-4 gap-x-4 gap-y-2">
                            <div className='flex flex-col'>
                                <label className='text-sm text-slate-400'>
                                    Imię:
                                </label>
                                <input
                                    type="text"
                                    name='name'
                                    className=' bg-slate-100 h-9 px-1 border-2 border-lime-200'
                                    placeholder={`Wprowadź imię`}
                                    onChange={handleAddForm}
                                />
                            </div>
                            <div className='flex flex-col'>
                                <label className='text-sm text-slate-400'>
                                    Wiek:
                                </label>
                                <input
                                    type="number"
                                    name='age'
                                    placeholder={'Wprowadź wiek'}
                                    className='bg-slate-100 h-9 px-1 border-2 border-lime-200'
                                    onChange={handleAddForm}
                                />
                            </div>
                            <div className='flex flex-col'>
                                <label className='text-sm text-slate-400'>
                                    Start:
                                </label>
                                <input
                                    name='startIn'
                                    type="date"
                                    className='bg-slate-100 h-9 px-1 border-2 border-lime-200'
                                    placeholder={`Rozpoczecie`}
                                    onChange={handleAddForm}
                                />
                            </div>
                            <div className='flex flex-col'>
                                <label className='text-sm text-slate-400'>
                                    Cel:
                                </label>
                                <input
                                    name='target'
                                    type="text"
                                    className='bg-slate-100 h-9 px-1 border-2 border-lime-200'
                                    placeholder={`Wprowadź cel`}
                                    onChange={handleAddForm}
                                />
                            </div>
                            <div className='flex flex-col'>
                                <label className='text-sm text-slate-400'>
                                    Dieta:
                                </label>
                                <input
                                    type="text"
                                    name='diet'
                                    className='bg-slate-100 h-9 px-1 border-2 border-lime-200'
                                    placeholder={`Wprowadź dietę`}
                                    onChange={handleAddForm}
                                />
                            </div>
                            <div className='flex flex-col'>
                                <label className='text-sm text-slate-400'>
                                    Suplementacja:
                                </label>
                                <input
                                    type="text"
                                    name='nutrition'
                                    className='bg-slate-100 h-9 px-1 border-2 border-lime-200'
                                    placeholder={`Wprowadź suplementację`}
                                    onChange={handleAddForm}
                                />
                            </div>
                            <div className='flex flex-col'>
                                <label className='text-sm text-slate-400'>
                                    Okres:
                                </label>
                                <input
                                    type="number"
                                    name='interval'
                                    placeholder={'Przewidywany okres'}
                                    className='bg-slate-100 h-9 px-1 border-2 border-lime-200'
                                    onChange={handleAddForm}
                                />
                            </div>
                            <div className='flex flex-col'>
                                <label className='text-sm text-slate-400'>
                                    Status:
                                </label>
                                <select
                                    name='status'
                                    className='bg-slate-100 h-9 px-1 border-2 border-lime-200'
                                    placeholder={`Wprowadź imię`}
                                    onChange={handleAddForm}
                                >
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
            }
            <form action="">
                <Datatable headers={headers}>
                    {contacts?.map(
                        (contacts,
                         index) => (
                            <>
                                {editContactId === contacts.id
                                    ? (
                                        <EditableRow
                                            editFormData={editFormData}
                                            handleCancelEditForm={handleCancelEditForm}
                                            handleEditFormChange={handleEditFormChange}
                                            handleEditFormSubmit={handleEditFormSubmit}
                                        />
                                    ) : (
                                        <ReadRowTableClients
                                            handleDeleteClients={handleDeleteClients}
                                            contacts={contacts}
                                            handleEditClick={handleEditClick}/>
                                    )}
                            </>
                        ),
                    )}
                </Datatable>
            </form>
        </>
    );
};

export default DatatableClientsVer2;