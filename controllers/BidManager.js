const Bid = require("../models/Bid").Bid;

class BidManager {
  constructor() {}

  get(bidId) {
    return Bid.get(bidId);
  }

  placeBid(bidId, creator, price, quantity, isSelected, createDateTime) {
    return new Bid(bidId, creator, price, quantity, isSelected, createDateTime);
  }

  updateCrop(bidId, field, value) {
    const bid = Crop.get(bidId);
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

  filterBidDB(bidId, opts) {
    const bid = Bid.get(bidId);
    for (const elem of opts) {
      if (bid[elem.key] != elem.value) return false;
    }
    return true;
  }
}

bid_manager = new BidManager();

module.exports = {
  bid_manager,
};
