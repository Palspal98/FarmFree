/**
 * @author Ryan Rehman <ryanrehman99@gmail.com>
 */

const Order = require("../models/Order").Order;

class OrderManager {
  constructor() {}

  async storeReview(reviewDetails, orderId) {
    if (reviewDetails > 5 || reviewDetails < 1) return false;
    const newOrder = new Order(reviewDetails);
    return await newOrder.create(orderId);
  }

  async filterOrdersDB(orderId, opts) {
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

    const order = await this.requestOrderDetails(orderId);
    for (const elem of opts["order"]) {
      if (order[elem.key] != elem.value) return false;
    }
    // const bid = order.bid;
    // for (const elem of opts["bid"]) {
    //   if (order[elem.key] != bid.value) return false;
    // }

    return true;
  }

  async requestOrderDetails(orderId) {
    return await Order.get(orderId);
  }

  generateReceipt() {
    throw "Not Implemented Error";
  }

  async updatePaymentStatus(orderId) {
    const currOrder = await this.requestOrderDetails(orderId);
    if (!currOrder) return;
    return await Order.setHasPaid(currOrder.orderId, true);
  }
}

order_manager = new OrderManager();

module.exports = {
  order_manager,
};
