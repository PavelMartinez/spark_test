import './style.scss'
import Login from '@/components/Login/Login'

export default function LoginPage() {
    return (
			<section className='login container reset-margin'>
				<Login variant='registration' />
			</section>
		)
}