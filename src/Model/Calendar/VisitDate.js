import { ERROR, DATE } from "../../Constants/Constants";
class VisitDate {
  getValidInputDate(inputDate) {
    if (!Number.isInteger(inputDate)) {
      throw new Error(ERROR.INVALID_DATE);
    }
    if (inputDate > DATE.VALIDATE_MAX || inputDate < DATE.VALIDATE_MIN) {
      throw new Error(ERROR.INVALID_DATE);
    }
    return inputDate;
  }
}

export default VisitDate;
