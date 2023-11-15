import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../Constants/Constants";

const OutputView = {
  printEventBenefitsPreview() {
    Console.print(MESSAGE.EVENT_OVERVIEW);
  },

  printMenu(orderDetails) {
    Console.print(MESSAGE.ORDER_MENU);
    Console.print(orderDetails);
  },

  printTotalAmount(totalAmount) {
    Console.print(MESSAGE.TOTAL_AMOUNT);
    Console.print(`${totalAmount}원`);
  },

  printGiftMenu(giftMenu) {
    Console.print(MESSAGE.GIFT_MENU);
    Console.print(`${giftMenu}`);
  },

  printBenefitList(benefitList) {
    Console.print(MESSAGE.BENEFIT_LIST);
    Console.print(benefitList);
  },

  printTotalBenefitAmount(benefitTotalAmount) {
    Console.print(MESSAGE.BENEFIT_AMOUNT);
    Console.print(`${benefitTotalAmount}원`);
  },

  printPayAmount(payAmount) {
    Console.print(MESSAGE.PAY_AMOUNT);
    Console.print(`${payAmount}원`);
  },

  printBadge(badge) {
    Console.print(MESSAGE.BADGE);
    Console.print(badge);
  },
};

export default OutputView;
