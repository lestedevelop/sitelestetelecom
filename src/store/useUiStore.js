"use client";

import { create } from "zustand";

export const useUiStore = create((set) => ({
    isSelectCityOpen: false,
    isConfirmCityOpen: false,
    openSelectCity: () => {
        set({ isSelectCityOpen: true });
    },
    closeSelectCity: () => set({ isSelectCityOpen: false }),
    setSelectCityOpen: (open) => set({ isSelectCityOpen: !!open }),
    openConfirmCity: () => set({ isConfirmCityOpen: true }),
    closeConfirmCity: () => set({ isConfirmCityOpen: false }),
    setConfirmCityOpen: (open) => set({ isConfirmCityOpen: !!open }),
}));
