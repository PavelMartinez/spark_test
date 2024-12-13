import { AdvertisingVector } from "../UI/svg"
import Image from "next/image"
import AdvertisingBanana from "./assets/AdvertisingBanana.png"
import AdvertisingChili from "./assets/AdvertisingChili.png"
import AdvertisingEggplant from "./assets/AdvertisingEggplant.png"
import "./Advertising.scss"

const Advertising = () => {
    return (
			<div className='advertising'>
				<div className='advertising__text'>
					<div className='advertising__text-title'>
						<h2 className='advertising__text-title-h2'>
							UNDRESS THE PHOTO USING AI FOR FREE!
						</h2>
					</div>
					<p className='advertising__text-description'>
						После того, как вы загрузите фото, а наше приложение оперативно его
						обработает, вам будет предложена оплата. Только после оплаты вы
						получите сгенерированное изображение.
					</p>
					<div className='advertising__text-button'>
						<p className='advertising__text-button-text'>
							Ниже находятся примеры наших изображений
						</p>
						<AdvertisingVector />
					</div>
				</div>
				<Image
					src={AdvertisingBanana}
					alt='AdvertisingBanana'
					className='advertising__image advertising__image--banana'
				/>
				<Image
					src={AdvertisingChili}
					alt='AdvertisingChili'
					className='advertising__image advertising__image--chili'
				/>
				<Image
					src={AdvertisingEggplant}
					alt='AdvertisingEggplant'
					className='advertising__image advertising__image--eggplant'
				/>
			</div>
		)
}

export default Advertising