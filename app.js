const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// const cropRoutes = require("./routes/Crop").cropRoutes;
// const bidRoutes = require("./routes/Bid").bidRoutes;
const orderRoutes = require("./routes/Order").orderRoutes;

app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

port = 3000;
const server = app.listen(port);

app.get("/health", (req, res) => {
  res.send("health");
});

// app.use('/bid', Bid);
app.use("/order/:orderId", orderRoutes);

module.exports = app;
