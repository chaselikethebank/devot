import { defineConfig } from "vitepress";

export default defineConfig({
    title: "Devot",
    description: "Devotions for the 2nd Baptist music team",
    head: [
        ['link', { rel: 'icon', type: 'image/png', href: '/circle-xxl.png' }]
    ],
    themeConfig: {
        search: { provider: "local" },
        logo: "/amore-fati.svg",
        sidebar: [{
                text: "Devotions",
                items: [
                    { text: "Archive", link: "/devos/" },
                    { text: "The Delta Is the Work", link: "/devos/001-the-delta-is-the-work" },
                    { text: "Vision Is a Gift", link: "/devos/002-vision-is-a-gift" },
                    { text: "Makers Gotta Make", link: "/devos/003-makers-gotta-make" },
                ],
            },
        ],
        footer: {
            message: "What you practice in private, you play in public.",
            copyright: "Released under the MIT License. Copyright © 2025-present cd.t",
        },
        returnToTopLabel: "Go to Top",
        sidebarMenuLabel: "Menu",
    },
});