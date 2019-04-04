const orderState = ({
    CREATED : 'created',
    CANCELED: 'canceled',
    CONFIRMED: 'confirmed',
    DELIVERED: 'delivered'
  });

module.exports = Object.freeze(orderState);