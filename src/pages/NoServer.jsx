import React from 'react';
import logo from '../res/logo.png';

export default function NoServer(props) {
    return (
        <div className='modalMain'>
            <img src={logo} alt='Logo' />
            <br />

            <div>Cannot connect to servers.</div>
        </div>
    );
}
