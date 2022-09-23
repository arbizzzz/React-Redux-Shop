export const getCartProducts = (cartItems, products) => {
  if (cartItems.length === 0) return;
  const itemsInCart = [];
  cartItems.map((item, index) => {
    let count = item.count;
    itemsInCart.push(...products.filter((product) => item.id === product.id));
    itemsInCart[index]['count'] = count;
    return [...itemsInCart];
  });
  return [...itemsInCart];
};
