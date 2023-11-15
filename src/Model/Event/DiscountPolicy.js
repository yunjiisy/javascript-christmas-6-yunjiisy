import { MESSAGE, DATE_INFO, DISCOUNT_AMOUNT } from "../../Constants/Constants";
export class DiscountPolicy {
  constructor(dateInfo, orders) {
    this.dateInfo = dateInfo;
    this.orders = orders;
  }

  calculateDiscountAmount() {
    return 0;
  }

  getDiscountName() {
    return "";
  }
}

export class ChristmasDdayDiscountPolicy extends DiscountPolicy {
  calculateDiscountAmount() {
    const christmasDday = this.dateInfo.getSpecificInfo(
      DATE_INFO.CHRISTMAS_DDAY
    );
    return (
      (24 - christmasDday) * DISCOUNT_AMOUNT.DDAY_INCREASE +
      DISCOUNT_AMOUNT.DDAY_BASE
    );
  }

  getDiscountName() {
    return MESSAGE.CHRISTMAS_DDAY;
  }
}

export class WeekdayDiscountPolicy extends DiscountPolicy {
  calculateDiscountAmount() {
    const dessertQuantity = this.orders
      .getOrders()
      .dessert.getTotalQuantityPerCategory();
    return dessertQuantity * DISCOUNT_AMOUNT.WEEKDAY;
  }

  getDiscountName() {
    return MESSAGE.WEEKDAY;
  }
}

export class WeekendDiscountPolicy extends DiscountPolicy {
  calculateDiscountAmount() {
    const mainQuantity = this.orders
      .getOrders()
      .main.getTotalQuantityPerCategory();
    return mainQuantity * DISCOUNT_AMOUNT.WEEKEND;
  }

  getDiscountName() {
    return MESSAGE.WEEKEND;
  }
}

export class SpecialDayDiscountPolicy extends DiscountPolicy {
  calculateDiscountAmount() {
    return DISCOUNT_AMOUNT.SPECIALDAY;
  }

  getDiscountName() {
    return MESSAGE.SPECIAL_DAY;
  }
}
