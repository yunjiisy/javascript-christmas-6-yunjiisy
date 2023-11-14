import {
  AppetizerMenu,
  MainMenu,
  DessertMenu,
  BeverageMenu,
} from "../Menu/Menu.js";
import CategoryOrder from "./CategoryOrder.js";

export default class Orders {
  constructor() {
    // 의존성 주입으로 바꾸기

    this.menuCategories = {
      appetizer: new AppetizerMenu(),
      main: new MainMenu(),
      dessert: new DessertMenu(),
      beverage: new BeverageMenu(),
    };

    this.orders = {
      appetizer: {},
      main: {},
      dessert: {},
      beverage: {},
    };
    this.orders = {};
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

  findCategory(menuItem) {
    for (const [category, menu] of Object.entries(this.menuCategories)) {
      if (menu.isValidItem(menuItem)) {
        return category;
      }
    }
  }
}
