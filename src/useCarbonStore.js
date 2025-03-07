import { create } from "zustand";

// Create Zustand store
const useCarbonStore = create((set) => ({
    history: JSON.parse(localStorage.getItem("carbonHistory")) || [],

    addEntry: (entry) => set((state) => {
        const updatedHistory = [
            {
                carbonFootprint: entry.carbonFootprint,
                recommendations: entry.recommendations.split("**").map(point => point.trim()) // Split recommendations into points
            },
            ...state.history
        ];
        localStorage.setItem("carbonHistory", JSON.stringify(updatedHistory));
        return { history: updatedHistory };
    }),

    clearHistory: () => set(() => {
        localStorage.removeItem("carbonHistory");
        return { history: [] };
    })
}));

export default useCarbonStore;
