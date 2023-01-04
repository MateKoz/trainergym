import React from 'react';
import {Toaster} from "react-hot-toast";
import {AiOutlineCheckCircle} from "react-icons/ai";

const Toast = () => {
    return (
        <Toaster
            toastOptions={{
                style: {
                    border: '2px solid #65E43E',
                    color: 'grey',
                    fontWeight: '#ADB5AB',
                    opacity: '0.5',
                },
                icon: <AiOutlineCheckCircle size={20} className={'text-lime-600'}/>
            }}
        />    );
};

export default Toast;
