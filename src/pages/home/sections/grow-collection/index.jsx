import DesktopScreen from '@/components/screen/desktop-screen'
import React, { useRef, useEffect, useState } from 'react'
import SidebarNav from './sidebar'
import Thumbnail from '@/assets/images/thumbnail.jpeg'
import Leg from '@/assets/images/leg.jpeg'
import Shoes from '@/assets/images/shoes.jpeg'

export default function GrowCollection() {
	return (
		<div className='flex w-full h-full flex-col justify-start items-start px-10 pb-[128px] pt-10 gap-10'>
			<div className='flex flex-col gap-1'>
				<h2 className='lg:text-heading-2'>Grow your collection</h2>
				<p className='lg:text-body-l'>
					Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh
					amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames
					sit rhoncus. Nec magna sed interdum sit purus tellus. Et volutpat
					proin neque placerat at bibendum quam tellus.
				</p>
			</div>
			<div className='flex flex-row w-full h-full gap-10'>
				<SidebarNav />
				<div className='relative h-full w-full'>
					<div className='absolute top-0 w-[80%] aspect-[16/9]'>
						<DesktopScreen
							circles
							image={Thumbnail}
							screen='Image'
							className='h-full'
						/>
					</div>
					<div className='absolute top-14 left-14 w-[80%] aspect-[16/9]'>
						<DesktopScreen
							circles
							image={Shoes}
							screen='Image'
							className='h-full'
						/>
					</div>

					<div className='absolute -right-0 w-[34%] top-[200px]'>
						<div className='aspect-square rounded-[10px] overflow-hidden shadow-dark-xxl border-[5px] border-white'>
							<img
								src={Leg}
								alt='White sneaker balancing on yellow curved object'
								className='w-full h-full object-cover rounded-[5px]'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
