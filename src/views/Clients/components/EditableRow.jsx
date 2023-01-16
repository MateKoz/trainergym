import React from 'react';
import {MdDone} from "react-icons/md";
import {RxCross2} from "react-icons/rx";
import Tooltip from "../../../components/common/Tooltip";
import {AiFillMinusSquare} from "react-icons/ai";
import Toast from "../../../components/common/Toast";
import {RiEditBoxLine} from "react-icons/ri";

const EditableRow = ({handleCancelEditForm, editFormData, handleEditFormChange, handleEditFormSubmit}) => {
    return (
        <tr className={`even:bg-lime-100  flex flex-wrap lg:table-row text-center`}>
            <td className='p-2 block lg:table-cell'>
                <input
                    className='bg-slate-100 h-9 px-1 border-2 border-lime-200'
                    type="text"
                    required={require}
                    placeholder={`Wprowadź imię`}
                    name='name'
                    value={editFormData.name}
                    onChange={handleEditFormChange}
                />
            </td>
            <td className='p-2 block lg:table-cell'>
                <input
                    className='bg-slate-100 h-9 px-1 border-2 border-lime-200'
                    type="number"
                    required={require}
                    placeholder={'Wprowadź wiek'}
                    name='age'
                    onChange={handleEditFormChange}
                    value={editFormData.age}
                />
            </td>
            <td className='p-2 block lg:table-cell'>
                <input
                    className='bg-slate-100 h-9 px-1 border-2 border-lime-200'
                    type="date"
                    placeholder={`Rozpoczecie`}
                    name='startIn'
                    onChange={handleEditFormChange}
                    value={editFormData.startIn}
                />
            </td>
            <td className='p-2 block lg:table-cell'>
                <input
                    className='bg-slate-100 h-9 px-1 border-2 border-lime-200'
                    type="text"
                    placeholder={'Przewidywany okres'}
                    name='interval'
                    onChange={handleEditFormChange}
                    value={editFormData.interval}

                />
            </td>
            <td className='p-2 block lg:table-cell'>
                <input
                    className='bg-slate-100 h-9 px-1 border-2 border-lime-200'
                    type="text"
                    placeholder={`Cel`}
                    name='target'
                    onChange={handleEditFormChange}
                    value={editFormData.target}

                />
            </td>
            <td>
                <input
                    className='bg-slate-100 h-9 px-1 border-2 border-lime-200'
                    type="text"
                    placeholder={`Rodzaj diety`}
                    name='diet'
                    onChange={handleEditFormChange}
                    value={editFormData.diet}

                />
            </td>
            <td>
                <input
                    className='bg-slate-100 h-9 px-1  border-2 border-lime-200'
                    type="text"
                    placeholder={`Suplementacja`}
                    name='nutrition'
                    onChange={handleEditFormChange}
                    value={editFormData.nutrition}

                />
            </td>
            <select
                placeholder={`Wybierz status`}
                className='bg-slate-100 h-9 px-1 border-2 border-lime-200 my-5'
                onChange={handleEditFormChange}
                value={editFormData.status}
            >
                <option value="active">Active</option>
                <option value="finish">Finished</option>
                <option value="freeze">Freeze</option>
                <option value="waiting">Waiting</option>
                <option value="soon">Soon</option>
            </select>
            <td>
                <div className='flex justify-center items-center my-5 '>
                    <Tooltip value={'Save'}>
                        <div className='cursor-pointer text-lime-700 hover:text-blue-500'>
                            <button type='submit' onClick={(e) => handleEditFormSubmit(e)}>
                                <MdDone size={24}/>
                            </button>
                            <Toast/>
                        </div>
                    </Tooltip>
                    <Tooltip value={'Cancel'}>
                        <div className='cursor-pointer text-lime-700 hover:text-red-500'>
                            <button type='button' onClick={(e) => handleCancelEditForm(e)}>
                                <RxCross2 size={24}/>
                            </button>
                            <Toast/>
                        </div>
                    </Tooltip>
                </div>
            </td>
        </tr>
    );
};

export default EditableRow;
