import DateOfMonth from "./DateOfMonth.js";

class EventCalendar {
  constructor(date) {
    this.eventCalendar = {};
    this.makeDateInfo(date);
  }

  makeDateInfo(date) {
    const FixedYear = 2023;
    const FixedMonth = 11;
    const day = new Date(FixedYear, FixedMonth, date).getDay();
    this.eventCalendar[date] = new DateOfMonth(day, date);
  }

  GetDateInfo(date) {
    return this.eventCalendar[date];
  }
}

export default EventCalendar;
