export class DiscountPolicy {
  constructor(dateInfo, orders) {
    this.dateInfo = dateInfo;
    this.orders = orders;
  }

  calculateDiscountAmount() {
    return 0;
  }
}

export class ChristmasDdayDiscountPolicy extends DiscountPolicy {
  calculateDiscountAmount() {
    const christmasDday = this.dateInfo.getSpecificInfo("christmasDday");
    return (24 - christmasDday) * 100 + 1000;
  }
}

export class WeekdayDiscountPolicy extends DiscountPolicy {
  calculateDiscountAmount() {
    const dessertQuantity = this.orders
      .getOrders()
      .dessert.getTotalQuantityPerCategory();
    return dessertQuantity * 2023;
  }
}

export class WeekendDiscountPolicy extends DiscountPolicy {
  calculateDiscountAmount() {
    const mainQuantity = this.orders
      .getOrders()
      .main.getTotalQuantityPerCategory();
    return mainQuantity * 2023;
  }
}

export class SpecialDayDiscountPolicy extends DiscountPolicy {
  calculateDiscountAmount() {
    return 1000;
  }
}
