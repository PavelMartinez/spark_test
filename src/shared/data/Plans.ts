
type icons = {
	src: string
	alt: string
	width: number
	height: number
	key: number
}

type Plan = {
	variant: 'default' | 'popular'
	product: {
		title?: string
		coins?: number
		newPrice?: string
		oldPrice?: string
		achievements?: Array<string>
		icons?: icons[]
	}
	iconMain?: string
}

const PlansProps: Array<Plan> = [
	{
		variant: 'default',
		product: {
			title: 'Basic',
			coins: 8,
			newPrice: '600 000',
			oldPrice: '500 000',
			achievements: ['Medium quality', 'No queue', '4 Requests', '$1 / image'],
			icons: [
				{
					src: './assets/Emoji1.png',
					alt: 'Emoji1',
					width: 33,
					height: 33,
					key: 0,
				},
				{
					src: './assets/Emoji1.png',
					alt: 'Emoji1',
					width: 33,
					height: 33,
					key: 0,
				},
				{
					src: './assets/Emoji1.png',
					alt: 'Emoji1',
					width: 33,
					height: 33,
					key: 0,
				},
				{
					src: './assets/Emoji1.png',
					alt: 'Emoji1',
                    width: 33,
                    height: 33,
                    key: 0,
				},
			],
		},
        
	},
]

export default PlansProps