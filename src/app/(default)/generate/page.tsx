import UseInstruction from '@/components/UI/primitives/UseInstruction/UseInstruction'
import './style.scss'

export default function GeneratePage() {
    return (
			<section className='generate container reset-padding-mobile margin-top'>
				<div className='generate__instructions'>
					<h3 className='generate__instructions-title'>
						HOW TO IMPROVE RESULT
					</h3>
					<UseInstruction variant='generate' />
				</div>
			</section>
		)
}