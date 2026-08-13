import { defineStore } from 'pinia'

export const useStyleCvStore = defineStore('styleCv', {
    state: () => ({
        fontFamily: "sans-serif",
        primaryColor: "sky-950",
        secondaryColor: "sky-900",
    }),
    getters: {
        getFontFamily: (state) => state.fontFamily,
        getPrimaryColor: (state) => state.primaryColor,
        getSecondaryColor: (state) => state.secondaryColor,
    },
    actions: {
        setFontFamily(fontFamily: string) {
            this.fontFamily = fontFamily;
        },
        setPrimaryColor(primaryColor: string) {
            this.primaryColor = primaryColor;
        },
        setSecondaryColor(secondaryColor: string) {
            this.secondaryColor = secondaryColor;
        },
    },
});