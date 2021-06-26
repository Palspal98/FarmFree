const orderManager = require("../controllers/OrderManager").order_manager;

class ManageOrderUI {
  addReview(req, resp) {
    orderManager.storeReview(req.params.orderId, req.query.reviewDetails);
    resp.sendStatus(200);
  }

  filterOrders(req, resp) {
    orderManager.filterOrdersDB(req.params.orderId, req.query.opts);
    resp.sendStatus(200);
  }

  getOrderDetails(req, resp) {
    orderManager.requestOrderDetails(req.params.orderId);
    resp.sendStatus(200);
  }
}

manage_order_ui = new ManageOrderUI();

module.exports = {
  ManageOrderUI : manage_order_ui,
};
