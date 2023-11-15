import { ERROR } from "../../Constants/Constants";
class VisitDate {
  getValidInputDate(inputDate) {
    if (!Number.isInteger(inputDate)) {
      throw new Error(ERROR.INVALID_DATE);
    }
    if (inputDate > 31 || inputDate < 1) {
      throw new Error(ERROR.INVALID_DATE);
    }
    return inputDate;
  }
}

export default VisitDate;
