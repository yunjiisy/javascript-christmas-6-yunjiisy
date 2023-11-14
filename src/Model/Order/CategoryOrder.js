class CategoryOrder {
  constructor(category) {
    this.categoryOrder = {};
  }

  addOrder(menuItem, quantity) {
    this.categoryOrder[menuItem] = quantity;
  }
}

export default CategoryOrder;
