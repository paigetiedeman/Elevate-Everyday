import React, { useState, useContext, useEffect } from 'react';
import { getMonth } from '../../util';
import CalendarHeader from './CalendarHeader';
import Sidebar from './Sidebar';
import Month from './Month';
import GlobalContext from '../../context/GlobalContext';
// import ContextWrapper from '../../context/ContextWrapper';
import EventModal from './EventModal';
import './Calendar.css';

export default function Calendar() {

  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <>
      {showEventModal && <EventModal />}

      <div className="tw-h-screen tw-flex tw-flex-col">
        <CalendarHeader />
        <div className="tw-flex tw-flex-1">
          <Sidebar />
          <Month month={currentMonth} />
        </div>
      </div>
    </>
  );
}
