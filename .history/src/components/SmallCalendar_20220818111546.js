import React, { useState } from 'react'
import dayjs from 'dayjs'
import { getMonth } from '../util'

function SmallCalendar() {
    const [currentMonthIndex, setMonthIndex] = useState(dayjs().month());
    const [currentMonth, setCurrentMonth] = useState(getMonth())
  return (
    <div>

    </div>
  )
}

export default SmallCalendar