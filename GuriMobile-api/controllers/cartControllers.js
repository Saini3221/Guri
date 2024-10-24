const Cart = require('../model/cartModel'); // Adjust the path as necessary

// Helper function to calculate cart total
function calculateCartTotal(items) {
    return items.reduce((total, item) => total + item.totalPrice, 0);
}

// 1. Add item to cart
const addItemToCart = async (req, res) => {
    const { userId, items } = req.body;

    try {
        // Create or update cart for the user
        let cart = await Cart.findOne({ userId });

        if (!cart) {
            // Create a new cart if it doesn't exist
            cart = new Cart({ userId, items, cartTotal: calculateCartTotal(items) });
        } else {
            // Update existing cart
            items.forEach(item => {
                const existingItem = cart.items.find(i => i.productId.equals(item.productId));
                if (existingItem) {
                    existingItem.quantity += item.quantity; // Update quantity
                    existingItem.totalPrice = existingItem.price * existingItem.quantity; // Update total price
                } else {
                    cart.items.push(item); // Add new item
                }
            });
            cart.cartTotal = calculateCartTotal(cart.items);
        }

        await cart.save();
        res.status(201).json(cart);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// 2. Get user's cart
const getCart = async (req, res) => {
    const { userId } = req.params;

    try {
        const cart = await Cart.findOne({ userId });
        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }
        res.json(cart);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// 3. Update item quantity
const updateItemQuantity = async (req, res) => {
    const { userId } = req.params;
    const { productId, quantity } = req.body;

    try {
        const cart = await Cart.findOne({ userId });

        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        const item = cart.items.find(i => i.productId.equals(productId));
        if (item) {
            item.quantity = quantity; // Update quantity
            item.totalPrice = item.price * quantity; // Update total price
            cart.cartTotal = calculateCartTotal(cart.items); // Recalculate cart total
            await cart.save();
            res.json(cart);
        } else {
            res.status(404).json({ message: 'Item not found in cart' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// 4. Remove item from cart
const removeItemFromCart = async (req, res) => {
    const { userId, productId } = req.params;

    try {
        const cart = await Cart.findOne({ userId });

        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        cart.items = cart.items.filter(i => !i.productId.equals(productId)); // Remove item
        cart.cartTotal = calculateCartTotal(cart.items); // Recalculate cart total
        await cart.save();
        res.json(cart);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Exporting the controller functions
module.exports = {
    addItemToCart,
    getCart,
    updateItemQuantity,
    removeItemFromCart
};
