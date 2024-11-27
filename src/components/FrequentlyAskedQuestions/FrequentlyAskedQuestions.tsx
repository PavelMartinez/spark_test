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
						<input type='checkbox' className='item__checkbox' id='question-1' />
						<label className='item__label' htmlFor='question-1'></label>

						<p className='item__answer' id='answer-1'>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
							dolores vero iusto dolore et pariatur blanditiis eius eum
							praesentium nesciunt explicabo, quos temporibus exercitationem
							ipsa laudantium magni asperiores excepturi? Voluptatum?
						</p>
					</div>
					<div className='item'>
							<h3 className='item__text'>
								Что делать, если я получу плохой результат?
							</h3>
							<input
								type='checkbox'
								className='item__checkbox'
								id='question-2'
							/>
						<label className='item__label' htmlFor='question-2'></label>
						<p className='item__answer' id='answer-2'>
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