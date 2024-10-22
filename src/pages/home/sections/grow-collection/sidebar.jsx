import {
	ArrowRight,
	Guard,
	Rocket,
	Screen,
	Search,
	Settings,
	Signal,
} from '@/assets/icons'

const SidebarNav = () => {
	const navItems = [
		{ icon: Search, text: 'Bibendum tellus', hasArrow: true },
		{ icon: Guard, text: 'Cras eget' },
		{ icon: Rocket, text: 'Dolor pharetra' },
		{ icon: Screen, text: 'Amet, fringilla' },
		{ icon: Signal, text: 'Amet nibh' },
		{ icon: Settings, text: 'Sed velit' },
	]

	return (
		<nav className='w-[256px]'>
			<ul className='space-y-2'>
				{navItems.map((item, index) => (
					<li key={index}>
						<a
							href='#'
							className='flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors'
						>
							<item.icon className='w-5 h-5 text-gray-500' />
							<span className='flex-1 text-sm font-medium'>{item.text}</span>
							{item.hasArrow && <ArrowRight />}
						</a>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default SidebarNav
