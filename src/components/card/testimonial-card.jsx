import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ icon, title, text, author }) => {
	return (
		<div className='bg-white rounded-[20px] shadow-dark-l p-6  font-roboto h-full flex flex-col space-y-2 mt-6 '>
			<div className='flex flex-row items-center gap-1 py-2 '>
				{icon}
				<h2 className='text-heading-6 text-[#475569]'>{title}</h2>
			</div>
			<p className='text-body-l lg:text-body-xxl  mb-6 flex-1'>{text}</p>
			<div className='flex items-center mt-auto'>
				<img
					src={author.avatar}
					alt={author.name}
					className='w-12 h-12 rounded-full mr-3 object-cover'
				/>
				<div>
					<p className='text-subtitle-l text-blue-gray'>{author.name}</p>
					<p className='text-body-m text-amber-900'>{author.role}</p>
				</div>
			</div>
		</div>
	)
}
Card.propTypes = {
	icon: PropTypes.string,
	category: PropTypes.string,
	title: PropTypes.string,
	text: PropTypes.string,
	author: PropTypes.string,
}

export default Card
