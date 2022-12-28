import Helmet from 'react-helmet'
import { Suspense } from 'react'
import {Breadcrumb} from "../../components/common/Breadcrumb";
import AddClientsForm from "./components/AddClientsForm";
import Spinner from "../../components/common/Spinner";

const breadcrumbItems = [
    {
        label: 'Clients',
        url: '/clients',
    },
    {
        label: 'Clients Add',
    },
]

const ViewClientsFormAdd = () => {
    return (<>

            <Helmet>
                <title>Employees | PMTool</title>
            </Helmet>
            <Suspense fallback={<Spinner/>}>
                <Breadcrumb items={breadcrumbItems}/>
            </Suspense>
            <AddClientsForm/>
        </>

    );
};

export default ViewClientsFormAdd;
