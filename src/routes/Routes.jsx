import React from 'react';
import {Route, Routes} from "react-router-dom";
import ViewDashboard from "../views/Dashboard/ViewDashboard";
import ViewClients from "../views/Clients/ViewClients";
import ViewTable from "../views/Table/ViewTable";
import ViewSupplementation from "../views/Supplementation/ViewSupplementation";
import ViewTrainings from "../views/Trainings/ViewTrainings";
import ViewFinance from "../views/Finance/ViewFinance";
import ViewEquipments from "../views/Equipments/ViewEquipments";
import ViewGallery from "../views/Gallery/ViewGallery";
import ViewMessages from "../views/Messages/ViewMessages";
import ViewClientsFormAdd from "../views/Clients/ViewClientsFormAdd";


const RoutesPath = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<ViewDashboard/>}/>
                <Route path='/clients/' element={<ViewClients/>}/>
                <Route path='/table' element={<ViewTable/>}/>
                <Route path='/supplementation' element={<ViewSupplementation/>}/>
                <Route path='/trainings' element={<ViewTrainings/>}/>
                <Route path='/finance' element={<ViewFinance/>}/>
                <Route path='/equipment' element={<ViewEquipments/>}/>
                <Route path='/gallery' element={<ViewGallery/>}/>
                <Route path='/messages' element={<ViewMessages/>}/>

                <Route path='/clients/add' element={<ViewClientsFormAdd/>}/>

            </Routes>
        </>
    );
};

export default RoutesPath;
