import create from 'zustand';

// Define a type for the user state
type UserState = {
    user: boolean;
    text: string;
    isLoading: boolean; // New isLoading state
    resOneText: string;
    resTwoText: string;
    resOne: boolean;
    resTwo: boolean;
    setResOne: (res: boolean) => void;
    setResTwo: (res: boolean) => void;
    setUser: (newUser: boolean) => void;
    setResOneText: (newText: string) => void;
    setResTwoText: (newText: string) => void;
    setText: (newText: string) => void;
    setIsLoading: (loading: boolean) => void; // Setter for isLoading
};

// Create a Zustand store for user state
export const useUserStore = create<UserState>((set) => ({
    user: false, // Initial user state
    text: '', // Initial text state
    resOneText: '', // Initial text state
    resTwoText: '', // Initial text state
    isLoading: false, // Initial isLoading state
    resOne: true, // Initial resOne state
    resTwo: true, // Initial resTwo state
    setResOne: (res) => set({ resOne: res }),
    setResTwo: (res) => set({ resTwo: res }),
    setUser: (newUser) => set({ user: newUser }),
    setText: (newText) => set({ text: newText }),
    setResOneText: (newText) => set({ text: newText }),
    setResTwoText: (newText) => set({ text: newText }),
    setIsLoading: (loading) => set({ isLoading: loading }), // Setter for isLoading
}));
