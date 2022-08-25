import React, { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import { getMonth } from '../util'

function SmallCalendar() {
    const [currentMonthIdx, setMonthIndex] = useState(dayjs().month());
    const [currentMonth, setCurrentMonth] = useState(getMonth());

    useEffect(() => {
        setCurrentMonth(getMonth(currentMonthIdx))
    }, [currentMonthIdx])

  return (
    <div className="mt-9">
        <header className="flex justify-between">
            <p className="text-gray-800 font-medium">
            {dayjs(new Date(dayjs().year(), currentMonthIdx)).format("MMMM, YYYY")}
            </p>
        </header>
    </div>
  )
}

export default SmallCalendar