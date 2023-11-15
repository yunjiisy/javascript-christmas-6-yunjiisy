import EventHandler from "../src/Model/Event/EventHandler";
import Orders from "../src/Model/Order/Orders";

jest.mock("../src/Model/Order/Orders", () => {
  return class OrdersMock {
    calculateTotalAmount() {
      return 100000;
    }
  };
});

describe("EventHandler class test", () => {
  const visitDate = new Date();
  const ordersMock = new Orders();

  test("할인이 적용된 혜택금액과 결제금액을 구한다.", () => {
    const eventHandler = new EventHandler(ordersMock, visitDate);

    jest
      .spyOn(eventHandler.discount, "calculateTotalDiscountAmount")
      .mockReturnValue(20000);

    const payAmount = eventHandler.calculatePayAmount();
    const benefitAmount = eventHandler.calculateBenefitAmount();

    expect(payAmount).toBe(80000);
    expect(benefitAmount).toBe(20000);
  });

  test("할인과 증정품이 적용된 혜택금액과 결제금액을 구한다.", () => {
    const eventHandler = new EventHandler(ordersMock, visitDate);

    jest
      .spyOn(eventHandler.giftMenu, "getGiftMenuPrice")
      .mockReturnValue(25000);

    const payAmount = eventHandler.calculatePayAmount();
    const benefitAmount = eventHandler.calculateBenefitAmount();

    expect(payAmount).toBe(100000);
    expect(benefitAmount).toBe(25000);
  });

  test("증정품이 적용된 혜택금액과 결제금액을 구한다", () => {
    const eventHandler = new EventHandler(ordersMock, visitDate);

    jest
      .spyOn(eventHandler.discount, "calculateTotalDiscountAmount")
      .mockReturnValue(20000);
    jest
      .spyOn(eventHandler.giftMenu, "getGiftMenuPrice")
      .mockReturnValue(25000);

    const payAmount = eventHandler.calculatePayAmount();
    const benefitAmount = eventHandler.calculateBenefitAmount();

    expect(payAmount).toBe(80000);
    expect(benefitAmount).toBe(45000);
  });

  test("혜택이 없을 경우 없음을 리턴한다.", () => {
    const eventHandler = new EventHandler(ordersMock, visitDate);

    const benefitList = eventHandler.getBenefitList();

    expect(benefitList).toBe("없음");
  });

  test("증점품이 존재하면 증점품과 갯수가 적힌 스트링을 리턴한다.", () => {
    const eventHandler = new EventHandler(ordersMock, visitDate);

    jest
      .spyOn(eventHandler.giftMenu, "getGiftMenu")
      .mockReturnValue(["샴페인"]);

    const giftMenuDetails = eventHandler.getGiftMenu();

    expect(giftMenuDetails).toBe("샴페인 1개");
  });

  test("뱃지를 리턴한다.", () => {
    const eventHandler = new EventHandler(ordersMock, visitDate);

    jest.spyOn(eventHandler.badge, "getBadge").mockReturnValue("산타");

    const badgeDetails = eventHandler.getBadge();

    expect(badgeDetails).toBe("산타");
  });
});
