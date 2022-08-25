import React from 'react';
import plusImg from '../assets/plus.svg'

function CreateEventButton() {
    return (  
        <button className="border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl">
            <img src={plusImg} alt="" />
            <span className="pl-3 pr-7">Create</span>
        </button>
    );
}

export default CreateEventButton;