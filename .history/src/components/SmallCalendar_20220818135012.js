import React, { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import { getMonth } from '../util'

function SmallCalendar() {
    const [currentMonthIdx, setCurrentMonthIdx] = useState(dayjs().month());
    const [currentMonth, setCurrentMonth] = useState(getMonth());

    useEffect(() => {
        setCurrentMonth(getMonth(currentMonthIdx))
    }, [currentMonthIdx])

    const handlePrevMonth = () => {
        setCurrentMonthIdx(currentMonthIdx - 1)
    }
    const handleNextMonth = () => {
        setCurrentMonthIdx(currentMonthIdx + 1)
    }

  return (
    <div className="mt-9">
        <header className="flex justify-between">
            <p className="text-gray-500 font-medium">
            {dayjs(new Date(dayjs().year(), currentMonthIdx)).format("MMMM, YYYY")}
            </p>
            <button onClick={handlePrevMonth}>
                <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
                    chevron_left
                </span>
            </button>
            <button onClick={handleNextMonth}>
                <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
                    chevron_right
                </span>
            </button>
        </header>
        <div className="grid grid-cols-7 grid-rows-6">
            {currentMonth[0].map((day, index) => {
                <span>
                    {day.format("dd").charAt(0)}
                </span>
            })}
        </div>
    </div>
  )
}

export default SmallCalendar