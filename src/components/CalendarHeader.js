import React, { useContext } from "react";
import dayjs from "dayjs";

import logo from "../assets/logo.png";
import GlobalContext from "../context/GlobalContext";

function CalendarHeader() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);
  const handlePrevMonth = () => {
    setMonthIndex(monthIndex - 1);
  };
  const handleNextMonth = () => {
    setMonthIndex(monthIndex + 1);
  };
  const handleReset = () => {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  };

  return (
    <header className="mobile:px-0.5 px-4 py-2 flex items-center">
      
      <img src={logo} alt="calendar" className="mr-2 w-12 h-12" />
      <h1 className="mobile:hidden mr-10 text-xl text-gray-500 font-medium">
        Calendar
      </h1>
      <button
        onClick={handleReset}
        className="mobile:mr-0.5 mobile:text-sm border rounded py-2 px-4 mr-5 text-gray-900"
      >
        Today
      </button>
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
      <h2 className="mobile:text-sm mobile:ml-0.5 ml-4 text-xl text-gray-500 font-medium">
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM, YYYY")}
      </h2>
    </header>
  );
}

export default CalendarHeader;
