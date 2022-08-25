import React from 'react';
import CreateEventButton from './CreateEventButton';
import SmallCalendar from './SmallCalendar';

function Sidebar() {
    return (  
        <aside className="border p-5 w-64">
            <CreateEventButton />
        </aside>
    );
}

export default Sidebar;