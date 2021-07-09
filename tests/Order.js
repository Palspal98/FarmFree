/**
 * @author Ryan Rehman <ryanrehman99@gmail.com>
 */

const orderDB = require("../database/Order");
const orderManager = require("../controllers/OrderManager").order_manager;

// Clean state
orderDB.reset();

// These are the mandatory params required to create a new order
newOrdersreviewDetails = [1, 2, 4, 15];

// These are the expected responses for our functions:
// index 0: to check whether order gets successfully created
// index 1: to check whether order gets successfully assigned an id
//          (autoincrement according to DB)
// index 2: to check our filter function
expectedOrdersData = [
  ["object", 0, false],
  ["object", 0, false],
  ["object", 1, true],
  ["boolean", undefined, undefined],
];

// Data passed by the user, and we pass this to our
// filter function to check whether this object is valid or not
const filterOpts = {
  order: [
    { key: "hasPaid", value: 0 },
    { key: "hasPaid", value: 0 },
    { key: "reviewDetails", value: 4 },
  ],
  bid: [],
};

newOrdersreviewDetails.forEach(async function (param, index) {
  let currOrder = await orderManager.storeReview(param);

  console.assert(
    typeof currOrder === expectedOrdersData[index][0],
    `actual: ${typeof currOrder}, expected: ${
      expectedOrdersData[index][0]
    }, errorMsg: "New Order type check failed"`
  );
  if (!currOrder) {
    // Order not created
    return;
  }
  const valid = await orderManager.filterOrdersDB(
    currOrder.orderId,
    filterOpts
  );
  currOrder = await orderManager.requestOrderDetails(currOrder.orderId);
  console.assert(
    valid == expectedOrdersData[index][2],
    `actual: ${valid}, expected: ${expectedOrdersData[index][2]}, errorMsg: "Filter order check failed"`
  );

  console.assert(
    !currOrder.hasPaid,
    `actual: ${currOrder.hasPaid}, expected: False, errorMsg: "has Paid before check failed"`
  );

  await orderManager.updatePaymentStatus(currOrder.orderId, 1);

  currOrder = await orderManager.requestOrderDetails(currOrder.orderId);
  console.assert(
    currOrder.hasPaid,
    `actual: ${currOrder.hasPaid}, expected: True, errorMsg: "has Paid after check failed"`
  );

  // reset data
  await orderManager.updatePaymentStatus(currOrder.orderId, 0);
});

async function testNonExistantOrderId() {
  const NON_EXISTANT_ORDER_ID = 100;
  const found = await orderManager.requestOrderDetails(NON_EXISTANT_ORDER_ID);
  console.assert(
    !found,
    `actual: ${found}, expected: False, errorMsg: "non existant order id check failed"`
  );
}
testNonExistantOrderId();
