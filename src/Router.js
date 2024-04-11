import React from 'react'
import { Route } from 'react-router'
import { Routes } from 'react-router';
import Add from './components/AddCar';
import Login from './components/Login';

import Listing from './components/Listing';
import RestaurantDetails1 from './components/ResturauntDetail/ResturauntDetails1';
import RestaurantDetails2 from './components/ResturauntDetail/2ResturauntDetails';
import RestaurantDetails3 from './components/ResturauntDetail/3resturauntDetails';
//import { Login } from '@mui/icons-material';
//import { Switch, Route } from 'react-router-dom';

const Router = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Listing />} component={Listing} />
            <Route path="/add" element={<Add />} component={Add} />
            <Route path="/login" element={<Login />} component={Login} />
            <Route path="/restaurant/ConTodo" element={<RestaurantDetails1 />} />
            <Route path="/restaurant/Komé" element={<RestaurantDetails2 />} />
            <Route path="/restaurant/KoreaHouse" element={<RestaurantDetails3 />} />

        </Routes>
    );
};

export default Router;