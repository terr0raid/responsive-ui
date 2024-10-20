import { PlayCircle, Trophy, Tunnel, Tv } from '@/assets/icons'
import Button from '@/components/ui/button'
import Feature from './feature'
import { BlueBox, GreenBox, PurpleCircle } from './badges'
import Sneakers from '@/assets/images/sneakers.png'
const features = [
	{
		title: 'Nibh viverra',
		description:
			'Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.',
		icon: <Trophy />,
		badge: (
			<span className='absolute top-0 -right-2 z-0'>
				<BlueBox />
			</span>
		),
	},

	{
		title: 'Cursus amet',
		description:
			'Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.',
		icon: <Tunnel />,
		badge: (
			<span className='absolute top-0 -right-0 z-0'>
				<GreenBox />
			</span>
		),
	},
	{
		title: 'Ipsum fermentum',
		description:
			'Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.',
		icon: <Tv />,
		badge: (
			<span className='absolute top-0 -right-3 z-0'>
				<PurpleCircle />
			</span>
		),
	},
]

export default function Header() {
	return (
		<main className='relative font-sans overflow-hidden bg-beige'>
			<div className='flex flex-col space-y-4 lg:space-x-10 py-6 px-2 justify-center items-center lg:flex-row lg:py-10 lg:px-10 z-10'>
				<div className='flex flex-col justify-center items-center lg:justify-start lg:items-start space-y-4 z-10'>
					<h1 className='text-heading-1 font-bold leading-heading-1 text-blue-gray mb-4 text-center lg:text-start z-10'>
						Collectible Sneakers
					</h1>
					<p className='text-blue-gray text-center lg:text-start mb-6'>
						Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
						suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultricies
						amet.
					</p>
					<div className='flex space-x-2'>
						<Button variant='primary' size='L' text='Sign up Now' />
						<Button
							variant='text'
							size='M'
							text='Watch Demo'
							iconLeft={<PlayCircle />}
						/>
					</div>
				</div>
				<div className='relative flex justify-center z-10'>
					<div className='absolute -bottom-4 w-3/4 h-[94%] bg-amber-400 rounded-[50px] z-0'></div>

					<img src={Sneakers} alt='Sneakers' className='relative z-10' />
				</div>
			</div>
			<div className='flex flex-col justify-center items-center lg:bg-transparent bg-amber-100 px-2 py-6 lg:p-10 space-x-0 space-y-4 lg:flex-row lg:space-x-10 lg:space-y-0'>
				{features.map((feature, index) => (
					<Feature
						key={index}
						title={feature.title}
						description={feature.description}
						icon={feature.icon}
						badge={feature.badge}
					/>
				))}
			</div>
			<div
				className='absolute w-screen h-full z-0 bottom-44 lg:top-36 lg:bottom-0'
				style={{
					background: 'linear-gradient(-30deg, #fef3c7 50%, #fdf7f1 50%)',
				}}
			></div>
		</main>
	)
}
