import {
  ChristmasDdayDiscountPolicy,
  SpecialDayDiscountPolicy,
  WeekdayDiscountPolicy,
  WeekendDiscountPolicy,
} from "./DiscountPolicy.js";
import Discounts from "./Discounts.js";
import { DATE_INFO } from "../../Constants/Constants.js";

class DiscountGenerator {
  generateDiscount(dateInfo, orders) {
    const discountPolicies = [];

    if (dateInfo.isChristmasDday()) {
      discountPolicies.push(ChristmasDdayDiscountPolicy);
    }

    if (dateInfo.getSpecificInfo(DATE_INFO.WEEK) === DATE_INFO.WEEKDAY) {
      discountPolicies.push(SpecialDayDiscountPolicy);
    }

    if (dateInfo.getSpecificInfo(DATE_INFO.WEEK) === DATE_INFO.WEEKEND) {
      discountPolicies.push(WeekdayDiscountPolicy);
    }

    if (dateInfo.getSpecificInfo(DATE_INFO.SPECIAL_DAY) === DATE_INFO.STAR) {
      discountPolicies.push(WeekendDiscountPolicy);
    }

    return new Discounts(dateInfo, orders, discountPolicies);
  }
}

export default DiscountGenerator;
