import create from "zustand";

const useCartStore = create((set) => ({
  cart: [],
  count: 15,
  isShowCartPanel: true,
  increment: () => set((state) => ({ count: state.count + 1 })),
  clear: () => set(() => ({ count: 0 })),
  toggleCartPanel: () => set((state) => ({ isShowCartPanel: !state.isShowCartPanel })),
}));

export default useCartStore;
