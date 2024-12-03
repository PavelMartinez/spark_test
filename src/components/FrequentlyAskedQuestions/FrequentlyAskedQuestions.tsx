import Question from "../UI/primitives/Question/Question"
import "./FrequentlyAskedQuestions.scss"
import accordionProps from '../../shared/data/Accordion'

const FrequentlyAskedQuestions = () => {
    return (
			<div className='asked-questions'>
				<div className='asked-questions__title'>
					<h1 className='asked-questions__title-h1'>{ accordionProps.title }</h1>
				</div>
				<div className='asked-questions__content'>
					{accordionProps.questions.map((product, index) => (
						<Question key={index} product={product} />
					))}
				</div>
			</div>
		)
}

export default FrequentlyAskedQuestions