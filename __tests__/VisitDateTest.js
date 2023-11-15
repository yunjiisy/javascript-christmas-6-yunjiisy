import VisitDate from "../src/Model/Calendar/VisitDate";
import { ERROR } from "../src/Constants/Constants";

describe("VisitDate", () => {
  test("유효한 날짜를 넣으면 그 유효한 날짜를 리턴한다.", () => {
    const visitDate = new VisitDate();
    expect(visitDate.getValidInputDate(15)).toBe(15);
  });

  test("정수(숫자)가 아닌 것을 입력하면 예외를 발생시킨다.", () => {
    expect(() => {
      const visitDate = new VisitDate();
      visitDate.getValidInputDate("first");
    }).toThrow(ERROR.INVALID_DATE);
  });

  test("날짜 범위 밖의 숫자를 입력하면 예외를 발생시킨다.", () => {
    expect(() => {
      const visitDate = new VisitDate();
      visitDate.getValidInputDate(32);
    }).toThrow(ERROR.INVALID_DATE);
  });
});
