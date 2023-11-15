const MIN_ORDER_AMOUNT = 10000;

class Discounts {
  constructor(dateInfo, orders, discountPolicies) {
    this.discountPolicies = [];

    if (orders.calculateTotalAmount() >= MIN_ORDER_AMOUNT) {
      this.discountPolicies = discountPolicies.map(
        (Policy) => new Policy(dateInfo, orders)
      );
    }
  }

  calculateTotalDiscountAmount() {
    return this.discountPolicies.reduce(
      (total, discount) => total + discount.calculateDiscountAmount(),
      0
    );
  }
}

export default Discounts;
