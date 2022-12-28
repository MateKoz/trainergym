import React from 'react';
import {Helmet} from "react-helmet";
import Spinner from "../../components/common/Spinner";
import {Suspense} from 'react'
import {Breadcrumb} from "../../components/common/Breadcrumb";
import Button from "../../components/common/Button";
import {BsFillPersonPlusFill} from "react-icons/bs";

const breadcrumbItems = [
    {
        label: 'Clients',
    },
]

const ViewClients = () => {
    return (
        <>
            <Helmet>
                <title> Clients | Trainer App</title>
            </Helmet>
            <Suspense fallback={<Spinner/>}>
                <Breadcrumb items={breadcrumbItems}>
                    <div className="flex items-center gap-1">
                        <Button to={'/clients/add'} color='primary'><BsFillPersonPlusFill size={32}/>Add new
                            client</Button>
                    </div>
                </Breadcrumb>
            </Suspense>
        </>
    )
        ;
};

export default ViewClients;
