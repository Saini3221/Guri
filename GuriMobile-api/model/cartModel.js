const mongoose = require('mongoose');

// Create a Schema for Cart Items
const cartItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Mobile',  // Reference to the Mobile model
    required: true
  },
  phoneName: {
    type: String,
    required: true
  },
  price: {
    type: String,  // Keep it consistent with your Mobile schema
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    min: [1, 'Quantity cannot be less than 1']
  },
  totalPrice: {
    type: String,  // Since price is a string, totalPrice will also be a string
    required: true
  }
});

// Create a Schema for Cart
const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',  // Assuming you have a User model
    required: true
  },
  items: [cartItemSchema],  // Array of cart items
  cartTotal: {
    type: String,  // To match the price format in Mobile schema
    required: true,
    default: '0'
  },
  status: {
    type: String,
    default: 'active',  // Could be 'active', 'checked_out', 'abandoned', etc.
    enum: ['active', 'checked_out', 'abandoned']
  },
}, { timestamps: true });  // Adds createdAt and updatedAt automatically

// Create the Cart model using the schema
const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
