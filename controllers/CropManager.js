const Crop = require("../models/Crop").Crop;

class CropManager {
  constructor() {}

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
    crop[field] = value;
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

    const crop = Crop.get(listingId);
    for (const elem of opts) {
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
