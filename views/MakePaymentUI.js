/**
 * @author Ryan Rehman <ryanrehman99@gmail.com>
 */
class MakePaymentUI {
  makePayment(req, resp) {
    // notImplementedYet()
    resp.sendStatus(200);
  }

  downloadReceipt(req, resp) {
    // notImplementedYet()
    resp.sendStatus(200);
  }
}

make_payment_ui = new MakePaymentUI();

module.exports = {
  MakePaymentUI: make_payment_ui,
};
