import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
    base: process.env.VITE_BASE_URL || "/",
    plugins: [vue(), tailwindcss()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
            "@app": path.resolve(__dirname, "src/app"),
            "@router": path.resolve(__dirname, "src/router"),
            "@layouts": path.resolve(__dirname, "src/layouts"),
            "@components": path.resolve(__dirname, "src/components"),
        },
    },
});
