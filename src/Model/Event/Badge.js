import { BADGE } from "../../Constants/Constants";

const TRESHOLD_AMOUNT = Object.freeze({
  STAR: 5000,
  TREE: 10000,
  SANTA: 20000,
});

class Badge {
  #badge;

  constructor(benefitAmount) {
    this.updateBadge(benefitAmount);
  }

  updateBadge(benefitAmount) {
    switch (true) {
      case benefitAmount >= TRESHOLD_AMOUNT.SANTA:
        this.#badge = BADGE.SANTA;
        break;
      case benefitAmount >= TRESHOLD_AMOUNT.TREE:
        this.#badge = BADGE.TREE;
        break;
      case benefitAmount >= TRESHOLD_AMOUNT.STAR:
        this.#badge = BADGE.STAR;
        break;
      default:
        this.#badge = BADGE.NOTHING;
    }
  }

  getBadge() {
    return this.#badge;
  }
}
export default Badge;
