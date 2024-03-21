'use client';

import 'react-calendar/dist/Calendar.css';
import '@/app/styles/calendar.css';
import React from 'react';
import ReactCalendar from 'react-calendar';
import { lastDayOfYear } from 'date-fns';

interface CalendarProps {
  onChange?: (value: any, e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void | undefined;
  minDate?: Date;
  maxDate?: Date;
  defaultValue?: Date;
}

const Calendar: React.FC<CalendarProps> = ({
  minDate = new Date(),
  maxDate = lastDayOfYear(new Date()),
  defaultValue = new Date(),
  onChange = () => {},
}) => {
  return (
    <div className="calendar">
      <ReactCalendar
        minDate={minDate}
        maxDate={maxDate}
        maxDetail="month"
        minDetail="month"
        defaultValue={defaultValue}
        onChange={onChange}
      />
    </div>
  );
};

export default Calendar;
