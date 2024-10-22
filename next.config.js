const nextConfig = {
	sassOptions: {
		additionalData: `@import "src/styles/_mixins.scss"; @import "src/styles/_fonts.scss";  @import "src/styles/_media.scss";`,
	},

	webpack(config) {
		// Grab the existing rule that handles SVG imports
		const fileLoaderRule = config.module.rules.find(rule =>
			rule.test?.test?.('.svg')
		)

		config.module.rules.push(
			// Reapply the existing rule, but only for svg imports ending in ?url
			{
				...fileLoaderRule,
				test: /\.svg$/i,
				resourceQuery: /url/, // *.svg?url
			},
			// Convert all other *.svg imports to React components
			{
				test: /\.svg$/i,
				issuer: fileLoaderRule.issuer,
				resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
				use: ['@svgr/webpack'],
			}
		)

		// Modify the file loader rule to ignore *.svg, since we have it handled now.
		fileLoaderRule.exclude = /\.svg$/i

		return config
	},

	// webpack(config) {
	// 	// Находим стандартную загрузку изображений и исключаем из неё SVG
	// 	config.module.rules.push({
	// 		test: /\.svg$/,
	// 		use: [
	// 			{
	// 				loader: '@svgr/webpack',
	// 				options: {
	// 					// Настраиваем возможности svgr, например, убираем префикс "svg" для атрибутов
	// 					svgoConfig: {
	// 						plugins: [
	// 							{
	// 								name: 'removeViewBox',
	// 								active: false,
	// 							},
	// 						],
	// 					},
	// 				},
	// 			},
	// 		],
	// 	})

	// 	return config
	// },
}

module.exports = nextConfig