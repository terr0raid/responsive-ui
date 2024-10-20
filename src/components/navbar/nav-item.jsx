import React from 'react'
import PropTypes from 'prop-types'

const NavItem = ({ href, children }) => (
	<a
		href={href}
		className='text-amber-900 hover:text-amber-700 px-3 py-2 rounded-md text-sm font-medium'
	>
		{children}
	</a>
)

NavItem.propTypes = {
	href: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
}

export default NavItem
