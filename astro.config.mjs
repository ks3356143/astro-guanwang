// @ts-check

import { defineConfig } from "astro/config"
import tailwindcss from "@tailwindcss/vite"

import preact from "@astrojs/preact"

export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },

    site: "https://chen-astro-guanwang.netlify.app/",
    integrations: [preact()],
})
