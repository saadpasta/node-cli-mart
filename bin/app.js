var { inventory } = require('./inventory');
let cart = {};
const offers = ['buy_2_get_1_free', 'buy_1_get_half_off'];

const addProductToCart = (product, quantity) => {
  if (inventory[product]) {
    cart[product] = {
      quantity: cart[product]
        ? Number(cart[product]['quantity']) + Number(quantity)
        : quantity,
      name: product,
    };
    return `added ${product} ${quantity}`;
  }
  return 'No Such Product Found';
};

const addOfferOnProduct = (offer, product) => {
  if (offers.includes(offer)) {
    if (cart[product]) {
      cart[product] = {
        ...cart[product],
        offer,
      };
      return 'offer added';
    }
    return 'Please add product to cart to avail offer';
  }
  return 'Please add a valid offer';
};

const printBill = () => {
  return cart;
};

module.exports = {
  cart,
  addProductToCart,
  printBill,
  addOfferOnProduct,
};
