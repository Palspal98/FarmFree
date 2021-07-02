const orderDB = require("../database/Order");
// const Bid = require("../models/Bid").Bid;

const PAYMENT_HASH_SIZE = 8;
let NEW_ORDER_ID = -1;

class Order {
  constructor(reviewDetails) {
    NEW_ORDER_ID += 1;
    this.orderId = NEW_ORDER_ID;
    this.hasPaid = false;
    this.reviewDetails = reviewDetails;
    this.paymentHash = Math.random().toString(36).substring(PAYMENT_HASH_SIZE);
  }

  async create() {
    const record = {
      orderId: this.orderId,
      bidId: -1,
      hasPaid: this.hasPaid,
      reviewDetails: this.reviewDetails,
      paymentHash: this.paymentHash
    }
    await orderDB.createOrder(record);

    return await Order.get(this.orderId);
  }

  static async setHasPaid(orderId, value) {
    try {
      await orderDB.updateOrder({orderId}, {hasPaid: 1});
    } catch (error) {
      console.error("DB update failed" + error);
      return false;
    }

    return true;
  }

  static async get(orderId) {
    const currOrder = await orderDB.getOrder(({orderId}));
    if (!currOrder[0])
      return false;
    return currOrder[0]["dataValues"];
  }
}

module.exports = {
  Order,
};
