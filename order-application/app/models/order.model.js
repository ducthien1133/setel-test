const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    name: {type: String},
    des: {type: String},
    amount: {type: Number},
    state: {type: String},
    date: {type: Date, default: Date.now},
 });

module.exports = mongoose.model('order', orderSchema);