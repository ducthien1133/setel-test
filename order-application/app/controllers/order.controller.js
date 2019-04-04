'use strict';
const order = require('../models/order.model');
const orderStatus = require('../models/enum/order.state.enum');
const paymentAction = require('../models/enum/payment.action.enum');

exports.create = (req, res) => {
    if(!req.body.name) {
        return res.status(400).send({
            message: "Order name can not be empty"
        });
    }
    const newOrder = new order({
        name: req.body.name, 
        des: req.body.des,
        state: orderStatus.CREATED,
        amount: req.body.amount
    });
    newOrder.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Order."
        });
    });
};

exports.findAll = (req, res) => {
    order.find()
    .then(orders => {
        res.send(orders);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Orders."
        });
    });
};

exports.findOne = (req, res) => {
    order.findById(req.params.orderId)
    .then(order => {
        if(!order) {
            return res.status(404).send({
                message: "Order not found with id " + req.params.orderId
            });            
        }
        res.send(order);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Order not found with id " + req.params.orderId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving order with id " + req.params.orderId
        });
    });
};

exports.update = (req, res) => {
    if(!req.body.paymentAction) {
        return res.status(400).send({
            message: "Payment Action can not be empty"
        });
    }

    order.findByIdAndUpdate(req.params.orderId, {
        state: req.body.paymentAction == paymentAction.DECLINED ? orderStatus.CANCELED :  orderStatus.CONFIRMED
    }, {new: true})
    .then(order => {
        if(!order) {
            return res.status(404).send({
                message: "Order not found with id " + req.params.orderId
            });
        }
        res.send(order);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Order not found with id " + req.params.orderId
            });                
        }
        return res.status(500).send({
            message: "Error updating order with id " + req.params.orderId
        });
    });
};