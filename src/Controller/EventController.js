import EventHandler from "../Model/Event/EventHandler.js";
import OutputView from "../View/OutputView.js";

class EventController {
  eventPlan(orders, visitDate) {
    const eventHandler = new EventHandler(orders, visitDate);
    OutputView.printGiftMenu(eventHandler.getGiftMenu());
    eventHandler.makeBenefitList();
    OutputView.printBenefitList(eventHandler.getBenefitList());
    OutputView.printTotalBenefitAmount(-eventHandler.calculateBenefitAmount());
    OutputView.printPayAmount(eventHandler.calculatePayAmount());
    OutputView.printBadge(eventHandler.getBadge());
  }
}

export default EventController;
