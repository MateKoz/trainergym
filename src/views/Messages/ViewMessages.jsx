import React from 'react';
import {Helmet} from "react-helmet";
import Spinner from "../../components/common/Spinner";
import { Suspense } from 'react'
import {Breadcrumb} from "../../components/common/Breadcrumb";
import {NavLink} from "react-router-dom";

const breadcrumbItems = [
    {
        label: 'Messages',
    },
]

const ViewMessages = () => {
    return (
        <>
            <Helmet>
                <title> Messages | Trainer App</title>
            </Helmet>
            <Suspense fallback={<Spinner/>}>
                <Breadcrumb items={breadcrumbItems}>
                    <div className="flex items-center gap-1">
                        <NavLink to={'/'}>Click
                        </NavLink>
                    </div>
                </Breadcrumb>
            </Suspense>
        </>
    );
};

export default ViewMessages;
