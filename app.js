/**
 * @author Ryan Rehman <ryanrehman99@gmail.com>
 */

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
// const cropRoutes = require("./routes/Crop").cropRoutes;
const bidRoutes = require("./routes/Bid").bidRoutes;
const orderRoutes = require("./routes/Order").orderRoutes;
const paymentRoutes = require("./routes/Payment").paymentRoutes;

app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "public"));

port = 3000;
const server = app.listen(port);

app.get("/health", (req, res) => {
  res.send("health");
});

app.use("/bid/:bidId", bidRoutes);
app.use("/order/:orderId", orderRoutes);
app.use("/pay", paymentRoutes);

module.exports = app;
