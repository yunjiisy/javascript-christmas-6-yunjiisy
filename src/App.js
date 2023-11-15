import OrderController from "./Controller/OrderController.js";

class App {
  async run() {
    const orderController = new OrderController();
    await orderController.start();
  }
}

export default App;
