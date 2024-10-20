import React from 'react'
import PropTypes from 'prop-types'
import { Play } from '@/assets/icons'

DesktopScreen.propTypes = {
	circles: PropTypes.bool,
	addressBar: PropTypes.bool,
	arrows: PropTypes.bool,
	screen: PropTypes.oneOf(['Video', 'Image']),
	image: PropTypes.string,
}

export default function DesktopScreen({
	circles = true,
	addressBar = false,
	arrows = false,
	screen = 'Video',
	image,
}) {
	return (
		<div className='w-full h-full bg-opacity-0'>
			<div className='h-full rounded-[20px] shadow-card-dark-xxl'>
				{circles && (
					<div className='h-[41px] bg-white flex items-center space-x-[5px] rounded-t-[20px] py-1 px-2'>
						<div className='w-1 h-1 rounded-full bg-red-500'></div>
						<div className='w-1 h-1 rounded-full bg-yellow-500'></div>
						<div className='w-1 h-1 rounded-full bg-green-500'></div>
					</div>
				)}
				{addressBar &&
					{
						/* Address bar */
					}}
				<div className='relative h-full w-full bg-white rounded-b-[20px] pb-[5px] px-[5px]'>
					<img
						src={image}
						alt='Video player'
						className='w-full h-full object-cover rounded-b-[15px]'
					/>

					{screen === 'Video' && (
						<div className='absolute inset-0 flex items-center justify-center bg-white bg-opacity-0'>
							<div className='rounded-full bg-[#121619BF] bg-opacity-75 py-3 pl-[28px] pr-[20px]'>
								<Play />
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}
