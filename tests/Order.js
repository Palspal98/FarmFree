const OrderDB = require("../database/Order").OrderDB;
const orderManager = require("../controllers/OrderManager").order_manager;

// These are the mandatory params required to create a new order
newOrdersreviewDetails = [2.4, 3.6, 15];

// These are the expected responses for our functions:
// index 0: to check whether order gets successfully created
// index 1: to check whether order gets successfully assigned an id
//          (autoincrement according to DB)
// index 2: to check our filter function
expectedOrdersData = [
  ["object", 0, false],
  ["object", 1, true],
  ["boolean", undefined, undefined],
];

// Data passed by the user, and we pass this to our
// filter function to check whether this object is valid or not
const filterOpts = {
  order: [
    { key: "hasPaid", value: false },
    { key: "reviewDetails", value: 3.6 },
  ],
  bid: [],
};

let NEW_ORDER_ID = -1;
newOrdersreviewDetails.forEach(function (param, index) {
  const newOrder = orderManager.storeReview(param);

  console.assert(typeof newOrder === expectedOrdersData[index][0]);
  if (!newOrder) {
    // Order not created
    return;
  }
  const valid = orderManager.filterOrdersDB(newOrder.orderId, filterOpts);
  NEW_ORDER_ID += 1;
  console.assert(newOrder.orderId == NEW_ORDER_ID);
  console.assert(OrderDB.length == NEW_ORDER_ID + 1);
  console.assert(valid == expectedOrdersData[index][2]);

  console.assert(!newOrder.hasPaid);
  orderManager.updatePaymentStatus(newOrder.orderId);
  console.assert(newOrder.hasPaid);
});

const NON_EXISTANT_ORDER_ID = 15;
const found = orderManager.requestOrderDetails(NON_EXISTANT_ORDER_ID);
console.assert(!found);

console.log("Done");
