const Order = require("../models/Order").Order;

class OrderManager {
  constructor() {}

  storeReview(reviewDetails) {
    if (reviewDetails > 5 || reviewDetails < 1) return false;

    return new Order(reviewDetails);
  }

  filterOrdersDB(orderId, opts) {
    /*
      Example opts = {
        order: [
          {key : "hasPaid", value: false},
          {key : "reviewDetails", value: 3.6},
        ],
        bid: [

        ],
      }
    */

    const order = this.requestOrderDetails(orderId);
    for (const elem of opts["order"]) {
      if (order[elem.key] != elem.value) return false;
    }
    // const bid = order.bid;
    // for (const elem of opts["bid"]) {
    //   if (order[elem.key] != bid.value) return false;
    // }

    return true;
  }

  requestOrderDetails(orderId) {
    return Order.get(orderId);
  }

  generateReceipt() {
    throw "Not Implemented Error";
  }

  updatePaymentStatus(orderId) {
    const order = this.requestOrderDetails(orderId);
    return order.setHasPaid(true);
  }
}

order_manager = new OrderManager();

module.exports = {
  order_manager,
};
