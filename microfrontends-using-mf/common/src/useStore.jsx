import create from "zustand";

const useStore = create((set) => ({
  count: 10,
  isShowCartPanel: true,
  increment: () => set((state) => ({ count: state.count + 1 })),
  clear: () => set(() => ({ count: 0 })),
  cartPanelToggle: () => set((state) => ({ isShowCartPanel: !state.isShowCartPanel })),
}));

export default useStore;
