import { create } from "zustand";

interface LoginModalStore {
    isOpen: boolean;
    onClose: () => void;
    onOpen: () => void;
}

const usLoginModal = create<LoginModalStore>((set) => ({
    isOpen: false,
    onClose: () => set({ isOpen: false }),
    onOpen: () => set({ isOpen: true })
}));

export default usLoginModal;