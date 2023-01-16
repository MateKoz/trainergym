import React from 'react';
import {Helmet} from "react-helmet";
import Spinner from "../../components/common/Spinner";
import {Suspense} from 'react'
import {Breadcrumb} from "../../components/common/Breadcrumb";
import MainInfo from "./components/MainInfo";

const breadcrumbItems = [
    {
        label: 'Strona Główna',
    },
]

const ViewDashboard = () => {
    return (
        <>
            <Helmet>
                <title> Strona Główna | Trainer App</title>
            </Helmet>
            <Suspense fallback={<Spinner/>}>
                <Breadcrumb items={breadcrumbItems}/>
                <MainInfo/>
            </Suspense>
        </>
    );
};

export default ViewDashboard;
