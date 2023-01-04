import React from 'react';
import {Helmet} from "react-helmet";
import Spinner from "../../components/common/Spinner";
import {Suspense} from 'react'
import {Breadcrumb} from "../../components/common/Breadcrumb";
import DatatableClients from "./components/DatatableClients";
import AddClientsForm from "./components/AddClientsForm";

const breadcrumbItems = [
    {
        label: 'Dashboard',
        url: '/'
    },
    {
        label: 'Clients'
    }
]

const ViewClients = () => {
    return (
        <>
            <Helmet>
                <title> Clients | Trainer App</title>
            </Helmet>
            <Suspense fallback={<Spinner/>}>
                <Breadcrumb items={breadcrumbItems}>

                </Breadcrumb>
                <DatatableClients/>
                {/*<AddClientsForm/>*/}
            </Suspense>
        </>
    )
        ;
};

export default ViewClients;
