/**
 * @author Ryan Rehman <ryanrehman99@gmail.com>
 */

const ManageOrderUI = require("../views/ManageOrderUI").ManageOrderUI;
const orderRoutes = require("express").Router({ mergeParams: true });

orderRoutes.route("/addReview").get(ManageOrderUI.addReview);

orderRoutes.route("/filterOrders").get(ManageOrderUI.filterOrders);

orderRoutes.route("/getOrderDetails").get(ManageOrderUI.getOrderDetails);

module.exports = {
  orderRoutes,
};
