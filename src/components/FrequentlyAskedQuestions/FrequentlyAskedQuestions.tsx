import "./FrequentlyAskedQuestions.scss"

const FrequentlyAskedQuestions = () => {
    return (
			<div className='asked-questions'>
				<div className='asked-questions__title'>
					<h1 className='asked-questions__title-h1'>
						Frequently asked questions
					</h1>
				</div>
				<div className='asked-questions__content'>
					<div className='item '>
						<h3 className='item__text'>Какими картами можно оплатить?</h3>
						<button className='item__button '></button>
					</div>
					<div className='item item--active '>
						<div className='item__content'>
							<h3 className='item__text'>
								Что делать, если я получу плохой результат?
							</h3>
							<button className='item__button item__button--active'></button>
						</div>  
						
							<p className='item__answer'>
								К сожалению, мы не можем Вам всегда гарантировать хороший
								результат. Но это на 90% зависит от того, какое фото вы
								используете. Все инструкции по загрузке фото преведены на
								соответствующей странице.
							</p>
						
					</div>
				</div>
			</div>
		)
}

export default FrequentlyAskedQuestions