import React from "react";

import logo from "../assets/logo.png"

function CalendarHeader() {
    return (  
        <header className="px-4 py-2 flex items-center">
            <img src={logo} alt="calendar" />
        </header>
    );
}

export default CalendarHeader;