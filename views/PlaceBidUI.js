const bidManager = require("../controllers/BidManager").BidManager;

class PlaceBidUI {
  placeBid(req, resp) {
    bidManager.placeBid(
      req.params.bidId,
      req.params.creator,
      req.params.price,
      req.params.quantity,
      req.params.isSelected,
      req.params.createDateTime
    );
    resp.sendStatus(200);
  }

  updateBid(req, resp) {
    bidManager.updateCrop(req.params.bidId, req.query.field, req.params.value);
    resp.sendStatus(200);
  }

  deleteBid(req, resp) {
    bidManager.revokeBid(req.params.bidId);
    resp.sendStatus(200);
  }
}

place_bid_ui = new PlaceBidUI();

module.exports = {
  PlaceBidUI: place_bid_ui,
};
