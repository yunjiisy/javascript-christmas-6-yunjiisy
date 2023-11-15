import { BeverageMenu } from "../Menu/Menu.js";

class GiftMenu {
  #giftMenu = [];

  #giftMenuPrice = 0;

  constructor(totalAmount) {
    this.beverageMenu = new BeverageMenu();
    this.addGiftIfEligible(totalAmount);
  }

  addGiftIfEligible(totalAmount) {
    if (totalAmount >= 120000) {
      this.#giftMenu.push("샴페인");
      this.#giftMenuPrice = this.beverageMenu.getMenu()[this.#giftMenu];
    }
  }

  getGiftMenuPrice() {
    return this.#giftMenuPrice;
  }

  getGiftMenu() {
    return this.#giftMenu;
  }
}
export default GiftMenu;
