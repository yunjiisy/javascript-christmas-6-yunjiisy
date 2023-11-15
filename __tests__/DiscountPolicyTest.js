import {
  ChristmasDdayDiscountPolicy,
  SpecialDayDiscountPolicy,
  WeekdayDiscountPolicy,
  WeekendDiscountPolicy,
} from "../src/Model/Event/DiscountPolicy";

describe("DiscountPolicies test", () => {
  describe("ChristmasDdayDiscountPolicy class test", () => {
    test("할인금액을 옳게 계산하여 리턴하고 해당 할인정책 이름을 리턴한다.", () => {
      const dateInfoMock = {
        getSpecificInfo: jest.fn(() => 20),
      };
      const discountPolicy = new ChristmasDdayDiscountPolicy(dateInfoMock, {});

      expect(discountPolicy.calculateDiscountAmount()).toEqual(1400);
      expect(discountPolicy.getDiscountName()).toEqual(
        "크리스마스 디데이 할인"
      );
    });
  });

  describe("WeekdayDiscountPolicy class test", () => {
    test("할인금액을 옳게 계산하여 리턴하고 해당 할인정책 이름을 리턴한다.", () => {
      const ordersMock = {
        getOrders: jest.fn(() => ({
          dessert: {
            getTotalQuantityPerCategory: jest.fn(() => 3), // Assuming total dessert quantity is 3
          },
        })),
      };
      const discountPolicy = new WeekdayDiscountPolicy({}, ordersMock);

      expect(discountPolicy.calculateDiscountAmount()).toEqual(6069); // 3 * 2023 = 6069
      expect(discountPolicy.getDiscountName()).toEqual("평일 할인");
    });
  });

  describe("WeekendDiscountPolicy class test", () => {
    test("할인금액을 옳게 계산하여 리턴하고 해당 할인정책 이름을 리턴한다.", () => {
      const ordersMock = {
        getOrders: jest.fn(() => ({
          main: {
            getTotalQuantityPerCategory: jest.fn(() => 2), // Assuming total main quantity is 2
          },
        })),
      };
      const discountPolicy = new WeekendDiscountPolicy({}, ordersMock);

      expect(discountPolicy.calculateDiscountAmount()).toEqual(4046); // 2 * 2023 = 4046
      expect(discountPolicy.getDiscountName()).toEqual("주말 할인");
    });
  });

  describe("SpecialDayDiscountPolicy class test", () => {
    it("할인금액을 옳게 계산하여 리턴하고 해당 할인정책 이름을 리턴한다.", () => {
      const discountPolicy = new SpecialDayDiscountPolicy({}, {});
      expect(discountPolicy.calculateDiscountAmount()).toEqual(1000);
      expect(discountPolicy.getDiscountName()).toEqual("특별 할인");
    });
  });
});
