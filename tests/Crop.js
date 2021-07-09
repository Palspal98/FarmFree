const CropDB = require("../database/Crop").CropDB;
const CropManager = require("../controllers/CropManager").crop_manager;

let NEW_CROP_ID = -1;

const NEW_exist_CROP_ID = 15;
const found = CropManager.showCropDetails(NEW_exist_CROP_ID);
console.assert(!found);

const name = "Somo";
let variety = "Apple";
const subVariety = "Chandramukhi";
const quantity = 50;
const minumumRate = 70;
const grainDescription = "fine";
const imageUrl = "adsfaf";
const expireDateTime = "1-11-2019";
const location = "kolkata";
const listingTimestamp = "25-10-2019";

const found_new = CropManager.addNewCrop(
  name,
  variety,
  subVariety,
  quantity,
  minumumRate,
  grainDescription,
  imageUrl,
  expireDateTime,
  location,
  listingTimestamp
);
console.assert(!found_new);
// console.log(CropDB);
variety = "Potato";
const found2 = CropManager.addNewCrop(
  name,
  variety,
  subVariety,
  quantity,
  minumumRate,
  grainDescription,
  imageUrl,
  expireDateTime,
  location,
  listingTimestamp
);
console.assert(found2);

let show = CropManager.showCropDetails(0);
console.assert(show.variety != "wheat");
console.assert(!show.isVerified);

CropManager.updateCrop(0, "variety", "wheat");
CropManager.assessCrop(0);
show = CropManager.showCropDetails(0);
console.assert(show.variety == "wheat");
console.assert(show.isVerified);
console.log(show.isVerified);

// console.assert(show);
console.log(CropDB);

let filterOpts = {
  crop: [
    { key: "isVerified", value: false },
    // { key: "reviewDetails", value: 4 },
  ],
};

console.assert(!CropManager.filterCrops(0, filterOpts));

filterOpts = {
  crop: [
    { key: "isVerified", value: true },
    // { key: "reviewDetails", value: 4 },
  ],
};

console.assert(CropManager.filterCrops(0, filterOpts));
