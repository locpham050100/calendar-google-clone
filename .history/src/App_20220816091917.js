import React from 'react';
import './App.css';

import { getMonth } from './util'

function App() {

  console.table(getMonth(1));

  return (
    <React.Fragment>
      <div className="h-screen flex flex-col">
        <CalendarHeader />
        <div className="flex flex--1">
          
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
