import DateOfMonth from "../src/Model/Calendar/DateOfMonth";

describe("DateOfMonth class test", () => {
  test("요일이 주중이면 weekday를 저장한다", () => {
    const dateInfo = new DateOfMonth(1, 11);
    expect(dateInfo.getSpecificInfo("week")).toBe("weekday");
  });

  test("요일이 주말이면 weekend를 저장한다.", () => {
    const dateInfo = new DateOfMonth(5, 2);
    expect(dateInfo.getSpecificInfo("week")).toBe("weekend");
  });

  test("날짜가 크리스마스 디데이면 디데이를 계산해 저장한다.", () => {
    const dateInfo = new DateOfMonth(1, 25);
    expect(dateInfo.getSpecificInfo("christmasDday")).toBe(0);
  });

  test("날짜가 특별할인 날짜면 star를 저장한다.", () => {
    const dateInfo = new DateOfMonth(0, 24);
    expect(dateInfo.getSpecificInfo("specialDay")).toBe("star");
  });
});
