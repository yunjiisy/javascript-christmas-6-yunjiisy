class Badge {
  #badge;

  constructor(benefitAmount) {
    this.updateBadge(benefitAmount);
  }

  updateBadge(benefitAmount) {
    switch (true) {
      case benefitAmount >= 20000:
        this.#badge = "산타";
        break;
      case benefitAmount >= 10000:
        this.#badge = "트리";
        break;
      case benefitAmount >= 5000:
        this.#badge = "별";
        break;
      default:
        this.#badge = "없음";
    }
  }

  getBadge() {
    return this.#badge;
  }
}
export default Badge;
