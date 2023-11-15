class Discounts {
  constructor(dateInfo, orders, discountPolicies) {
    this.discountPolicies = [];

    if (orders.calculateTotalAmount() >= 10000) {
      this.discountPolicies = discountPolicies.map(
        (Policy) => new Policy(dateInfo, orders)
      );
    }
  }
}

export default Discounts;
