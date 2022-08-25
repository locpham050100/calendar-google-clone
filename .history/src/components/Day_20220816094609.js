import React from 'react';

function Day({ day }) {
    return (  
        <div className="border border-gray-200">
            {day.format()}
        </div>
    );
}

export default Day;