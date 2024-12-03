import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ADAMANT Messenger",
  description:
    "Guide for setting up, contributing, and collaborating on the ADAMANT Messenger open-source project",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Quick Start", link: "/quick-start" },
    ],

    sidebar: [
      {
        text: "Quick Start",
        items: [{ text: "Installation", link: "/quick-start" }],
      },
      {
        text: "Development Flow",
        items: [
          { text: "Task Management", link: "/task-management" },
          { text: "Pull Requests", link: "/pull-requests" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/adamant-im/adamant-im" },
      { icon: "x", link: "https://x.com/adamant_im" },
      {
        icon: "slack",
        link: "https://join.slack.com/t/adamant-im/shared_invite/zt-3n32uqh3-TmTM4qPAKcp3PzrPMtKETQ",
      },
    ],
  },
});
