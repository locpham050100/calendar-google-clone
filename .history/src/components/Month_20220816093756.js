import React from 'react';

function Month(month) {
    return (  
        <div className="flex-1 grid grid-cols-7 grid-rows-5">
           {month.map((row, i) => (
            <React.Fragment>
                
            </React.Fragment>
           ))} 
        </div>
    );
}

export default Month;