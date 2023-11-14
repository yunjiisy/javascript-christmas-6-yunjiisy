class VisitDate {
  getValidInputDate(inputDate) {
    if (!Number.isInteger(inputDate)) {
      throw new Error("[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.");
    }
    if (inputDate > 31 || inputDate < 1) {
      throw new Error("[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.");
    }
    return inputDate;
  }
}

export default VisitDate;
