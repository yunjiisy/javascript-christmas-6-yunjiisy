import GiftMenu from "../src/Model/Event/Gift";
jest.mock("../src/Model/Menu/Menu.js", () => {
  return {
    BeverageMenu: class {
      getMenu() {
        return {
          샴페인: 50000,
        };
      }
    },
  };
});

describe("GiftMenu class test", () => {
  test("eligible 한 경우 증정품을 추가한다.", () => {
    const totalAmountEligible = 120000;
    const giftMenu = new GiftMenu(totalAmountEligible);

    const actualGiftMenu = giftMenu.getGiftMenu();

    expect(actualGiftMenu).toEqual(["샴페인"]);
  });

  test("eligible하지 않으면 증정품을 추가하지 않는다.", () => {
    const totalAmountNotEligible = 100000;
    const giftMenu = new GiftMenu(totalAmountNotEligible);

    const actualGiftMenu = giftMenu.getGiftMenu();

    expect(actualGiftMenu).toEqual([]);
  });

  test("옳바른 증정품 가격을 get한다.", () => {
    const totalAmountEligible = 120000;
    const giftMenu = new GiftMenu(totalAmountEligible);

    const actualGiftMenuPrice = giftMenu.getGiftMenuPrice();

    expect(actualGiftMenuPrice).toBe(50000);
  });
});
