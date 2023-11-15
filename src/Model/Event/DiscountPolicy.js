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
    const christmasDday = this.dateInfo.getSpecificInfo("christmasDday");
    return (24 - christmasDday) * 100 + 1000;
  }

  getDiscountName() {
    return "크리스마스 디데이 할인";
  }
}

export class WeekdayDiscountPolicy extends DiscountPolicy {
  calculateDiscountAmount() {
    const dessertQuantity = this.orders
      .getOrders()
      .dessert.getTotalQuantityPerCategory();
    return dessertQuantity * 2023;
  }

  getDiscountName() {
    return "평일 할인";
  }
}

export class WeekendDiscountPolicy extends DiscountPolicy {
  calculateDiscountAmount() {
    const mainQuantity = this.orders
      .getOrders()
      .main.getTotalQuantityPerCategory();
    return mainQuantity * 2023;
  }

  getDiscountName() {
    return "주말 할인";
  }
}

export class SpecialDayDiscountPolicy extends DiscountPolicy {
  calculateDiscountAmount() {
    return 1000;
  }

  getDiscountName() {
    return "특별 할인";
  }
}
