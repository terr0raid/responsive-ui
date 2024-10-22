import React from 'react'
import PropTypes from 'prop-types'
import Button from '../ui/button'

const ProductCard = ({ image, icon, title, text, buttonText }) => {
	return (
		<div className='w-full border-1 border-blue-gray bg-blue-gray shadow-light-xxl rounded-lg z-10 px-0'>
			{image && (
				<img
					src={image}
					alt={title}
					className='w-full h-[300px] object-cover rounded-t-lg'
				/>
			)}
			<div className='p-4 space-y-4 '>
				{title && <h2 className='text-heading-6 text-white'>{title}</h2>}
				{text && <p className='text-body-l text-white'>{text}</p>}
				<div className='space-y-2'>
					{buttonText && (
						<Button
							variant='secondary'
							size='L'
							text={buttonText}
							iconLeft={icon}
							className='w-full'
						/>
					)}
				</div>
			</div>
		</div>
	)
}

ProductCard.propTypes = {
	image: PropTypes.string,
	icon: PropTypes.node,
	title: PropTypes.string,
	text: PropTypes.string,
	buttonText: PropTypes.string,
}

export default ProductCard
