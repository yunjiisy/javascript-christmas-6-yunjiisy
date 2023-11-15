import CategoryOrder from "./CategoryOrder.js";
import { ERROR } from "../../Constants/Constants.js";

export default class Orders {
  #orders = {};

  constructor(appetizerMenu, mainMenu, dessertMenu, beverageMenu) {
    this.menuCategories = {
      appetizer: appetizerMenu,
      main: mainMenu,
      dessert: dessertMenu,
      beverage: beverageMenu,
    };

    Object.keys(this.menuCategories).forEach((category) => {
      this.#orders[category] = new CategoryOrder(category);
    });
  }

  getOrders() {
    return this.#orders;
  }

  getValidOrder(inputOrder) {
    this.validateinputOrders(inputOrder);
    const parsedOrders = this.parseOrders(inputOrder);
    this.validateMenu(parsedOrders);
    this.validateQuantity(parsedOrders);
    this.validateMaxQuantity(parsedOrders);
    this.validateOnlyBeverage(parsedOrders);
    return parsedOrders;
  }

  validateinputOrders(inputOrders) {
    inputOrders.forEach((inputOrder) => {
      const itemDetails = inputOrder.split("-");
      if (itemDetails.length !== 2) {
        throw new Error(ERROR.INVALID_ORDER);
      }
    });
  }

  parseOrders(inputOrders) {
    const parsedOrders = [];
    inputOrders.forEach((orderItem) => {
      const [menuItem, quantity] = orderItem.split("-");
      const parsedOrder = {
        menuItem: menuItem.trim(),
        quantity: parseInt(quantity, 10),
      };
      parsedOrders.push(parsedOrder);
    });
    return parsedOrders;
  }

  validateMenu(parsedOrders) {
    parsedOrders.forEach((parsedOrder) => {
      const category = this.findCategory(parsedOrder.menuItem);
      if (
        !category ||
        !this.menuCategories[category].isValidItem(parsedOrder.menuItem)
      ) {
        throw new Error(ERROR.INVALID_ORDER);
      }
    });
  }

  validateQuantity(parsedOrders) {
    parsedOrders.forEach((parsedOrder) => {
      if (!Number.isInteger(parsedOrder.quantity)) {
        throw new Error(ERROR.INVALID_ORDER);
      }
    });
  }

  validateMaxQuantity(parsedOrders) {
    let totalQuantity = 0;
    parsedOrders.forEach((parsedOrder) => {
      totalQuantity += parsedOrder.quantity;
    });
    if (totalQuantity > 20) {
      throw new Error(ERROR.INVALID_ORDER);
    }
  }

  validateOnlyBeverage(parsedOrders) {
    let hasNonBeverageOrder = false;
    parsedOrders.forEach((parsedOrder) => {
      const category = this.findCategory(parsedOrder.menuItem);

      if (category !== "beverage") {
        hasNonBeverageOrder = true;
      }
    });
    if (!hasNonBeverageOrder) {
      throw new Error(ERROR.INVALID_ORDER);
    }
  }

  findCategory(menuItem) {
    for (const [category, menu] of Object.entries(this.menuCategories)) {
      if (menu.isValidItem(menuItem)) {
        return category;
      }
    }
  }

  addOrders(parsedOrders) {
    parsedOrders.forEach(({ menuItem, quantity }) => {
      const category = this.findCategory(menuItem);

      this.#orders[category].addOrder(menuItem, quantity);
    });
  }

  getOrderDetails() {
    const orderDetails = [];
    Object.entries(this.#orders).forEach(([category, categoryOrder]) => {
      const categoryOrderDetails = categoryOrder.getCategorOrderDetails();
      if (categoryOrderDetails.length > 0) {
        orderDetails.push(categoryOrderDetails.join("\n"));
      }
    });
    return orderDetails.join("\n");
  }

  calculateTotalAmount() {
    let total = 0;

    Object.keys(this.menuCategories).forEach((category) => {
      total += this.#orders[category].calculateTotalAmountPerCategory(
        this.menuCategories[category].getMenu()
      );
    });

    return total;
  }
}
