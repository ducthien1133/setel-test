const payment = require('../models/payment.model');
const paymentAction = require('../models/enum/payment.action.enum');

exports.create = (req, res) => {
    if(!req.body.orderId) {
        return res.status(400).send({
            message: "Payment order can not be empty"
        });
    }
    return res.status(200).send({
        orderId: req.body.orderId,
        paymentAction:  req.body.amount >= 50 ? paymentAction.DECLINED : paymentAction.CONFIRMED
    });
};
