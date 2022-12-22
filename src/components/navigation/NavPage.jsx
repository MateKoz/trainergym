import React from 'react';
import {Route, Routes} from "react-router-dom";
import ViewClients from "../../views/Clients/ViewClients";
import ViewDashboard from "../../views/Dashboard/ViewDashboard";
import ViewTable from "../../views/Table/ViewTable";

const NavPage = () => {
    return (
        <>
                <Routes>
                    <Route path='/' element={<ViewDashboard/>}/>
                    <Route path='/clients' element={<ViewClients/>}/>
                    <Route path='/table' element={<ViewTable/>}/>
                </Routes>
        </>
    );
};

export default NavPage;
