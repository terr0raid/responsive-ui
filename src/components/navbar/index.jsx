import { MenuScale } from '@/assets/icons'
import { useState } from 'react'
import Button from '../ui/button'

const items = ['Products', 'Solutions', 'Pricing', 'Resources', 'Log In']
const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	return (
		<header className='lg:px-10 py-3 px-2 lg:h-[96px] bg-beige'>
			<div className='flex justify-between items-center'>
				<div className='text-2xl font-bold text-amber-900 text-heading-5 z-10'>
					Collers
				</div>
				<button
					className='lg:hidden'
					onClick={() => setIsMenuOpen(!isMenuOpen)}
				>
					<MenuScale />
				</button>
				<nav className='hidden lg:block z-10'>
					<ul className='flex space-x-1 justify-center items-center'>
						{items.map(item => (
							<li key={item}>
								<a href='#' className='text-amber-900' tabIndex={-1}>
									<Button variant='text' size='M'>
										{item}
									</Button>
								</a>
							</li>
						))}
						<li>
							<Button variant='primary' size='M' text='Sign up now' />
						</li>
					</ul>
				</nav>
			</div>
			{isMenuOpen && (
				<nav className='mt-4 lg:hidden'>
					<ul className='flex flex-col space-y-1'>
						{items.map(item => (
							<li key={item}>
								<a href='#' className='text-amber-900' tabIndex={-1}>
									<Button variant='text' size='M'>
										{item}
									</Button>
								</a>
							</li>
						))}
						<li>
							<Button variant='primary' size='M'>
								Sign up now
							</Button>
						</li>
					</ul>
				</nav>
			)}
		</header>
	)
}

export default Navbar
