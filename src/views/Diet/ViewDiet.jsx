import React from 'react';
import {Helmet} from "react-helmet";
import Spinner from "../../components/common/Spinner";
import { Suspense } from 'react'
import {Breadcrumb} from "../../components/common/Breadcrumb";

const breadcrumbItems = [
    {
        label: 'Diet',
    },
]

const ViewDiet = () => {
    return (
        <>
            <Helmet>
                <title> Diet | Trainer App</title>
            </Helmet>
            <Suspense fallback={<Spinner/>}>
                <Breadcrumb items={breadcrumbItems}>
           <div>dksadas</div>
                </Breadcrumb>
            </Suspense>
        </>
    );
};

export default ViewDiet;
