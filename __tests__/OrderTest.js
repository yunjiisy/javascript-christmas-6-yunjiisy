import {
  AppetizerMenu,
  MainMenu,
  DessertMenu,
  BeverageMenu,
} from "../src/Model/Menu/Menu";
import Orders from "../src/Model/Order/Order";

describe("Orders class test", () => {
  let orders;

  beforeEach(() => {
    const appetizerMenu = new AppetizerMenu();
    const mainMenu = new MainMenu();
    const dessertMenu = new DessertMenu();
    const beverageMenu = new BeverageMenu();

    orders = new Orders(appetizerMenu, mainMenu, dessertMenu, beverageMenu);
  });

  describe("getValidOrder test", () => {
    test("유효한 parsed order list를 만든다.", () => {
      const inputOrder = [
        "양송이수프-1",
        "티본스테이크-1",
        "초코케이크-1",
        "샴페인-1",
      ];
      const parsedOrders = orders.getValidOrder(inputOrder);

      expect(parsedOrders).toEqual([
        { menuItem: "양송이수프", quantity: 1 },
        { menuItem: "티본스테이크", quantity: 1 },
        { menuItem: "초코케이크", quantity: 1 },
        { menuItem: "샴페인", quantity: 1 },
      ]);
    });

    test("메뉴판에 없는 메뉴를 주문하면 예외가 발생한다.", () => {
      const inputOrder = ["양송이수프-1", "티본스테이크-1", "환타-2"];
      expect(() => orders.getValidOrder(inputOrder)).toThrowError(
        "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요."
      );
    });

    test("자연수가 아닌 주문 수량을 넣으면 에외가 발생한다.", () => {
      const inputOrder = ["양송이수프-a", "티본스테이크-1"];
      expect(() => orders.getValidOrder(inputOrder)).toThrowError(
        "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요."
      );
    });

    test("최대 수량을 초과하여 주문하면 예외가 발생한다.", () => {
      const inputOrder = [
        "양송이수프-5",
        "티본스테이크-5",
        "초코케이크-10",
        "샴페인-1",
      ];
      expect(() => orders.getValidOrder(inputOrder)).toThrowError(
        "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요."
      );
    });

    test("음료만 주문하면 예외가 방생한다.", () => {
      const inputOrder = ["레드와인-2", "샴페인-1"];
      expect(() => orders.getValidOrder(inputOrder)).toThrowError(
        "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요."
      );
    });

    describe("addOrders test", () => {
      test("category orders별로 주문을 orders에 add한다", () => {
        const parsedOrders = [
          { menuItem: "양송이수프", quantity: 1 },
          { menuItem: "티본스테이크", quantity: 2 },
          { menuItem: "초코케이크", quantity: 3 },
          { menuItem: "샴페인", quantity: 4 },
        ];

        orders.addOrders(parsedOrders);

        expect(orders.getOrders().appetizer.getCategorOrderDetails()).toEqual([
          "양송이수프 1개",
        ]);

        expect(orders.getOrders().main.getCategorOrderDetails()).toEqual([
          "티본스테이크 2개",
        ]);

        expect(orders.getOrders().dessert.getCategorOrderDetails()).toEqual([
          "초코케이크 3개",
        ]);

        expect(orders.getOrders().beverage.getCategorOrderDetails()).toEqual([
          "샴페인 4개",
        ]);
      });
    });

    describe("findCategory test", () => {
      test("메뉴마다 옳바른 카테고리를 찾아 리턴한다.", () => {
        const menuItem = "양송이수프";
        const category = orders.findCategory(menuItem);

        expect(category).toEqual("appetizer");
      });
    });

    describe("getOrderDetails test", () => {
      test("주문한 메뉴를 기반으로 옳바른 형식의 주문 내역을 리턴한다", () => {
        const inputOrder = [
          "양송이수프-1",
          "티본스테이크-1",
          "초코케이크-1",
          "샴페인-1",
        ];
        const parsedOrders = orders.getValidOrder(inputOrder);
        orders.addOrders(parsedOrders);

        const orderDetails = orders.getOrderDetails();

        expect(orderDetails).toEqual(
          "양송이수프 1개\n티본스테이크 1개\n초코케이크 1개\n샴페인 1개"
        );
      });
    });
  });
});
