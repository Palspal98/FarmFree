/**
 * @author Somodyuti Pal <palspal1998@gmail.com>
 */
const cropManager = require("../controllers/CropManager").crop_manager;
class ManageCropUI {
    addNewCrop(req, resp) {
        cropManager.addNewCrop(
            req.params.name,
            req.params.variety,
            req.params.subVariety,
            req.params.quantity,
            req.params.minumumRate,
            req.params.grainDescription,
            req.params.expireDateTime,
            req.params.location,
            req.params.listingTimestamp
        );
        resp.sendStatus(200);
    }
    filterCrops(req, resp) {
        cropManager.filterCropsDB(req.params.listingId, req.query.opts);
        resp.sendStatus(200);
    }
    updateCrops(req, resp) {
        cropManager.updateCrop(
            req.params.listingId,
            req.query.field,
            req.query.value
        );
        resp.sendStatus(200);
    }

    showCropDetails(req, resp) {
        cropManager.showCropDetails(req.params.listingId);
        resp.sendStatus(200);
    }

    assesCrop(req, resp) {
        cropManager.assesCrop(req.params.listingId);
        resp.sendStatus(200);
    }
}

module.exports = {
    ManageCropUI,
};
