/**
 * @author Salman Asif <salmanasif35@gmail.com>
 */

const Bid = require("../models/Bid").Bid;

class BidManager {
  constructor() {}

  get(bidId) {
    return Bid.get(bidId);
  }

  placeBid(creator, price, quantity, isSelected, createDateTime) {
    if (price > 10 && isSelected)
      return new Bid(creator, price, quantity, isSelected, createDateTime);
  }

  updateBid(bidId, field, value) {
    const bid = Bid.get(bidId);
    bid[field] = value;
  }

  revokeBids(bidId, myObj) {
    const bid = Bid.get(bidId);
    delete myObj[bid];
  }

  confirmBid(bidId) {
    const bid = Bid.get(bidId);
    bid["isSelected"] = true;
    return bid;
  }

  filterBidsDB(bidId, opts) {
    const bid = Bid.get(bidId);
    for (const elem of opts["bid"]) {
      if (bid[elem.key] != elem.value) return false;
    }
    return true;
  }
}

bid_manager = new BidManager();

module.exports = {
  bid_manager,
};
