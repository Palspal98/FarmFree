/**
 * @author Ryan Rehman <ryanrehman99@gmail.com>
 */
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

class MakePaymentUI {
  async makePayment(req, resp) {
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
      success_url: `http://${req.headers.host}/success.html`,
      cancel_url: `http://${req.headers.host}/cancel.html`,
    });

    resp.redirect(303, session.url);
  }

  async downloadReceipt(req, resp) {
    resp.redirect(200, `http://${req.headers.host}/success.html`);
  }
}

make_payment_ui = new MakePaymentUI();

module.exports = {
  MakePaymentUI: make_payment_ui,
};
