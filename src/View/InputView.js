import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../Constants/Constants";

const InputView = {
  async readDate() {
    const input = await Console.readLineAsync(MESSAGE.INPUT_DATE);
    return Number(input);
  },
  async readOrder() {
    const orderString = await Console.readLineAsync(MESSAGE.INPUT_ORDER);
    const orderList = orderString.split(",");

    return orderList;
  },
};

export default InputView;
