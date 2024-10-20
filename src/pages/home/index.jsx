import React from 'react'
import Navbar from '@/components/navbar'
import Header from './sections/header'
import BestSells from './sections/best-sells'
import WhyJoinUs from './sections/why-join-us'

const CollectibleSneakers = () => {
	return (
		<div>
			<header className='relative'>
				<Navbar />
			</header>
			<section>
				<Header />
			</section>
			<section>
				<BestSells />
			</section>
			<section>
				<WhyJoinUs />
			</section>
		</div>
	)
}

export default CollectibleSneakers
