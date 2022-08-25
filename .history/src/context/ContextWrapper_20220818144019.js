import React, { useState } from 'react';
import GlobalContext from './GlobalContext'
import dayjs from 'dayjs'

function ContextWrapper(props) {
    const [monthIndex, setMonthIndex] = useState(dayjs().month())
    const [smallCalendarMonth, setSmallCalendarMonth] = useState(null)


    return (  
        <GlobalContext.Provider value={{ monthIndex, setMonthIndex}}>
            {props.children}
        </GlobalContext.Provider>
    );
}

export default ContextWrapper;