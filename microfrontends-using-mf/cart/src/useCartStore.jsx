import create from "zustand";

const useCartStore = create((set) => ({
  count: 15,
  isShowCartPanel: true,
  increment: () => set((state) => ({ count: state.count + 1 })),
  clear: () => set(() => ({ count: 0 })),
  cartPanelToggle: () => set((state) => ({ isShowCartPanel: !state.isShowCartPanel })),
}));

export default useCartStore;
