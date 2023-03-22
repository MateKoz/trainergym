import React from 'react';
import {Helmet} from "react-helmet";
import {Breadcrumb} from "../../components/common/Breadcrumb";
import DatatableClientsVer2 from "./components/DatatableClientsVer2";

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
                <Breadcrumb items={breadcrumbItems}/>
                <DatatableClientsVer2/>
        </>
    )
        ;
};

export default ViewClients;
