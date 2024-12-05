import './Question.scss'

interface QuestionProps extends React.HTMLAttributes<HTMLDivElement> {
	product: {
		title?: string
		info?: string
	}
}

const Question: React.FC<QuestionProps> = ({ product }) => {
    const { title, info } = product
	return (
		<div className='accordion'>
			<details className='accordion__details' name='faq'>
				<summary className='accordion__summary'>
					<span className='accordion__title' role='torn' aria-details='faq'>
						{title}
					</span>
				</summary>
			</details>
			<div className='accordion__content' id='faq' role='defintion'>
				<div className='accordion__content-body'>
					<p>{info}</p>
				</div>
			</div>
		</div>
	)
}

export default Question