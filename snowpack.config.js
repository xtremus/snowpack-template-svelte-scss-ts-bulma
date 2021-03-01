// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
	mount: {
		public: { url: "/", static: true },
		src: "/dist",
	},
	plugins: [
		"@snowpack/plugin-svelte",
		"@snowpack/plugin-sass",
		"@snowpack/plugin-typescript",
	],
	packageOptions: {
		installTypes: true,
		polyfillNode: true,
	},
	devOptions: {
		port: 5000,
	},
	buildOptions: {
		clean: true,
	},
	optimize: {
		bundle: true,
		minify: true,
		treeshake: true,
		target: "es2020",
	},
};