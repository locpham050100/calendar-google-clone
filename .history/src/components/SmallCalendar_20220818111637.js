import React, { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import { getMonth } from '../util'

function SmallCalendar() {
    const [currentMonthIndex, setMonthIndex] = useState(dayjs().month());
    const [currentMonth, setCurrentMonth] = useState(getMonth());
    useEffect(() => {

    }, [currentMonth])
  return (
    <div>

    </div>
  )
}

export default SmallCalendar