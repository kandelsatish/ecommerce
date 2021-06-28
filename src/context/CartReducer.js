export const CartReducer = (state, action) => {
    const { shoppingCart, totalAmount, qty } = state;
    let product;
    let index;
    let updatedPrice;
    let updatedQuantity;
    switch (action.type) {
        case 'add-to-cart':
            const exist = shoppingCart.find(product => product.id === action.id)
            if (exist) {
                return state;
            } else {
                product = action.product;
                product['qty'] = 1;
                updatedQuantity = qty + 1;
                updatedPrice = totalAmount + product.price;
                return {
                    shoppingCart: [product, ...shoppingCart], totalAmount: updatedPrice,
                    qty: updatedQuantity
                }
            }
        case 'add':
            product = action.cartItem;
            product.qty = product.qty + 1;
            updatedPrice = totalAmount + product.price;
            updatedQuantity = qty + 1;
            index = shoppingCart.findIndex(cart => cart.id == action.id);
            shoppingCart[index] = product;
            return { shoppingCart: [...shoppingCart], totalAmount: updatedPrice, qty: updatedQuantity };
        
            case 'remove':
            product = action.cartItem;
            if (product.qty > 1) {
                product.qty = product.qty - 1;
                updatedPrice = totalAmount - product.price;
                updatedQuantity = qty - 1;
                index = shoppingCart.findIndex(cart => cart.id == action.id);
                shoppingCart[index] = product;
                return { shoppingCart: [...shoppingCart], totalAmount: updatedPrice, qty: updatedQuantity };
            } else {
                return state;
            }

        case 'delete': 
            const filtered = shoppingCart.filter((cart => cart.id !== action.id));
            product=action.cartItem;
            updatedQuantity = qty- product.qty;
            updatedPrice = totalAmount - product.price * product.qty;
            return { shoppingCart: [...filtered], totalAmount: updatedPrice, qty: updatedQuantity }
        default:
            return state
    }
}
