module.exports = (app) => {
    const payments = require('../controllers/payment.controller.js');

    app.post('/payments', payments.create);
}