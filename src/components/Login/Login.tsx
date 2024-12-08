import "./Login.scss";
import Image from "next/image";
import LoginMainImg from "../../../public/LoginMainImg.png";
import Button from "../UI/primitives/Button/Button";
import { TelegramSvg } from "../UI/svg";

const Login = () => {
    return (
			<div className='main-login'>
				<div className='main-login__inner'>
					<Image
						src={LoginMainImg}
						alt='LoginMainImg'
						className='main-login__inner-image'
					/>
				</div>
				<div className='main-login__content'>
					<div className='main-login__content-inner'>
						<div className='main-login__content-text'>
							<h1 className='main-login__content-title'>
								Undress your girl online
							</h1>
							<p className='main-login__content-description'>
								Neural network removes clothes with help of AI
							</p>
						</div>
						<div className='main-login__content-buttons'>
							<Button
								variant='righticon'
								color='green'
								size='s'
								className='main-login__content-button main-login__content-button--create-account'
							>
								Create account
							</Button>
							<Button
								variant='righticon'
								color='blue'
								size='s'
								icon={<TelegramSvg />}
								className='main-login__content-button main-login__content-button--telegram'
							>
								Telegram bot
							</Button>
						</div>
					</div>
				</div>
			</div>
		)
};

export default Login;