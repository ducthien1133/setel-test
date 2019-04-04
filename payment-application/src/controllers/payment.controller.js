const payment = require('../models/payment.model');
const paymentAction = require('../models/enum/payment.action.enum');

exports.create = (req, res) => {
    if(!req.body.orderId) {
        return res.status(400).send({
            message: "Payment order can not be empty"
        });
    }

    var radomNumber = Math.floor(Math.random() * (2) ) + 1;
    return res.status(200).send({
        orderId: req.body.orderId,
        paymentAction: radomNumber == 1 ? paymentAction.DECLINED : paymentAction.CONFIRMED
    });
};
