import EventCalendar from "../Calendar/EventCalendar.js";
import Badge from "./Badge.js";
import DiscountGenerator from "./DiscountGenerator.js";
import GiftMenu from "./Gift.js";
import { MESSAGE } from "../../Constants/Constants.js";

class EventHandler {
  #benefitList;

  constructor(orders, visitDate) {
    this.#benefitList = [];
    this.eventCalendar = new EventCalendar(visitDate);
    this.dateInfo = this.eventCalendar.GetDateInfo(visitDate);
    this.orders = orders;
    const discountGenerator = new DiscountGenerator();
    this.discount = discountGenerator.generateDiscount(
      this.dateInfo,
      this.orders
    );
    this.giftMenu = new GiftMenu(this.orders.calculateTotalAmount());
    this.badge = new Badge(this.calculateBenefitAmount());
  }

  getGiftMenu() {
    if (this.giftMenu.getGiftMenu().length !== 0) {
      return `${this.giftMenu.getGiftMenu()} ${
        this.giftMenu.getGiftMenu().length
      }개`;
    }
    return MESSAGE.NOTHING;
  }

  getBadge() {
    return this.badge.getBadge();
  }

  getBenefitList() {
    if (this.#benefitList.length === 0) {
      return MESSAGE.NOTHING;
    }

    return this.#benefitList.join("\n");
  }

  makeBenefitList() {
    this.discount.discountPolicies.forEach((policy) => {
      this.#benefitList.push(
        `${policy.getDiscountName()}: -${policy.calculateDiscountAmount()}원`
      );
    });
    if (this.giftMenu.getGiftMenu().length !== 0) {
      this.#benefitList.push(
        `증정 이벤트: -${this.giftMenu.getGiftMenuPrice()}원`
      );
    }
  }

  calculatePayAmount() {
    return (
      this.orders.calculateTotalAmount() -
      this.discount.calculateTotalDiscountAmount()
    );
  }

  calculateBenefitAmount() {
    return (
      this.discount.calculateTotalDiscountAmount() +
      this.giftMenu.getGiftMenuPrice()
    );
  }
}
export default EventHandler;
