const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    orderId :{type: String},
    paymentAction: {type: String},
    date: {type: Date, default: Date.now},
 });

module.exports = mongoose.model('payment', paymentSchema);