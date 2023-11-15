import DateOfMonth from "../src/Model/Calendar/DateOfMonth";
import DiscountGenerator from "../src/Model/Event/DiscountGenerator";
import Orders from "../src/Model/Order/Orders";

jest.mock(
  "../src/Model/Order/Orders",
  () =>
    class OrdersMock {
      calculateTotalAmount() {
        return 12000;
      }
    }
);
const ordersMock = new Orders();

describe("DiscountGenerator class test", () => {
  test("방문일자가 3일인 경우 옳바른 갯수의 할인정책이 추가된다.", () => {
    const dateInfoMock = new DateOfMonth(3, 27);
    const discountGenerator = new DiscountGenerator();
    const discounts = discountGenerator.generateDiscount(
      dateInfoMock,
      ordersMock
    );

    expect(discounts.discountPolicies.length).toEqual(1);
  });

  test("방문일자가 4일인 경우 옳바른 갯수의 할인정책이 추가된다.", () => {
    const dateInfoMock = new DateOfMonth(1, 4);
    const discountGenerator = new DiscountGenerator();
    const discounts = discountGenerator.generateDiscount(
      dateInfoMock,
      ordersMock
    );

    expect(discounts.discountPolicies.length).toEqual(2);
  });

  test("방문일자가 24일인 경우 옳바른 갯수의 할인정책이 추가된다.", () => {
    const dateInfoMock = new DateOfMonth(0, 24);
    const discountGenerator = new DiscountGenerator();
    const discounts = discountGenerator.generateDiscount(
      dateInfoMock,
      ordersMock
    );

    expect(discounts.discountPolicies.length).toEqual(3);
  });
});
