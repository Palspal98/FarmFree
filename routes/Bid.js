const ViewBidUI = require("../views/ViewBidUI").ManageOrderUI;
const PlaceBidUI = require("../views/PlaceBidUI").MakePaymentUI;
const bidRoutes = require("express").Router({ mergeParams: true });

bidRoutes.route("/filterListing").get(ViewBidUI.filterListing);

bidRoutes.route("/selectListing").get(ViewBidUI.selectListing);

bidRoutes.route("/selectBid").get(ViewBidUI.selectBid);

bidRoutes.route("/conmfirmBid").get(ViewBid.conmfirmBid);

bidRoutes.route("/placeBid").get(PlaceBidUI.placeBid);

bidRoutes.route("/updateOrDeleteBid").get(PlaceBidUI.updateOrDeleteBid);

bidRoutes.route("/selectBid").get(PlaceBidUI.selectBid);

module.exports = {
  bidRoutes,
};
