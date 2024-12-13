'use client'

import "./Login.scss";
import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import LoginMainImg from "../../../public/LoginMainImg.png";
import Button from "../UI/primitives/Button/Button";
import { AppleSvg, ClosedEye, GoogleSVG, OpenEye, TelegramSvg } from "../UI/svg";

interface LoginProps {
	variant: 'default' | 'registration' | 'login'
}

const Login: React.FC<LoginProps> = ({ variant = 'default', ...props}) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const [isPasswordVisible, setPasswordVisible] = useState(false)

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		console.log('Email:', email, 'Password:', password)
	}

	const togglePasswordVisibility = () => {
		setPasswordVisible(!isPasswordVisible)
	}
    return (
			<div {...props} className='main-login'>
				<div className='main-login__inner'>
					<Image
						src={LoginMainImg}
						alt='LoginMainImg'
						className='main-login__inner-image'
					/>
				</div>
				{variant === 'default' && (
					<div
						className={`main-login__content main-login__content--${variant}`}
					>
						<div className='main-login__content-inner'>
							<div className='main-login__content-text'>
								<h1 className='main-login__content-title main-login__content-title--default'>
									Undress your girl online
								</h1>
								<p className='main-login__content-description'>
									Neural network removes clothes with help of AI
								</p>
							</div>
							<div className='main-login__content-buttons'>
								<Button
									href='/login'
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
				)}
				{variant === 'login' && (
					<div
						className={`main-login__content main-login__content--${variant}`}
					>
						<div
							className={`main-login__content-inner main-login__content-inner--${variant}`}
						>
							<h2 className='main-login__content-title'>Вход в аккаунт</h2>
							<div className='main-login__form'>
								<div className='main-login__form-social'>
									<p className='main-login__form-social-text'>
										Через соц. сети
									</p>
									<div className='main-login__form-social-buttons'>
										<Link
											href='/'
											className='main-login__form-social-button icon'
										>
											<GoogleSVG />
										</Link>
										<Link
											href='/'
											className='main-login__form-social-button icon'
										>
											<AppleSvg />
										</Link>
									</div>
								</div>
								<form
									onSubmit={handleSubmit}
									className='main-login__form-input'
								>
									<span className='main-login__form-input-span'>Или</span>
									<input
										className='main-login__form-input-email'
										type='email'
										id='email'
										name='email'
										placeholder='E-mail'
										value={email}
										onChange={e => setEmail(e.target.value)}
										required
									/>
									<div style={{ position: 'relative' }}>
										<input
											className='main-login__form-input-password'
											type={isPasswordVisible ? 'text' : 'password'}
											id='password'
											name='password'
											placeholder='Пароль'
											value={password}
											onChange={e => setPassword(e.target.value)}
											required
										/>
										<button
											type='button'
											onClick={togglePasswordVisibility}
											style={{
												position: 'absolute',
												top: '3px',
												right: '24px',
												height: '100%',
												border: 'none',
												background: 'none',
												cursor: 'pointer',
											}}
										>
											{isPasswordVisible ? <OpenEye /> : <ClosedEye />}
										</button>
									</div>
									<Link
										href='/'
										className='main-login__form-input-forgot-password'
									>
										Я забыл пароль
									</Link>
									<div className='main-login__form-buttons'>
										<Button
											type='submit'
											variant='righticon'
											color='green'
											size='s'
											className='main-login__content-button main-login__content-button--create-account '
										>
											Login
										</Button>
										<p className='main-login__form-buttons-text'>
											Нет аккаунта?{' '}
											<Link
												href='/registration'
												className='main-login__form-buttons-link'
											>
												Зарегистрироваться
											</Link>
										</p>
									</div>
								</form>
							</div>
						</div>
					</div>
				)}
				{variant === 'registration' && (
					<div
						className={`main-login__content main-login__content--${variant}`}
					>
						<div
							className={`main-login__content-inner main-login__content-inner--${variant}`}
						>
							<h2 className='main-login__content-title'>Регистрация</h2>
							<div className='main-login__form'>
								<div className='main-login__form-social'>
									<p className='main-login__form-social-text'>
										Через соц. сети
									</p>
									<div className='main-login__form-social-buttons'>
										<Link
											href='/'
											className='main-login__form-social-button icon'
										>
											<GoogleSVG />
										</Link>
										<Link
											href='/'
											className='main-login__form-social-button icon'
										>
											<AppleSvg />
										</Link>
									</div>
								</div>

								<form
									onSubmit={handleSubmit}
									className='main-login__form-input'
								>
									<span className='main-login__form-input-span'>Или</span>
									<input
										className='main-login__form-input-email'
										type='email'
										id='email'
										name='email'
										placeholder='E-mail'
										value={email}
										onChange={e => setEmail(e.target.value)}
										required
									/>
									<div style={{ position: 'relative' }}>
										<input
											className='main-login__form-input-password'
											type={isPasswordVisible ? 'text' : 'password'}
											id='password'
											name='password'
											placeholder='Пароль'
											value={password}
											onChange={e => setPassword(e.target.value)}
											required
										/>
										<button
											type='button'
											onClick={togglePasswordVisibility}
											style={{
												position: 'absolute',
												top: '3px',
												right: '24px',
												height: '100%',
												border: 'none',
												background: 'none',
												cursor: 'pointer',
											}}
										>
											{isPasswordVisible ? <OpenEye /> : <ClosedEye />}
										</button>
									</div>
									<div className='main-login__form-checkbox-container'>
										<div className='main-login__form-checkbox'>
											<input
												type='checkbox'
												id='privacyPolicy'
												name='privacyPolicy'
												required
											/>
											<label htmlFor='privacyPolicy' style={{textAlign: 'left'}}>
												Я соглашаюсь, с{' '}
												<a href='/privacy-policy' target='_blank'>
													политикой конфиденциальности
												</a>
											</label>
										</div>
										<div className='main-login__form-checkbox'>
											<input
												type='checkbox'
												id='ageConfirmation'
												name='ageConfirmation'
												required
											/>
											<label htmlFor='ageConfirmation'>
												Я подтверждаю, что мне есть 18 лет
											</label>
										</div>
									</div>
									<div className='main-login__form-buttons'>
										<Button
											type='submit'
											variant='righticon'
											color='green'
											size='s'
											className='main-login__content-button main-login__content-button--create-account'
										>
											Login
										</Button>
										<p className='main-login__form-buttons-text'>
											Есть аккаунт?{' '}
											<Link
												href='/login'
												className='main-login__form-buttons-link'
											>
												Войти
											</Link>
										</p>
									</div>
								</form>
							</div>
						</div>
					</div>
				)}
			</div>
		)
};

export default Login;