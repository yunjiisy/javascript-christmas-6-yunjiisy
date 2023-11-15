export class DiscountPolicy {
  constructor(dateInfo, orders) {
    this.dateInfo = dateInfo;
    this.orders = orders;
  }

  calculateDiscountAmount() {
    return 0;
  }
}
