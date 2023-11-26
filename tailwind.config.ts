import type {Config} from "tailwindcss"

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            screens: {
                xsm: "500px",
                "2md": "860px",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },

            colors: {
                container: "#202020",
                text: "#bcbcbc",
                fade: "#303030",
            },

            animation: {
                marquee: "marquee 35s linear infinite ",
                scaling: "scaling 500ms linear 1 forwards ",
            },
            keyframes: {
                marquee: {
                    "0%": {transform: "translateX(100px)"},
                    "100%": {transform: "translateX(-100%)"},
                },
                scaling: {
                    "0%": {transform: "scale(0.8)"},
                    "100%": {transform: "scale(1)"},
                },
            },
        },
    },
    plugins: [],
}
export default config
