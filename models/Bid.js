/**
 * @author Salman Asif <salmanasif35@gmail.com>
 */

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
    BidDB.push(this);
  }

  static get(bidId) {
    for (const bidRow of BidDB) {
      if (bidRow.bidId == bidId) return bidRow;
    }

    return false;
  }
}

module.exports = {
  Bid,
};
