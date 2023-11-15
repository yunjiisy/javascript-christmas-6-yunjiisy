import {
  ChristmasDdayDiscountPolicy,
  SpecialDayDiscountPolicy,
  WeekdayDiscountPolicy,
  WeekendDiscountPolicy,
} from "./DiscountPolicy.js";

import Discounts from "./Discounts.js";

class DiscountGenerator {
  generateDiscount(dateInfo, orders) {
    const discountPolicies = [];

    if (dateInfo.isChristmasDday()) {
      discountPolicies.push(ChristmasDdayDiscountPolicy);
    }

    if (dateInfo.getSpecificInfo("week") === "weekday") {
      discountPolicies.push(SpecialDayDiscountPolicy);
    }

    if (dateInfo.getSpecificInfo("week") === "weekend") {
      discountPolicies.push(WeekdayDiscountPolicy);
    }

    if (dateInfo.getSpecificInfo("specialDay") === "star") {
      discountPolicies.push(WeekendDiscountPolicy);
    }

    return new Discounts(dateInfo, orders, discountPolicies);
  }
}

export default DiscountGenerator;
