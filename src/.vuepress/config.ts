import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/naruto/",

  lang: "zh-CN",
  title: "鸣人同学",
  description: "有话直说，说到做到！",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
