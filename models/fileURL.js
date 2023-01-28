const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const fileURL = sequelize.define('fileurl',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    URL: Sequelize.STRING
})

module.exports = fileURL;