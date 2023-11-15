import { DATE_INFO, DAY, DATE } from "../../Constants/Constants";

class DateOfMonth {
  #dateInfo = {};

  constructor(day, date) {
    this.#dateInfo.day = day;
    this.day = day;
    this.date = date;
    this.addDateInfo();
  }

  addDateInfo() {
    this.isWeekDay();
    this.isWeekend();
    this.isChristmasDday();
    this.isSpecialDay();
  }

  isWeekend() {
    if (this.day === DAY.FRIDAY || this.day === DAY.SATURDAY) {
      this.#dateInfo.week = DATE_INFO.WEEKEND;
    }
  }

  isWeekDay() {
    if (this.day >= DAY.SUNDAY && this.day <= DAY.THURSDAY) {
      this.#dateInfo.week = DATE_INFO.WEEKDAY;
    }
  }

  isChristmasDday() {
    if (this.date >= DATE.FIRST && this.date <= DATE.CHRISTMAS) {
      this.#dateInfo.christmasDday = DATE.CHRISTMAS - this.date;
      return true;
    }
    return false;
  }

  isSpecialDay() {
    if (DATE.SPECIAL_DATES.includes(this.date)) {
      this.#dateInfo.specialDay = DATE_INFO.STAR;
      return true;
    }
    this.#dateInfo.specialDay = "";

    return false;
  }

  getSpecificInfo(key) {
    return this.#dateInfo[key];
  }
}

export default DateOfMonth;
