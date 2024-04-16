import create from 'zustand';

// Define a type for the user state
type UserState = {
    user: boolean;
    text: string;
    isLoading: boolean; // New isLoading state
    setUser: (newUser: boolean) => void;
    setText: (newText: string) => void;
    setIsLoading: (loading: boolean) => void; // Setter for isLoading
};

// Create a Zustand store for user state
export const useUserStore = create<UserState>((set) => ({
    user: false, // Initial user state
    text: '', // Initial text state
    isLoading: false, // Initial isLoading state
    setUser: (newUser) => set({ user: newUser }),
    setText: (newText) => set({ text: newText }),
    setIsLoading: (loading) => set({ isLoading: loading }), // Setter for isLoading
}));
