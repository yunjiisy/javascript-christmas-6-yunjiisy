export class Menu {
  constructor() {
    this.menuItems = {};
  }

  addMenuItem(name, price) {
    this.menuItems[name] = price;
  }

  getMenu() {
    return this.menuItems;
  }

  isValidItem(item) {
    return this.menuItems.hasOwnProperty(item);
  }
}

export class AppetizerMenu extends Menu {
  constructor() {
    super();
    this.addMenuItem("양송이수프", 6000);
    this.addMenuItem("타파스", 5500);
    this.addMenuItem("시저샐러드", 8000);
  }
}

export class MainMenu extends Menu {
  constructor() {
    super();
    this.addMenuItem("티본스테이크", 55000);
    this.addMenuItem("바비큐립", 54000);
    this.addMenuItem("해산물파스타", 35000);
    this.addMenuItem("크리스마스파스타", 25000);
  }
}
export class DessertMenu extends Menu {
  constructor() {
    super();
    this.addMenuItem("초코케이크", 15000);
    this.addMenuItem("아이스크림", 5000);
  }
}

export class BeverageMenu extends Menu {
  constructor() {
    super();
    this.addMenuItem("제로콜라", 3000);
    this.addMenuItem("레드와인", 60000);
    this.addMenuItem("샴페인", 25000);
  }
}
