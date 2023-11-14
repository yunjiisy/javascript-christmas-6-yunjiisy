import CategoryOrder from "./CategoryOrder.js";

import {
  AppetizerMenu,
  MainMenu,
  DessertMenu,
  BeverageMenu,
} from "../Menu/Menu.js";
import CategoryOrder from "./CategoryOrder.js";

export default class Orders {
  #orders = {};

  constructor() {
    this.menuCategories = {
      appetizer: new AppetizerMenu(),
      main: new MainMenu(),
      dessert: new DessertMenu(),
      beverage: new BeverageMenu(),
    };

    Object.keys(this.menuCategories).forEach((category) => {
      this.#orders[category] = new CategoryOrder(category);
    });
  }

  validateinputOrders(inputOrders) {
    inputOrders.forEach((inputOrder) => {
      const itemDetails = inputOrder.split("-");
      if (itemDetails.length !== 2) {
        throw new Error(
          "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요."
        );
      }
    });
  }

  parseOrders(orderList) {
    const parsedOrders = [];
    orderList.forEach((orderItem) => {
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
        throw new Error(
          "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요."
        );
      }
    });
  }

  validateQuantity(parsedOrders) {
    parsedOrders.forEach((parsedOrder) => {
      if (!Number.isInteger(parsedOrder.quantity)) {
        throw new Error(
          "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요."
        );
      }
    });
  }

  validateMaxQuantity(parsedOrders) {
    let totalQuantity = 0;
    parsedOrders.forEach((parsedOrder) => {
      totalQuantity += parsedOrder.quantity;
    });
    if (totalQuantity > 20) {
      throw new Error("[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.");
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
      throw new Error("[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.");
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
}
