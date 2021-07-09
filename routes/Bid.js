const ViewBidUI = require("../views/ViewBidUI").ViewBidUI;
const PlaceBidUI = require("../views/PlaceBidUI").PlaceBidUI;
const bidRoutes = require("express").Router({ mergeParams: true });

bidRoutes.route("/filterListing").get(ViewBidUI.filterListing);

bidRoutes.route("/conmfirmBid").get(ViewBidUI.confirmBid);

bidRoutes.route("/placeBid").get(PlaceBidUI.placeBid);

bidRoutes.route("/updateBid").get(PlaceBidUI.updateBid);

bidRoutes.route("/deleteBid").get(PlaceBidUI.deleteBid);

module.exports = {
  bidRoutes,
};
