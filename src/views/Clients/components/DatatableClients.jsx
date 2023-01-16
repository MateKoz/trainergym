// import React, {useState} from 'react';
// import {Datatable} from "../../../components/common/Datatable";
// import {headers} from "../data/HeadersTable";
// import {DatatableItem} from "../../../components/common/DatatableItem";
// import {AiFillMinusSquare} from "react-icons/ai";
// import Tooltip from "../../../components/common/Tooltip";
// import {BsFillPersonPlusFill, BsPersonPlusFill} from "react-icons/bs";
// import toast from 'react-hot-toast';
// import Toast from "../../../components/common/Toast";
// import Button from "../../../components/common/Button";
// import Card from "../../../components/common/Card";
// import clientsList from "../data/clientsList";
//
// const DatatableClients = () => {
//
//     const [dataItems, setDataItems] = useState(clientsList)
//     const [modalAddOpen, setModalAddOpen] = useState(false)
//     const [addFormData, setAddFormData] = useState({
//         name: '',
//         surname: '',
//         age: '',
//         startIn: '',
//         target: '',
//         diet: '',
//         supplementation: '',
//         status: '',
//     });
//     console.log(addFormData)
//
//     const [name, setName] = useState('');
//     const [surname, setSurname] = useState('');
//     const [age, setAge] = useState('');
//     const [startIn, setStartIn] = useState('');
//     const [target, setTarget] = useState('');
//     const [diet, setDiet] = useState('');
//     const [supplementation, setSupplementation] = useState('');
//     const [status, setStatus] = useState('Active');
//
//     const removeClientHandler = (index) => {
//         const currentClientList = [...dataItems];
//         currentClientList.splice(index, 1);
//         setDataItems(currentClientList)
//         onDeleteSuccess();
//     }
//
//     const onDeleteSuccess = () => {
//         toast('Deletion successful')
//     }
//
//     const newItem = {
//         name: name,
//         surname: surname,
//         age: age,
//         startIn: startIn,
//         target: target,
//         diet: diet,
//         supplementation: supplementation,
//         status: status,
//     }
//
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setDataItems([...dataItems, newItem]);
//         setModalAddOpen(false)
//         setName('')
//         setSurname('')
//         setAge('')
//         setStartIn('');
//         setTarget('');
//         setDiet('')
//         setSupplementation('')
//         setStatus('Active')
//     };
//
//
//     return (
//         <>
//             <div className="flex justify-end items-center w-full my-2">
//                 {!modalAddOpen && (
//                     <Button onClick={() => setModalAddOpen(true)}
//                             color='primary'>
//                         <BsFillPersonPlusFill size={20}/>Add new client
//                     </Button>)
//                 }
//             </div>
//
//             {modalAddOpen && (
//                 <>
//                     <Card className='my-2'>
//                         <div className='flex justify-center items-center mb-5'>
//                             <BsPersonPlusFill className='text-lime-600' size={32}/>
//                             <div className='text-lime-600 text-sm ml-2'>Add new client</div>
//                         </div>
//                         <form onSubmit={handleSubmit}>
//                             <div className="flex flex-col gap-2 pb-2">
//                                 <div className="grid grid-cols-4 gap-x-4 gap-y-2">
//                                     <div className='flex flex-col'>
//                                         <label className='text-sm text-slate-400'>
//                                             Imię:
//                                         </label>
//                                         <input
//                                             type="text"
//                                             className=' bg-slate-100 h-9 px-1 border-2 border-lime-200'
//                                             placeholder={`Imię`}
//                                             name={name}
//                                             value={name}
//                                             onChange={(e) => setName(e.target.value)}/>
//                                     </div>
//                                     <div className='flex flex-col'>
//                                         <label className='text-sm text-slate-400'>
//                                             Nazwisko:
//                                         </label>
//                                         <input type="text"
//                                                className='bg-slate-100 h-9 px-1 border-2 border-lime-200'
//                                                name={surname}
//                                                value={surname}
//                                                placeholder={'Nazwisko'}
//                                                onChange={(e) => setSurname(e.target.value)}/>
//                                     </div>
//                                     <div className='flex flex-col'>
//                                         <label className='text-sm text-slate-400'>
//                                             Wiek:
//                                         </label>
//                                         <input type="number"
//                                                placeholder={'Wiek'}
//                                                className='bg-slate-100 h-9 px-1 border-2 border-lime-200'
//                                                name={age}
//                                                value={age}
//                                                onChange={(e) => setAge(e.target.value)}/>
//                                     </div>
//                                     <div className='flex flex-col'>
//                                         <label className='text-sm text-slate-400'>
//                                             Start:
//                                         </label>
//                                         <input
//                                             type="text"
//                                             className='bg-slate-100 h-9 px-1 border-2 border-lime-200'
//                                             placeholder={`Rozpoczęcie`}
//                                             name={startIn}
//                                             value={startIn}
//                                             onChange={(e) => setStartIn(e.target.value)}/>
//                                     </div>
//                                     <div className='flex flex-col'>
//                                         <label className='text-sm text-slate-400'>
//                                             Cel:
//                                         </label>
//                                         <input
//                                             type="text"
//                                             className='bg-slate-100 h-9 px-1 border-2 border-lime-200'
//                                             placeholder={`Cel`}
//                                             name={target}
//                                             value={target}
//                                             onChange={(e) => setTarget(e.target.value)}/>
//                                     </div>
//                                     <div className='flex flex-col'>
//                                         <label className='text-sm text-slate-400'>
//                                             Dieta:
//                                         </label>
//                                         <input
//                                             type="text"
//                                             className='bg-slate-100 h-9 px-1 border-2 border-lime-200'
//                                             placeholder={`Dieta`}
//                                             name={diet}
//                                             value={diet}
//                                             onChange={(e) => setDiet(e.target.value)}/>
//                                     </div>
//                                     <div className='flex flex-col'>
//                                         <label className='text-sm text-slate-400'>
//                                             Suplementacja:
//                                         </label>
//                                         <input
//                                             type="text"
//                                             className='bg-slate-100 h-9 px-1 border-2 border-lime-200'
//                                             placeholder={`Suplementacja`}
//                                             name={supplementation}
//                                             value={supplementation}
//                                             onChange={(e) => setSupplementation(e.target.value)}/>
//                                     </div>
//                                     <div className='flex flex-col'>
//                                         <label className='text-sm text-slate-400'>
//                                             Status:
//                                         </label>
//
//                                             <select
//                                                 className='bg-slate-100 h-9 px-1 border-2 border-lime-200'
//                                                 name={status}
//                                                 onChange={(e) => {
//                                                     let statusOptions = e.target.options[e.target.selectedIndex].innerText
//                                                     setStatus(statusOptions)
//                                                 }}>
//                                                 <option disabled value=""></option>
//                                                 <option value="active">Active</option>
//                                                 <option value="finish">Finished</option>
//                                                 <option value="freeze">Freeze</option>
//                                                 <option value="waiting">Waiting</option>
//                                                 <option value="soon">Soon</option>
//                                             </select>
//
//
//                                     </div>
//                                     <div className='flex gap-1'>
//                                         <Button
//                                             className='bg-inherit text-black border-2 border-black hover:bg-slate-100'
//                                             onClick={() => setModalAddOpen(false)}>Anuluj</Button>
//                                         <Button type="submit" value='submit'>Dodaj</Button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </form>
//                     </Card>
//                 </>
//             )}
//
//             <Datatable headers={headers}>
//                 {dataItems?.map(
//                     ({
//                          name,
//                          surname,
//                          age,
//                          startIn,
//                          target,
//                          diet,
//                          supplementation,
//                          status
//                      }, index) => (
//                         <DatatableItem headers={headers} key={index}>
//                             <div>{name}</div>
//                             <div>{surname}</div>
//                             <div>{age}</div>
//                             <div>{startIn}</div>
//                             <div>{target}</div>
//                             <div>{diet}</div>
//                             <div>{supplementation}</div>
//                             <div>{status}</div>
//                             <div className='flex'>
//                                 <Tooltip value={'Remove Client'}>
//                                     <div className='cursor-pointer text-lime-300 hover:text-red-500'>
//                                         <button onClick={() => removeClientHandler(index)}>
//                                             <AiFillMinusSquare size={24}/>
//                                         </button>
//                                         <Toast/>
//                                     </div>
//                                 </Tooltip>
//                             </div>
//                         </DatatableItem>
//                     ),
//                 )}
//             </Datatable>
//
//         </>
//     );
// };
//
// export default DatatableClients;