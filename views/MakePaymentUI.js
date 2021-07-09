/**
 * @author Ryan Rehman <ryanrehman99@gmail.com>
 */
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");
const orderManager = require("../controllers/OrderManager").order_manager;

class MakePaymentUI {
  async makePayment(req, resp) {
    const orderId = req.query.orderId;
    const price = parseInt(req.query.price);
    const type = req.query.type;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: type,
              images: ["https://stripe.com/favicon.ico"],
            },
            unit_amount: price * 100,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `http://${req.headers.host}/pay/success?orderId=${orderId}`,
      cancel_url: `http://${req.headers.host}/cancel.html`,
    });

    resp.redirect(303, session.url);
  }

  async downloadReceipt(req, resp) {
    resp.redirect(200, `http://${req.headers.host}/success.html`);
  }

  async success(req, resp) {
    const orderId = parseInt(req.query.orderId);
    await orderManager.updatePaymentStatus(orderId, 1);
    resp.render("success");
  }
}

make_payment_ui = new MakePaymentUI();

module.exports = {
  MakePaymentUI: make_payment_ui,
};
