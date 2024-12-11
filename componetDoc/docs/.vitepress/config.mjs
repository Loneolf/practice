import { defineConfig } from "vitepress";
import {
	demoblockPlugin,
	demoblockVitePlugin,
} from "vitepress-theme-demoblock";
import vueJsx from "@vitejs/plugin-vue-jsx";
import path from "path";

import sidebar from "./sidebar";

export default defineConfig({
	title: "文档库",
	description: "组件库",
	themeConfig: {
		cleanUrls: true,
		markdown: {
			theme: { light: "github-light", dark: "github-dark" },
			image: {
				// 开启图片懒加载
				lazyLoading: true,
			},
			config: (md) => {
				md.use(demoblockPlugin, {
					customClass: "demoblock-custom",
				});
			},
		},

		vite: {
			plugins: [demoblockVitePlugin(), vueJsx()],
			resolve: {
				alias: {
					"@c": path.resolve(__dirname, "../com"),
					"@vc": path.resolve(__dirname, "../vueCom"),
				},
			},
		},

		nav: [
			{ text: "组件", link: "/componet/timeSelect", activeMatch: "/componet/" },
			{ text: "工具", link: "/tool/filedsIndex", activeMatch: "/tool/" },
			{ text: "文档", link: "/tooldoc/time", activeMatch: "/tooldoc/" },
		],

		sidebar,

		//  开启搜索功能
		search: {
			provider: "local",
		},
	},
});
