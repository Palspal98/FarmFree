/**
 * @author Somodyuti Pal <palspal1998@gmail.com>
 */
const ManageCropUI = require("../views/ManageCropUI").ManageCropUI;

const cropRoutes = require("express").Router({ mergeParams: true });

const ManageCropUI = require("../views/ManageCropUI").ManageCropUI;

const cropRoutes = require("express").Router({ mergeParams: true });

cropRoutes.route("/addCrop").get(ManageCropUI.addCrop);

cropRoutes.route("/filterCrop").get(ManageCropUI.filterCrop);

cropRoutes.route("/getCropDetails").get(ManageCropUI.getCropDetails);

cropRoutes.route("/assesCrop").get(ManageCropUI.assesCrop);

module.exports = {
    cropRoutes,
};
