import React, {useContext} from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import {AuthContext} from '../Home/GSTATE/AuthProvider'


const Private = ({children}) =>{
    const saveUser = useSelector((state) => state.myuser);
    // const {saveUser} = useContext(AuthContext);
    // return saveUser ? children : <Navigate to='/'/>
    return <div style={{width: "100%", display: "flex", justifyContent: "center"}}> {saveUser ? children : <Navigate to='/'/>}</div>
};

export default Private;