import React, { useState } from "react";
//import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AccountGrid from "../components/Instagram/Accounts/Accounts";
import Table from '../components/Common/Table'
import countries from '../Data/countries'
import Button from 'react-bootstrap/Button';
import Login from "../components/Instagram/Login/Login";
export const Index = () => {
    return (
        <div className="site-content">Instagram Index</div>
    );
};

export const Accounts = () => {
    return (
        <div className="site-content">
           <AccountGrid></AccountGrid>
        </div>
    );
};

export const CreateAccount = () => {
    return (
        <div className="site-content">Create instagram account</div>
    );
};

export const Live = () => {
    return (
        <div className="site-content">Instagram Live</div>
    );
};

export const LiveHistory = () => {
    return (
        <div className="site-content">Instagram live history</div>
    );
};

export const ManageAccount = () => {
    return (
        <div className="site-content">
            <Login />
        </div>
    );
};

export const Plans = () => {
    return (
        <div className="site-content">Instagram plans</div>
    );
};