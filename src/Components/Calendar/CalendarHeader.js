import dayjs from 'dayjs';
import React, { useContext } from 'react';
import logo from '../../assets/logo.png';
import GlobalContext from '../../context/GlobalContext';

export default function CalendarHeader() {

  const { monthIndex, setMonthIndex } = useContext(GlobalContext);

  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }

  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }

  function handleReset() {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }

  return (
    <header className="tw-px-4 tw-py-2 tw-flex tw-items-center">
      <img src={logo} alt="calendar" className="tw-mr-2 tw-w-12 tw-h-12" />
      <h1 className="tw-mr-10 tw-text-xl tw-text-gray-500 tw-fond-bold">Calendar</h1>
      <button onClick={handleReset} className="border rounded py-2 px-4 mr-5">
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
      <h2 className="tw-ml-4 tw-text-xl text-gray-500 font-bold">
        {dayjs(new Date(dayjs().year(), monthIndex)).format('MMMM YYYY')}
      </h2>
    </header>
  );
}
