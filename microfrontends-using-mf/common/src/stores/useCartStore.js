import create from "zustand";
import { persist } from 'zustand/middleware'

const useCartStore = create(persist(
  (set) => ({
    cart: [],
    isShowCartPanel: true,
    toggleCartPanel: () => set((state) => ({ isShowCartPanel: !state.isShowCartPanel })),
    addToCartIfNotInCart: (product) => {
      set((state) => {

        const cart = state.cart;
        const index = cart.findIndex((p) => p.idDrink == product.idDrink);
        if (index === -1) {
          product['quantity'] = 1;
          cart.push(product);
        }

        // increment quantity if product is already in cart
        if (index !== -1) {
          cart[index]['quantity'] = cart[index]['quantity'] + 1;
        }

        return { cart };
      });
    },
    removeFromCart: (productId) => {
      return set((state) => ({ cart: state.cart.filter((item) => item.idDrink != productId) }))
    },
  }), {
  name: 'cart', // unique name
  //getStorage: () => sessionStorage, // (optional) by default, 'localStorage' is used
}));

export default useCartStore;
