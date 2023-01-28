const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Order = sequelize.define('order', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    paymentId: {
       type: Sequelize.STRING,
       defaultValue: 'xxx'   
    },
    orderId: {
       type: Sequelize.STRING,
       defaultValue: 'xxx'
    },
    status: Sequelize.STRING
})

module.exports = Order;