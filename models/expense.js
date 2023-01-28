const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Expense = sequelize.define('expense', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    date:{
        type: Sequelize.DATEONLY,
        defaultValue: Sequelize.NOW
    },
    amount:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    desc: Sequelize.STRING,
    category: Sequelize.STRING
})

module.exports = Expense;