const OrderDB = require("../database/Order").OrderDB;
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
    // this.bid = Bid.get(bidId);
    OrderDB.push(this);
  }

  setHasPaid(value) {
    try {
      this.hasPaid = value;
    } catch (error) {
      console.error("DB update failed" + error);
      return false;
    }

    return true;
  }

  static get(orderId) {
    for (const orderRow of OrderDB) {
      if (orderRow.orderId == orderId) return orderRow;
    }

    return false;
  }
}

module.exports = {
  Order,
};
