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

    const getDay = (day) => {
        const format = "DD-MM-YY"
        const nowDay = dayjs().format(format)
        const currDay = day.format(format)
        if ( nowDay === currDay ) {
            return "bg-blue-500 rounded-full text-white"
        } else {
            return ""
        }
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
            {currentMonth[0].map((day, index) => (
                <span key={index} className="text-sm py-1 text-center">
                    {day.format("dd").charAt(0)}
                </span>
            ))}
            {currentMonth.map((row, index) => (
                <React.Fragment key={index}>
                    {row.map((day, index) => (
                        <button key={index} className={`py-1 w-full ${getDay(day)}`}>
                            <span className="text-sm">
                                {day.format("D")}
                            </span>
                        </button>
                    ))}
                </React.Fragment>
            ))}
        </div>
    </div>
  )
}

export default SmallCalendar