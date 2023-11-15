export const MESSAGE = Object.freeze({
  EVENT_OVERVIEW: "12월 3일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!",
  ORDER_MENU: "\n<주문 메뉴>",
  TOTAL_AMOUNT: "\n<할인 전 총주문 금액>",
  GIFT_MENU: "\n<증정 메뉴>",
  BENEFIT_LIST: "\n<혜택 내역>",
  BENEFIT_AMOUNT: "\n<총혜택 금액>",
  PAY_AMOUNT: "\n<할인 후 예상 결제 금액>",
  BADGE: "\n<12월 이벤트 배지>",
  INPUT_DATE:
    "12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)",
  INPUT_ORDER:
    "주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)",
  NOTHING: "없음",
  CHRISTMAS_DDAY: "크리스마스 디데이 할인",
  WEEKDAY: "평일 할인",
  WEEKEND: "주말 할인",
  SPECIAL_DAY: "특별 할인",
});

export const NUMBER = Object.freeze({
  MAX_QUANTITY: 20,
  SPECIAL_DISCOUNT_AMOUNT: 1000,
  MIN_ORDER_AMOUNT: 10000,
});

export const DISCOUNT_AMOUNT = Object.freeze({
  SPECIALDAY: 1000,
  WEEKDAY: 2023,
  WEEKEND: 2023,
  DDAY_INCREASE: 100,
  DDAY_BASE: 1000,
});

export const DAY = Object.freeze({
  FRIDAY: 5,
  SATURDAY: 6,
  SUNDAY: 0,
  MONDAY: 1,
  TUESDAY: 2,
  WEDNESDAY: 3,
  THURSDAY: 4,
});

export const DATE = Object.freeze({
  FIRST: 1,
  CHRISTMAS: 25,
  SPECIAL_DATES: [3, 10, 17, 24, 25, 31],
  VALIDATE_MAX: 31,
  VALIDATE_MIN: 1,
});

export const BADGE = Object.freeze({
  SANTA: "산타",
  TREE: "트리",
  STAR: "별",
  NOTHING: "없음",
});

export const DATE_INFO = Object.freeze({
  CHRISTMAS_DDAY: "christmasDday",
  WEEKDAY: "weekday",
  WEEKEND: "weekend",
  WEEK: "week",
  SPECIAL_DAY: "specialDay",
  STAR: "star",
});

export const GIFTMENU = Object.freeze({
  MENU: "샴페인",
});

export const CATEGORY = Object.freeze({
  BEVERAGE: "beverage",
  APPITIZER: "apptizer",
  MAIN: "main",
  DESSERT: "dessert",
});

export const ERROR = Object.freeze({
  INVALID_ORDER: "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.",
  INVALID_DATE: "[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.",
});
