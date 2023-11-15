import { Console } from "@woowacourse/mission-utils";
import InputView from "../View/InputView.js";
import OutputView from "../View/OutputView.js";
import Orders from "../Model/Order/Orders.js";
import VisitDate from "../Model/Calendar/VisitDate.js";
import EventController from "./EventController.js";
import {
  AppetizerMenu,
  BeverageMenu,
  DessertMenu,
  MainMenu,
} from "../Model/Menu/Menu.js";

class OrderController {
  constructor() {
    this.order = new Orders(
      new AppetizerMenu(),
      new MainMenu(),
      new DessertMenu(),
      new BeverageMenu()
    );
  }

  async start() {
    const visitDate = await this.getVisitDate();
    const parsedOrders = await this.getOrder();

    this.order.addOrders(parsedOrders);

    this.showOrderInfo();

    this.showEventPlan(visitDate);
  }

  async getVisitDate() {
    try {
      this.visitDate = new VisitDate();
      const inputVisitDate = await InputView.readDate();
      return this.visitDate.getValidInputDate(inputVisitDate);
    } catch (error) {
      Console.print(error.message);
      return this.getVisitDate();
    }
  }

  async getOrder() {
    try {
      const orderString = await InputView.readOrder();
      return this.order.getValidOrder(orderString);
    } catch (error) {
      Console.print(error.message);
      return this.getOrder();
    }
  }

  showOrderInfo() {
    OutputView.printMenu(this.order.getOrderDetails());
    OutputView.printTotalAmount(this.order.calculateTotalAmount());
  }

  showEventPlan(visitDate) {
    const eventController = new EventController();
    eventController.eventPlan(this.order, visitDate);
  }
}

export default OrderController;
const startOrder = new OrderController();
startOrder.start();
