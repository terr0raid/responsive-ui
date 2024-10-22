import * as React from 'react'
const SvgArrowRight = props => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		fill='none'
		{...props}
	>
		<path fill='currentColor' d='M6 12h12.5zm12.5 0-6-6zm0 0-6 6z' />
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='m18.5 12-6 6M6 12h12.5zm12.5 0-6-6z'
		/>
	</svg>
)
export default SvgArrowRight
