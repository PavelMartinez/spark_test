type BannerProps = {
	banner: {
		tag: string
		title: string
		description: string
		buttons: {
            button1: string
            button2: string
            button3: string
        }
	}
	loading: {
		androd: {
			title: string
			name: string
		}
		ios: {
			title: string
			name: string
		}
	}
	howToWork: {
		title: string
		description: string
		button: string
	}
	achievements: {
		achievement1: {
			title: string
			description: string
		}
		achievement2: {
			title: string
			description: string
		}
		achievement3: {
			title: string
			description: string
		}
	}
}

const SectionBanner: BannerProps = {
	banner: {
		tag: 'Undress anyone',
		title: 'Nude Generator',
		description:
			'Download the image to see any girl without clothes at theclick of a button',
		buttons: {
			button1: 'Telegram bot',
			button2: 'Launch up',
			button3: 'Instruction',
		},
	},
	loading: {
		androd: {
			title: 'DOWNLOAD THE APP ON',
			name: 'Android',
		},
		ios: {
			title: 'DOWNLOAD THE APP ON',
			name: 'IOS',
		},
	},
	howToWork: {
		title: 'Как это работает?',
		description:
			'Наша модель искуственного интеллекта обучена на тысячах фотографий. Она максимально точно передает то, как будет выглядеть человек обнажённым',
		button: 'Войти',
	},
	achievements: {
		achievement1: {
			title: '100 000+',
			description: 'Users every day',
		},
		achievement2: {
			title: 'User-friendly',
			description: 'And intuitive interface',
		},
		achievement3: {
			title: 'Realistic',
			description: 'Realistic image processing',
		},
	},
}

export default SectionBanner

