import create from 'zustand';

// Define a type for the user state
type UserState = {
    user: boolean;
    text: string;
    setUser: (newUser: boolean) => void;
    setText: (newText: string) => void;
};

// Create a Zustand store for user state
export const useUserStore = create<UserState>((set) => ({
    user: false, // Initial user state
    text: '', // Initial text state
    setUser: (newUser) => set({ user: newUser }),
    setText: (newText) => set({ text: newText }),
}));
