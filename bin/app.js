/**
 *
 * @param {object} cart {
  bread: {
    quantity: '6',
    subtotal: '15',
    offer: 'buy_2_get_1_free',
    discount: 5,
    total: 10,
    name: 'bread'
  }
}
 */

var { inventory } = require('./inventory');

// User card where all the products are stored
const cart = {};

// current offer
const offers = ['buy_2_get_1_free', 'buy_1_get_half_off'];

const addProductToCart = (product, quantity) => {
  if (!quantity) return 'Enter quantity';

  if (inventory[product]) {
    // Check if product exits in inventory

    if (cart[product]) {
      // Check if product already in cart then increament quantity
      increamentProductQuantity(product, quantity);
    } else {
      // add new product to cart
      addNewProductToCart(product, quantity);
    }
    return `added ${product} ${quantity}`;
  }
  return 'No Such Product Found';
};

const getDiscountBasedOnOffer = (offer, quantity, product) => {
  if (offer === null) return 0;

  if (offer === 'buy_2_get_1_free') {
    // quantity of free product based on amount of quantity selected
    const freeProducts = Math.floor(quantity / 3);

    // return amount of discount
    return freeProducts * inventory[product]['amount'];
  }

  if (offer === 'buy_1_get_half_off') {
    // quantity of half off product based on amount of quantity selected
    const halfOffProdcuts = Math.floor(quantity / 2);

    // return amount of discount
    return halfOffProdcuts * (inventory[product]['amount'] / 2);
  }
};

const getTotal = (discount, subtotal) => {
  if (discount) return subtotal - discount;
  return subtotal;
};

const addOfferOnProduct = (offer, product) => {
  if (cart[product]) {
    // Check if offer exits in our system
    if (offers.indexOf(offer) != -1) {
      cart[product]['offer'] = offer;
      return 'offer added';
    } else {
      return 'Please add a valid offer';
    }
  }
  return 'Please add product to cart to avail offer';
};

const printBill = () => {
  let total = 0;
  let discount = 0;
  let subtotal = 0;

  for (product in cart) {
    total = total + cart[product]['total'];
    discount = discount + cart[product]['discount'];
    subtotal = subtotal + cart[product]['subtotal'];
  }

  return `subtotal:${subtotal}, discount:${discount}, total:${total}`;
};

const checkout = () => {
  if (Object.keys(cart).length === 0) return 'empty cart';
  return `done`;
};

const increamentProductQuantity = (product, quantity) => {
  cart[product]['quantity'] =
    Number(cart[product]['quantity']) + Number(quantity);
};

const addNewProductToCart = (product, quantity) => {
  cart[product] = {
    quantity: quantity,
    get subtotal() {
      return inventory[product]['amount'] * this.quantity;
    },
    offer: null,
    get discount() {
      return getDiscountBasedOnOffer(this.offer, this.quantity, this.name);
    },
    get total() {
      return getTotal(this.discount, this.subtotal);
    },
    name: product,
  };
};

module.exports = {
  cart,
  addProductToCart,
  printBill,
  checkout,
  addOfferOnProduct,
};
