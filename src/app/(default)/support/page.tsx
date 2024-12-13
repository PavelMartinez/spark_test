import './style.scss'
import SupportApi from '@/components/SupportApi/SupportApi'
import FrequentlyAskedQuestions from '@/components/FrequentlyAskedQuestions/FrequentlyAskedQuestions'
import UseGenerator from '@/components/UseGenerator/UseGenerator'

export default function SupportPage() {
    return (
			<section className='support container reset-padding-mobile margin-top'>
				<SupportApi />
				<div className='support__questions'>
					<FrequentlyAskedQuestions />
				</div>
				<UseGenerator />
			</section>
		)
}