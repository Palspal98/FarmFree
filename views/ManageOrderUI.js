/**
 * @author Ryan Rehman <ryanrehman99@gmail.com>
 */

const orderManager = require("../controllers/OrderManager").order_manager;

class ManageOrderUI {
  async addReview(req, resp) {
    await orderManager.storeReview(
      parseInt(req.query.reviewDetails, 10),
      parseInt(req.params.orderId, 10)
    );
    resp.sendStatus(200);
  }

  async filterOrders(req, resp) {
    await orderManager.filterOrdersDB(req.params.orderId, req.query.opts);
    resp.sendStatus(200);
  }

  async getOrderDetails(req, resp) {
    resp
      .status(200)
      .json(
        await orderManager.requestOrderDetails(parseInt(req.params.orderId, 10))
      );
  }
}

manage_order_ui = new ManageOrderUI();

module.exports = {
  ManageOrderUI: manage_order_ui,
};
