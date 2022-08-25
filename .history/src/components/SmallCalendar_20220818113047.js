import React, { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import { getMonth } from '../util'

function SmallCalendar() {
    const [currentMonthInx, setMonthIndex] = useState(dayjs().month());
    const [currentMonth, setCurrentMonth] = useState(getMonth());

    useEffect(() => {
        setCurrentMonth(getMonth(currentMonthIdx))
    }, [currentMonthInx])

  return (
    <div className="mt-9">
        <header className="flex justify-between">
            <p className="text-gray-500 font-bold">
            {dayjs(new Date(dayjs().year, currentMonthIndex)).format("MMMM, YYYY")}
            </p>
        </header>
    </div>
  )
}

export default SmallCalendar