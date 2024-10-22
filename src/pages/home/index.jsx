import React from 'react'
import Navbar from '@/components/navbar'
import Header from './sections/header'
import BestSells from './sections/best-sells'
import WhyJoinUs from './sections/why-join-us'
import TestimonialSlider from './sections/testimonials'
import GrowCollection from './sections/grow-collection'

const CollectibleSneakers = () => {
	return (
		<div className=''>
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
			<section>
				<TestimonialSlider />
			</section>
			<section>
				<GrowCollection />
			</section>
		</div>
	)
}

export default CollectibleSneakers
