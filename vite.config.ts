import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
    base: process.env.VITE_BASE_URL || "/",
    plugins: [vue(), tailwindcss()],
    resolve: {
        alias: {
            "@": path.resolve(import.meta.dirname, "src"),
            "@app": path.resolve(import.meta.dirname, "src/app"),
            "@router": path.resolve(import.meta.dirname, "src/router"),
            "@layouts": path.resolve(import.meta.dirname, "src/layouts"),
            "@domains": path.resolve(import.meta.dirname, "src/domains"),
            "@components": path.resolve(import.meta.dirname, "src/components"),
        },
    },
});
