/**
 * @author Somodyuti Pal <palspal1998@gmail.com>
 */

const Crop = require("../models/Crop").Crop;
const possibleVarities = ["Potato", "Wheat", "Mango"];

class CropManager {
  constructor() { }

  addNewCrop(
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
    if (!possibleVarities.includes(variety)) return false;

    return new Crop(
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
  }

  updateCrop(listingId, field, value) {
    const crop = Crop.get(listingId);
    console.log(field);
    crop[field] = value;
    console.log(crop);
    // CropDB.push(crop);
    // return true;
  }

  assessCrop(listingId) {
    const crop = Crop.get(listingId);
    crop["isVerified"] = true;
    return true;
  }

  filterCrops(listingId, opts) {
    /*
      Example opts = [
        {key : "isVerified", value: "false"},
        {key : "quantity", value: "11"},
      ];
    */

    const crop = this.showCropDetails(listingId);
    for (const elem of opts["crop"]) {
      if (crop[elem.key] != elem.value) return false;
    }

    return true;
  }

  showCropDetails(listingId) {
    return Crop.get(listingId);
  }
}
crop_manager = new CropManager();

module.exports = {
  crop_manager,
};
