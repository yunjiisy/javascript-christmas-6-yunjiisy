import CategoryOrder from "../src/Model/Order/CategoryOrder";

describe("CategoryOrder class test", () => {
  test("주문을 add한다.", () => {
    const categoryOrder = new CategoryOrder();

    categoryOrder.addOrder("양송이스프", 3);

    expect(categoryOrder.categoryOrder).toEqual({ 양송이스프: 3 });
  });

  test("옳바른 orderDetails를 get한다,", () => {
    const categoryOrder = new CategoryOrder();
    categoryOrder.addOrder("타파스", 2);
    categoryOrder.addOrder("양송이스프", 1);

    const orderDetails = categoryOrder.getCategorOrderDetails();

    expect(orderDetails).toEqual(["타파스 2개", "양송이스프 1개"]);
  });

  test("옳바른 총 주문 금액을 구한다.", () => {
    const categoryOrder = new CategoryOrder();
    categoryOrder.addOrder("타파스", 2);
    categoryOrder.addOrder("양송이스프", 1);

    const menu = {
      타파스: 5500,
      양송이스프: 6000,
    };

    const totalAmount = categoryOrder.calculateTotalAmountPerCategory(menu);
    expect(totalAmount).toBe(17000);
  });

  test("옳바른 총 주문 수량을 구한다.", () => {
    const categoryOrder = new CategoryOrder();
    categoryOrder.addOrder("타파스", 2);
    categoryOrder.addOrder("양송이스프", 1);

    const totalQuantity = categoryOrder.getTotalQuantityPerCategory();

    expect(totalQuantity).toBe(3);
  });
});
