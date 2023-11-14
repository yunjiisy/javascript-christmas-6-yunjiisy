class CategoryOrder {
  constructor(category) {
    this.categoryOrder = {};
  }

  addOrder(menuItem, quantity) {
    this.categoryOrder[menuItem] = quantity;
  }

  getCategorOrderDetails() {
    const CategorOrderDetails = [];
    for (const menuName in this.categoryOrder) {
      CategorOrderDetails.push(`${menuName} ${this.categoryOrder[menuName]}개`);
    }
    return CategorOrderDetails;
  }

  calculateTotalAmountPerCategory(menu) {
    let categoryTotal = 0;
    for (const menuName in this.categoryOrder) {
      categoryTotal += menu[menuName] * this.categoryOrder[menuName];
    }
    return categoryTotal;
  }
}

export default CategoryOrder;
