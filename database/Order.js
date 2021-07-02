/**
 * @author Ryan Rehman <ryanrehman99@gmail.com>
 */

const db = require("../db_settings");
const sequelize = db.sequelize;
const Sequelize = db.Sequelize;

const OrderSQL = sequelize.define(
  "order",
  {
    orderId: { type: Sequelize.INTEGER, allowNull: false, primaryKey: true },
    bidId: { type: Sequelize.INTEGER, allowNull: false, defaultValue: -1 },
    hasPaid: { type: Sequelize.TINYINT, allowNull: false, defaultValue: 0 },
    reviewDetails: {
      type: Sequelize.INTEGER,
      allowNull: true,
      defaultValue: null,
    },
    paymentHash: {
      type: Sequelize.STRING(64),
      allowNull: true,
      defaultValue: null,
    },
  },
  { timestamps: false }
);

function reset() {
  // Only used for testing purposes
  OrderSQL.destroy({
    where: {},
    truncate: true,
    cascade: false,
  });
}

function getOrder(where) {
  return OrderSQL.findAll({ where, logging: false });
}

function createOrder(record) {
  return OrderSQL.create(record);
}

function updateOrder(where, record) {
  return OrderSQL.update(record, { where });
}

module.exports = {
  getOrder,
  createOrder,
  updateOrder,
  reset,
};
