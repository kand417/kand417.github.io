import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "kand417",
  DESCRIPTION: "個人開発アプリを紹介するポートフォリオサイトです。",
  EMAIL: "",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Portfolio",
  DESCRIPTION:
    "kand417が開発したアプリケーションを紹介するポートフォリオです。",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "アプリ開発や個人開発の記録をまとめています。",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "kand417が開発したアプリケーションの紹介です。",
};

export const SOCIALS: Socials = [
  // {
  //   NAME: "X (formerly Twitter)",
  //   HREF: "https://twitter.com/boogerbuttcheek",
  // },
  {
    NAME: "GitHub",
    HREF: "https://github.com/kand417",
  },
  {
    NAME: "Website",
    HREF: "https://kand417.github.io/",
  },
];
