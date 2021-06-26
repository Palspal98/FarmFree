const ManageOrderUI = require("../views/ManageOrderUI").ManageOrderUI;
const MakePaymentUI = require("../views/MakePaymentUI").MakePaymentUI;
const orderRoutes = require("express").Router({ mergeParams: true });

orderRoutes.route("/addReview").get(ManageOrderUI.addReview);

orderRoutes.route("/filterOrders").get(ManageOrderUI.filterOrders);

orderRoutes.route("/getOrderDetails").get(ManageOrderUI.getOrderDetails);

orderRoutes.route("/makePayment").get(MakePaymentUI.makePayment);

orderRoutes.route("/downloadReceipt").get(MakePaymentUI.downloadReceipt);

module.exports = {
  orderRoutes,
};
