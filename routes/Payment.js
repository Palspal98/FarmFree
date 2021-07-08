/**
 * @author Ryan Rehman <ryanrehman99@gmail.com>
 */

const MakePaymentUI = require("../views/MakePaymentUI").MakePaymentUI;
const paymentRoutes = require("express").Router({ mergeParams: true });

paymentRoutes.route("/makePayment").post(MakePaymentUI.makePayment);

paymentRoutes.route("/downloadReceipt").get(MakePaymentUI.downloadReceipt);

module.exports = {
  paymentRoutes,
};
