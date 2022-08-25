import React, { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import { getMonth } from '../util'

function SmallCalendar() {
    const [currentMonthIndex, setMonthIndex] = useState(dayjs().month());
    const [currentMonth, setCurrentMonth] = useState(getMonth());

    useEffect(() => {
        setCurrentMonth(getMonth(currentMonthIndex))
    }, [currentMonthIndex])

  return (
    <div className="mt-9">
        <header className="text-gray-500 font-bold">
            
        </header>
    </div>
  )
}

export default SmallCalendar