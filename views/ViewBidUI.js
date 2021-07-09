const bidManager = require("../controllers/BidManager").BidManager;

class ViewBidUI {
  filterListing(req, resp) {
    bidManager.filterBidDB(req.params.bidId, req.query.opts);
    resp.sendStatus(200);
  }

  confirmBid(req, resp) {
    bidManager.confirmBid(req.params.orderId);
    resp.sendStatus(200);
  }
}

view_bid_ui = new ViewBidUI();

module.exports = {
  ViewBidUI: view_bid_ui,
};
