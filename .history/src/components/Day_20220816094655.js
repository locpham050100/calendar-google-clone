import React from 'react';

function Day({ day }) {
    return (  
        <div className="border border-gray-200 flex flex-col">
            {day.format()}
        </div>
    );
}

export default Day;