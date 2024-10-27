import './Generation.scss'
import Cross from './assets/Cross.svg'
import Pencil from './assets/Pencil.svg'
import ApiGeneration from './assets/ApiGeneration.svg'

interface GenerationProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	leftIcon?: React.ReactNode
	rightIcon?: React.ReactNode
}

export const Generation: React.FC<GenerationProps> = ({
	className,
	leftIcon,
	...props
}) => {
	return (
		<button {...props} className={`generation-selector ${className}`}>
			<Pencil />
			<Cross />
			<ApiGeneration width={45} height={45} />
	    </button>
	)
}
