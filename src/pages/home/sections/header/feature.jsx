import React from 'react'
import PropsType from 'prop-types'

const Feature = ({ icon, badge, title, description }) => (
	<div className='flex flex-col justify-center lg:justify-start items-center lg:items-start z-10 space-y-2'>
		<div className='flex items-center justify-center z-10 relative'>
			{icon}
			{badge}
		</div>
		<div className='z-10 space-y-[10px] lg:text-start text-center'>
			<p className='text-subtitle-xl'>{title}</p>
			<p className='text-body-l'>{description}</p>
		</div>
	</div>
)

Feature.propTypes = {
	icon: PropsType.node.isRequired,
	badge: PropsType.node.isRequired,
	title: PropsType.string.isRequired,
	description: PropsType.string.isRequired,
}

export default Feature
