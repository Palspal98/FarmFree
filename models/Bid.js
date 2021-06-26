const BidDB = require("../database/Bid").BidDB;
let NEW_BID_ID = -1;

class Bid {
  constructor(creator, price, quantity, isSelected, createDateTime) {
    NEW_BID_ID += 1;
    this.bidId = NEW_BID_ID;
    this.creator = creator;
    this.price = price;
    this.quantity = quantity;
    this.isSelected = isSelected;
    this.createDateTime = createDateTime;
  }

  static get(bidId) {
    return BidDB[bidId];
  }
}

module.exports = {
  Bid,
};
