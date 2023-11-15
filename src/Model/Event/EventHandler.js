import EventCalendar from "../Calendar/EventCalendar.js";
import Badge from "./Badge.js";
import DiscountGenerator from "./DiscountGenerator.js";
import GiftMenu from "./Gift.js";

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
    return "없음";
  }
}
export default EventHandler;
