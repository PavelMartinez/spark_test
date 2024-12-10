import "./UseGenerator.scss"
import Image from "next/image"
import GeneratorLock from "./assets/GeneratorLock.png"
import Upload from "./assets/Upload.png"
import Button from "../UI/primitives/Button/Button"
import { UploadSvg } from "../UI/svg"

const UseGenerator = ({ className = ''}) => {
    return ( 
			<div className={`generator ${className || ''}`}>
				<div className='generator__inner'>
					<div className='generator__inner-text'>
						<h1 className='generator__inner-title'>Use nude generator</h1>
						<p className='generator__inner-description'>
							It’s safe. We do not retain any data. It is completely confidential.
						</p>
					</div>
					<Image
						className='generator__inner-img'
						src={GeneratorLock}
						alt='GeneratorLock'
					/>
                    <div className='generator__inner-upload'>
                        <Image src={Upload} alt='Upload' className='generator__inner-upload-img'/>
                        <Button
                            variant='righticon'
                            color='white'
                            size='m'
                            icon={<UploadSvg className='color-dark' />}
							className="generator__inner-upload-button"
                        >
                            Upload
                        </Button>
                    </div>
				</div>
			</div>
		)
}

export default UseGenerator