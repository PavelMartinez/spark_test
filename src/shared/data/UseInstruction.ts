import ImageWrong1 from '../images/ImageWrong1.png'
import ImageWrong2 from '../images/ImageWrong2.png'
import ImageWrong3 from '../images/ImageWrong3.png'
import ImageWrong4 from '../images/ImageWrong4.png'
import ImageWrong5 from '../images/ImageWrong5.png'
import ImageRight1 from '../images/ImageRight1.png'
import ImageRight2 from '../images/ImageRight2.png'
import ImageRight3 from '../images/ImageRight3.png'
import ImageRight4 from '../images/ImageRight4.png'
import ImageRight5 from '../images/ImageRight5.png'


const UseInstructionImages = [
	ImageWrong1,
	ImageWrong2,
	ImageWrong3,
	ImageWrong4,
	ImageWrong5,
	ImageRight1,
	ImageRight2,
	ImageRight3,
	ImageRight4,
	ImageRight5,
]

const UseInstructionProps = [
	{
		title: 'AVOID BAGGY CLOTHES',
		description: 'Images with tighter clothing give better results.',
	},
	{
		title: 'PRESENCE OF UNAUTHORIZED PEOPLE',
		description: 'Images with tighter clothing give better results.',
	},
	{
		title: 'THE MAN SHOULD BE POSITIONED IN THE CENTER ',
		description:
			'You need to crop unnecessary edges of the photo, if it is a screenshot - crop the photo to the original).',
	},
	{
		title: 'THE IMAGE MUST BE OF HIGH QUALITY',
		description:
			'Upload good to medium quality images. The lighter the photo, the better the result.',
	},
	{
		title: 'CHOOSE SIMPLE POSES',
		description:
			'It is ideal for neural network if the person in the photo will stand in a normal pose. When the pose is complex, the processing is worse, the body position may change.',
	},
]

export { UseInstructionImages, UseInstructionProps }
