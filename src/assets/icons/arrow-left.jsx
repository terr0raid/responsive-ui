import * as React from 'react'
const SvgArrowLeft = props => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		fill='none'
		{...props}
	>
		<path fill='currentColor' d='M18.5 12H6zM6 12l6-6zm0 0 6 6z' />
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='m6 12 6 6m6.5-6H6zM6 12l6-6z'
		/>
	</svg>
)
export default SvgArrowLeft
