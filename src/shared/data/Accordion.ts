type Questions = {
	title: string
	info: string
}
 

type AccordionProps = {
    title: string
    questions: Questions[]
}

const accordionProps: AccordionProps = {
	title: 'Frequently asked questions',
	questions: [
		{
			title: 'Какими картами можно оплатить?',
			info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		},
		{
			title: 'Что делать, если я получу плохой результат?',
			info: 'К сожалению, мы не можем Вам всегда гарантировать хороший результат. Но это на 90% зависит от того, какое фото вы используете. Все инструкции по загрузке фото преведены на соответствующей странице.',
		},
	],
}
	
export default accordionProps