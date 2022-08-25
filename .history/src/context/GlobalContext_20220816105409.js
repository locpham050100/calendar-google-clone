import React from 'react';
import GlobalContext from './GlobalContext'

const GlobalContext = React.createContext({
    monthIndex: 0,
    setMonthIndex: (index) => {

    }
})

export default GlobalContext;