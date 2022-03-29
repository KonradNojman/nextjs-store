interface CartItem {
  readonly id: number;
  readonly price: number;
  readonly title: string;
  readonly count: number;
}

export const getCartItemsFromStorage = () => {
  const itemsFromLocalStorage = localStorage.getItem("SHOPINEXT_CART");
  if (!itemsFromLocalStorage) {
    return [];
  }
  try {
    const items = JSON.parse(itemsFromLocalStorage);
    return items;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const setCartItemInStorage = (cartItems: CartItem[]) => {
  localStorage.setItem("SHOPINEXT_CART", JSON.stringify(cartItems));
};
