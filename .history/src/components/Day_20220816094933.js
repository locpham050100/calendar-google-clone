import React from 'react';

function Day({ day }) {
    return (  
        <div className="border border-gray-200 flex flex-col">
            <header className="flex flex-col items-center">
                <p className="text-sm mt-1">{day.format("ddd").toUpperCase()}</p>

            </header>
        </div>
    );
}

export default Day;