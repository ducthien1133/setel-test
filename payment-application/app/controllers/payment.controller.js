'use strict';
const payment = require('../models/payment.model');
const paymentAction = require('../models/enum/payment.action.enum');

exports.create = (req, res) => {
    if(!req.body.orderId) {
        return res.status(400).send({
            message: "Payment order can not be empty"
        });
    }
    const newPayment = new payment({
        orderId: req.body.orderId,
        paymentAction:  req.body.amount >= 50 ? paymentAction.DECLINED : paymentAction.CONFIRMED
    });
    newPayment.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Payment."
        });
    });
};

exports.findAll = (req, res) => {
    payment.find()
    .then(payments => {
        res.send(payments);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving payments."
        });
    });
};
