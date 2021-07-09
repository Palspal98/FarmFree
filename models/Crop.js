/**
 * @author Somodyuti Pal <palspal1998@gmail.com>
 */
const CropDB = require("../database/Crop").CropDB;
let NEW_CROP_ID = -1;

class Crop {
  constructor(
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
  ) {
    NEW_CROP_ID += 1;
    this.listingId = NEW_CROP_ID;
    this.isVerified = false;
    this.variety = variety;
    this.subVariety = subVariety;
    this.name = name;
    this.variety = variety;
    this.quantity = quantity;
    this.minumumRate = minumumRate;
    this.grainDescription = grainDescription;
    this.imageUrl = imageUrl;
    this.expireDateTime = expireDateTime;
    this.location = location;
    this.listingTimestamp = listingTimestamp;
    CropDB.push(this);
  }

  static get(listingId) {
    for (const cropRow of CropDB) {
      if (cropRow.listingId == listingId) return cropRow;
    }
    return false;
  }
}
module.exports = {
  Crop,
};
