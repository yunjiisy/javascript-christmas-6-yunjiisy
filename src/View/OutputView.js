import { Console } from "@woowacourse/mission-utils";

const OutputView = {
  printEventBenefitsPreview() {
    Console.print("12월 3일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!");
  },

  printMenu(orderDetails) {
    Console.print("\n<주문 메뉴>");
    Console.print(orderDetails);
  },

  printTotalAmount(totalAmount) {
    Console.print("\n<할인 전 총주문 금액>");
    Console.print(`${totalAmount}원`);
  },

  printGiftMenu(giftMenu) {
    Console.print("\n<증정 메뉴>");
    Console.print(`${giftMenu}`);
  },

  printBenefitList(benefitList) {
    Console.print("\n<혜택 내역>");
    Console.print(benefitList);
  },

  printTotalBenefitAmount(benefitTotalAmount) {
    Console.print("\n<총혜택 금액>");
    Console.print(`${benefitTotalAmount}원`);
  },

  printPayAmount(payAmount) {
    Console.print("\n<할인 후 예상 결제 금액>");
    Console.print(`${payAmount}원`);
  },

  printBadge(badge) {
    Console.print("\n<12월 이벤트 배지>");
    Console.print(badge);
  },
};

export default OutputView;
