import UseInstruction from '@/components/UI/primitives/UseInstruction/UseInstruction'
import './style.scss'

export default function GeneratePage() {
    return (
        <section className='generate container'>
            <h1>Generate</h1>
            <UseInstruction />
        </section>
    )
}