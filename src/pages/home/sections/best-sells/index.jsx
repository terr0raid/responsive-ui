import Button from '@/components/ui/button'
import Card1 from '@/assets/images/card_1.png'
import Card2 from '@/assets/images/card_2.png'
import Card3 from '@/assets/images/card_3.png'
import Card from '@/components/product-card'
import { ShoppingCart } from '@/assets/icons'
import { BacklightHorizontal, BacklightVertical } from './backlight'

const cards = [
	{
		title: 'Title',
		text: 'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.',
		image: Card1,
	},
	{
		title: 'Title',
		text: 'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.',
		image: Card2,
	},
	{
		title: 'Title',
		text: 'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.',
		image: Card3,
	},
]

export default function BestSells() {
	return (
		<div className='relative h-full w-full min-h-screen'>
			<div className='px-2 py-6 lg:p-10 flex flex-col h-full w-full bg-blue-gray lg:gap-10 gap-4'>
				<header className='flex flex-col gap-4 justify-between items-center lg:flex-row lg:gap-0'>
					<h2 className='text-heading-5 lg:text-heading-2 leading-heading-2 font-extrabold text-white text-center'>
						The best of the best
					</h2>
					<Button variant='secondary' size='XL' text='Sign up now' />
				</header>
				<main className='relative flex flex-col justify-between space-y-6 space-x-0 items-center w-full lg:flex-row lg:space-x-6 lg:space-y-0'>
					{cards.map((card, index) => (
						<Card
							key={index}
							{...card}
							buttonText='Buy Now'
							icon={<ShoppingCart />}
						/>
					))}
				</main>
			</div>
			<div className='absolute w-full top-[22%] z-0'>
				<BacklightHorizontal className='lg:block hidden' />
			</div>
			<div className='absolute w-[50%] top-[32.4%] z-0'>
				<BacklightVertical className='lg:hidden block' />
			</div>
		</div>
	)
}
