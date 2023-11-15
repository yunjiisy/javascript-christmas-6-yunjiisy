class Discounts {
  constructor(dateInfo, orders, discountPolicies) {
    this.discountPolicies = [];

    if (orders.calculateTotalAmount() >= 10000) {
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
