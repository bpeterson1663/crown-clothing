//Duplicate file of redux/cart/cart.utils. This is intentional at the moment
export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToAdd.id)
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: ++cartItem.quantity } : cartItem,
    )
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id)
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id)
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: --cartItem.quantity } : cartItem,
  )
}

export const filterItemFromCart = (cartItems, item) => cartItems.filter((cartItem) => cartItem.id !== item.id)

export const getCartItemsCount = (cartItems) => cartItems.reduce((acc, item) => (acc += item.quantity), 0)

export const getCartTotal = (cartItems) => cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0)
