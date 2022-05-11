import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo from '../res/logo.png';

export default function NoServer(props) {
    const [serverValid, setServerValid] = useState(0);

    const checkServerValidity = async () => {
        const result = await axios.get('/ping');
        setServerValid(result.data.value ? 1 : -1);
    }

    useEffect(()=>{
        checkServerValidity();
    },[])
    return (
        <div className='modalMain'>
            <img src={logo} alt='Logo' />
            <br />

            {serverValid === 0 && <div>Connecting...</div>}
            {serverValid > 0 && <div>Connected to servers.</div>}
            {serverValid < 0 && <div>Cannot connect to servers.</div>}
        </div>
    );
}
