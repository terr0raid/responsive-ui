import React from 'react'
import PropTypes from 'prop-types'
import Button from '../ui/button'

const ProductCard = ({
	image,
	imageBadge,
	imageThumb,
	icon,
	category,
	title,
	titleBadge,
	imageUnderTitle,
	text,
	author,
	buttonText,
}) => {
	return (
		<div className='w-full border-1 border-blue-gray bg-blue-gray shadow-card-light-xxl rounded-lg z-10 px-0'>
			{!imageUnderTitle && image && (
				<div className='relative'>
					<img
						src={image}
						alt={title}
						className='w-full h-[300px] object-cover rounded-t-lg'
					/>
					{imageBadge && (
						<span className='absolute top-2 left-2 bg-white text-blue-gray px-2 py-1 text-sm rounded-lg'>
							{imageBadge}
						</span>
					)}
					{imageThumb && (
						<div className='absolute bottom-2 right-2 w-12 h-12 bg-gray-200 rounded-full'></div>
					)}
				</div>
			)}
			<div className='p-4 space-y-4 '>
				{category && <p className='text-sm text-gray-400'>{category}</p>}
				{title && (
					<div className='flex items-center space-x-2'>
						<h2 className='text-heading-6 text-white'>{title}</h2>
						{titleBadge && (
							<span className='bg-amber-400 text-blue-gray px-2 py-1 text-sm rounded'>
								{titleBadge}
							</span>
						)}
					</div>
				)}
				{imageUnderTitle && image && (
					<div className='relative'>
						<img
							src={image}
							alt={title}
							className='w-full h-[200px] object-cover rounded-t-lg'
						/>
					</div>
				)}
				{text && <p className='text-body-l text-white'>{text}</p>}
				{author && <p className='text-body-l text-white'>{author}</p>}
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
	imageBadge: PropTypes.string,
	imageThumb: PropTypes.bool,
	icon: PropTypes.bool,
	category: PropTypes.string,
	title: PropTypes.string,
	titleBadge: PropTypes.string,
	titleIcon: PropTypes.bool,
	imageUnderTitle: PropTypes.bool,
	text: PropTypes.string,
	author: PropTypes.string,
	buttonText: PropTypes.string,
}

export default ProductCard
