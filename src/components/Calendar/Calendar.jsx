import { useState } from "react";
import { SCalendar } from "./Calendar.styled";
import { CalendarTtl } from "./Calendar.styled";
import { CalendarP } from "./Calendar.styled";
import { CalendarSpan } from "./Calendar.styled";
import { CalendarBlock } from "./Calendar.styled";
import { CalendarMonth } from "./Calendar.styled";
import { CalendarContent } from "./Calendar.styled";
import { CalendarDAysNames } from "./Calendar.styled";
import { CalendarDAysName } from "./Calendar.styled";
import { CalendarCells } from "./Calendar.styled";
import { CalendarCell } from "./Calendar.styled";
import { CalendarNav } from "./Calendar.styled";
import { NavActions } from "./Calendar.styled";
import { NavAction } from "./Calendar.styled";
import { Svg } from "./Calendar.styled";
import { CalendarPeriod } from "./Calendar.styled";

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );
  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const startingDay = firstDayOfMonth.getDay();

  const startingDayAdjusted = startingDay === 0 ? 6 : startingDay - 1;

  const prevMonthDays = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    0
  ).getDate();

  const days = [];

  for (let i = 0; i < startingDayAdjusted; i++) {
    days.push({
      day: prevMonthDays - startingDayAdjusted + i + 1,
      isCurrentMonth: false,
      date: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - 1,
        prevMonthDays - startingDayAdjusted + i + 1
      ),
    });
  }

  for (let i = 1; i <= daysInMonth; i++) {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
    days.push({
      day: i,
      isCurrentMonth: true,
      date,
      isToday: isToday(date),
      isWeekend: date.getDay() === 0 || date.getDay() === 6,
    });
  }

  const lastDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  );
  const lastDayOfWeek = lastDayOfMonth.getDay(); 

  
  if (lastDayOfWeek !== 0) {
    const daysToAdd = 7 - lastDayOfWeek; 
    for (let i = 1; i <= daysToAdd; i++) {
      days.push({
        day: i,
        isCurrentMonth: false,
        date: new Date(
          currentDate.getFullYear(),
          currentDate.getMonth() + 1,
          i
        ),
      });
    }
  }

  function isToday(date) {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  }

  const handleDayClick = (day) => {
    if (day.isCurrentMonth) {
      setSelectedDate(day.date);
    }
  };

  const changeMonth = (direction) => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      if (direction === "prev") {
        newDate.setMonth(newDate.getMonth() - 1);
      } else {
        newDate.setMonth(newDate.getMonth() + 1);
      }
      return newDate;
    });
  };

  const formatDate = (date) => {
    if (!date) return "";
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  const monthNames = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];

  const monthYear = `${
    monthNames[currentDate.getMonth()]
  } ${currentDate.getFullYear()}`;

  return (
    <SCalendar className="pop-new-card__calendar calendar">
      <CalendarTtl className="calendar__ttl subttl">Даты</CalendarTtl>
      <CalendarBlock className="calendar__block">
        <CalendarNav className="calendar__nav">
          <CalendarMonth className="calendar__month">{monthYear}</CalendarMonth>
          <NavActions className="nav__actions">
            <NavAction
              className="nav__action"
              data-action="prev"
              onClick={() => changeMonth("prev")}
            >
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="11"
                viewBox="0 0 6 11"
              >
                <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
              </Svg>
            </NavAction>
            <NavAction
              className="nav__action"
              data-action="next"
              onClick={() => changeMonth("next")}
            >
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="11"
                viewBox="0 0 6 11"
              >
                <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
              </Svg>
            </NavAction>
          </NavActions>
        </CalendarNav>
        <CalendarContent className="calendar__content">
          <CalendarDAysNames className="calendar__days-names">
            <CalendarDAysName className="calendar__day-name">
              пн
            </CalendarDAysName>
            <CalendarDAysName className="calendar__day-name">
              вт
            </CalendarDAysName>
            <CalendarDAysName className="calendar__day-name">
              ср
            </CalendarDAysName>
            <CalendarDAysName className="calendar__day-name">
              чт
            </CalendarDAysName>
            <CalendarDAysName className="calendar__day-name">
              пт
            </CalendarDAysName>
            <CalendarDAysName className="calendar__day-name -weekend-">
              сб
            </CalendarDAysName>
            <CalendarDAysName className="calendar__day-name -weekend-">
              вс
            </CalendarDAysName>
          </CalendarDAysNames>
          <CalendarCells className="calendar__cells">
            {days.map((day, index) => {
              const isSelected =
                selectedDate &&
                day.date.getDate() === selectedDate.getDate() &&
                day.date.getMonth() === selectedDate.getMonth() &&
                day.date.getFullYear() === selectedDate.getFullYear();

              return (
                <CalendarCell
                  key={index}
                  className={`
                    calendar__cell 
                    ${day.isCurrentMonth ? "_cell-day" : "_other-month"} 
                    ${day.isWeekend ? "_weekend" : ""} 
                    ${day.isToday ? "_current" : ""}
                    ${isSelected ? "_selected" : ""}
                  `}
                  onClick={() => handleDayClick(day)}
                >
                  {day.day}
                </CalendarCell>
              );
            })}
          </CalendarCells>
        </CalendarContent>

        <input
          type="hidden"
          id="datepick_value"
          value={formatDate(selectedDate)}
        />
        <CalendarPeriod className="calendar__period">
          <CalendarP className="calendar__p date-end">
            {selectedDate
              ? `Выбранная дата: ${formatDate(selectedDate)}`
              : "Выберите срок исполнения"}
            <CalendarSpan className="date-control"></CalendarSpan>.
          </CalendarP>
        </CalendarPeriod>
      </CalendarBlock>
    </SCalendar>
  );
}
