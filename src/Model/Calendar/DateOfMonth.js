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
    if (this.day === 5 || this.day === 6) {
      this.#dateInfo.week = "weekend";
    }
  }

  isWeekDay() {
    if (this.day >= 0 && this.day <= 4) {
      this.#dateInfo.week = "weekday";
    }
  }

  isChristmasDday() {
    if (this.date >= 1 && this.date <= 25) {
      this.#dateInfo.christmasDday = 25 - this.date;
      return true;
    }
    return false;
  }

  isSpecialDay() {
    if ([3, 10, 17, 24, 25, 31].includes(this.date)) {
      this.#dateInfo.specialDay = "star";
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
