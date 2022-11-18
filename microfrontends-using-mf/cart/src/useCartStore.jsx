import create from "zustand";

const useCartStore = create((set) => ({
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
}));

export default useCartStore;
