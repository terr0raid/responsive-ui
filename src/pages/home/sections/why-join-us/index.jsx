import { Check } from '@/assets/icons'
import DesktopScreen from '@/components/screen/desktop-screen'
import Button from '@/components/ui/button'
import Thumbnail from '@/assets/images/thumbnail.jpeg'
import VideoDecor from './video-decor'

const items = [
	{
		icon: <Check />,
		text: 'Est et in pharetra magna adipiscing ornare aliquam.',
	},
	{
		icon: <Check />,
		text: 'Tellus arcu sed consequat ac velit ut eu blandit.',
	},
	{
		icon: <Check />,
		text: 'Ullamcorper ornare in et egestas dolor orci.',
	},
]

export default function WhyJoinUs() {
	return (
		<div className='relative bg-beige h-full w-full flex px-2 pt-2 pb-7 lg:px-10 lg:py-20 justify-center'>
			<div className='bg-white rounded-[30px] shadow-card-dark-xl px-2 py-4 lg:p-10 w-full'>
				<div className='w-full flex flex-col lg:flex-row items-start justify-between gap-8 lg:items-center lg:justify-start'>
					<div className='lg:w-1/2 z-10 space-y-3 flex flex-col items-center justify-center lg:items-start'>
						<h2 className='text-heading-5 lg:text-heading-2 text-center'>
							Why join us
						</h2>
						<ul>
							{items.map((item, index) => (
								<li key={index} className='flex items-start gap-1'>
									{item.icon}
									<p className='text-body-m lg:text-body-xl'>{item.text}</p>
								</li>
							))}
						</ul>
						<Button variant='primary' size='L' text={'Sign up now'} />
					</div>
					<div className='relative lg:w-1/2 h-full z-10'>
						<DesktopScreen
							image={Thumbnail}
							screen='Video'
							circles={true}
							arrows={false}
							addressBar={false}
						/>
						<span className='absolute w-6 h-6 lg:w-[86px] lg:h-[86px] bg-[#15803D] opacity-75 rounded-full -bottom-3 lg:-bottom-5 left-6 lg:left-10 z-0' />
					</div>
				</div>
			</div>
			<VideoDecor className='absolute w-1/2 h-full right-5 top-0 z-0' />
		</div>
	)
}
