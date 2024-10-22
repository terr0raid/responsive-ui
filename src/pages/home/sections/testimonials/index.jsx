import { ArrowLeft, ArrowRight } from '@/assets/icons'
import Card from '@/components/card/testimonial-card'
import Button from '@/components/ui/button'
import React, { useState, useEffect, useRef } from 'react'

const testimonials = [
	{
		company: 'Zoomerr',
		logo: '🚀',
		text: 'Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.',
		author: 'Hellen Jummy',
		position: 'Team Lead',
		avatar: '/api/placeholder/32/32',
	},
	{
		company: 'SHELLS',
		logo: '🐚',
		text: 'Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.',
		author: 'Hellena John',
		position: 'Co-founder',
		avatar: '/api/placeholder/32/32',
	},
	{
		company: 'ArtVenue',
		logo: '🎨',
		text: 'A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.',
		author: 'David Oshodi',
		position: 'Manager',
		avatar: '/api/placeholder/32/32',
	},
	{
		company: 'WAVI',
		logo: '🌊',
		text: 'Magna eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.',
		author: 'Charolette Hanlin',
		position: 'CEO',
		avatar: '/api/placeholder/32/32',
	},
]

const TestimonialSlider = () => {
	const [currentIndex, setCurrentIndex] = useState(1) // Start from 1 for clone handling
	const [isAnimating, setIsAnimating] = useState(false)
	const ref = useRef(null)
	const slideWidth = 319 // Width for each slide
	const totalSlides = testimonials.length

	// Create cloned testimonials array for infinite looping
	const clonedTestimonials = [
		testimonials[totalSlides - 1], // Clone of last slide at the start
		...testimonials,
		testimonials[0], // Clone of first slide at the end
	]

	const nextSlide = () => {
		if (!isAnimating) {
			setIsAnimating(true)
			setCurrentIndex(prevIndex => prevIndex + 1)
		}
	}

	const prevSlide = () => {
		if (!isAnimating) {
			setIsAnimating(true)
			setCurrentIndex(prevIndex => prevIndex - 1)
		}
	}

	useEffect(() => {
		// Smooth infinite transition handling
		if (currentIndex === 0) {
			setTimeout(() => {
				setIsAnimating(false)
				setCurrentIndex(totalSlides) // Jump to the real last slide (without animation)
			}, 500)
		} else if (currentIndex === totalSlides + 1) {
			setTimeout(() => {
				setIsAnimating(false)
				setCurrentIndex(1) // Jump to the real first slide (without animation)
			}, 500)
		} else {
			const timer = setTimeout(() => {
				setIsAnimating(false)
			}, 500)
			return () => clearTimeout(timer)
		}
	}, [currentIndex, totalSlides])

	return (
		<div className='relative w-full p-10 overflow-hidden'>
			<div className='flex flex-row justify-between items-center gap-6'>
				<h2 className='text-center text-heading-5 lg:text-heading-2'>
					Because they love us
				</h2>
				<div className='hidden lg:flex items-center space-x-3'>
					<Button
						variant='primary'
						iconLeft={<ArrowLeft />}
						onClick={prevSlide}
						className='shadow-dark-s !rounded-full'
					/>
					<Button
						variant='primary'
						iconRight={<ArrowRight />}
						onClick={nextSlide}
						className='shadow-dark-s !rounded-full'
					/>
				</div>
			</div>
			<div
				className='absolute bg-amber-200 w-full-30 h-[421px] -z-10 mt-10'
				style={{
					left: '30px',
					right: '30px',
				}}
			></div>
			<div
				className='w-full h-full'
				style={{
					cursor: 'grab',
					display: 'flex',
					willChange: 'transform',
					touchAction: 'none',
				}}
			>
				<div
					className={`flex transition-transform duration-500 ease-in-out mt-10 -ml-3 ${
						isAnimating ? 'animate' : ''
					}`}
					style={{
						transform: `translateX(-${currentIndex * slideWidth}px)`,
						width: `${clonedTestimonials.length * slideWidth}px`, // Set the container width correctly
					}}
				>
					{clonedTestimonials.map((testimonial, index) => (
						<div
							key={index}
							className='w-[319px] lg:w-1/3 flex-shrink-0 pr-2 h-[430px]'
							ref={ref}
						>
							<Card
								icon={testimonial.logo}
								title={testimonial.company}
								text={testimonial.text}
								author={{
									name: testimonial.author,
									role: testimonial.position,
									avatar: testimonial.avatar,
								}}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default TestimonialSlider
