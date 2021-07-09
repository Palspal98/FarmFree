const BidDB = require("../database/Bid").BidDB;
const BidManager = require("../controllers/BidManager").bid_manager;

// These are the mandatory params required to create a new order
var BidObj1 = ["SALMAN", 15, 15, true, "24-JUL-20"];
var BidObj2 = ["RYAN", 50, 12, true, "14-SEPT-21"];

var newBidsObj = [];

newBidsObj.push(BidObj1);
newBidsObj.push(BidObj2);

// These are the expected responses for our functions:
// index 0: to check whether Bid gets successfully created
// index 1: to check whether Bid gets successfully assigned an id
//          (autoincrement according to DB)
// index 2: to check our filter function

expectedBidsData = [
  ["object", 0, false],
  ["object", 1, true],
];

// Data passed by the user, and we pass this to our
// filter function to check whether this object is valid or not
const filterOpts = {
  bid: [
    { key: "quantity", value: 20 },
    { key: "distance", value: 20 },
  ],
  order: [],
};

let NEW_BID_ID = -1;
newBidsObj.forEach(function (param, index) {
  const newBid = BidManager.placeBid(...param);

  console.assert(typeof newBid === expectedBidsData[index][0]);

  if (!newBid) {
    // Bid not created
    return;
  }

  const NON_EXISTANT_BID_ID = 15;
  const found = BidManager.get(NON_EXISTANT_BID_ID);
  console.assert(!found);
});
