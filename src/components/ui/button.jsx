import React from 'react'
import PropTypes from 'prop-types'

const Button = ({
	children,
	variant = 'primary',
	className = '',
	size = 'M',
	text,
	iconRight,
	iconLeft,
	...props
}) => {
	const baseStyle =
		'flex flex-row items-center justify-center rounded-lg transition-colors duration-300 font-roboto font-medium hover:stroke-amber-700'

	const variantStyles = {
		primary:
			'bg-transparent border-2 border-amber-900 text-amber-900 hover:bg-amber-900 hover:text-white',
		secondary:
			'bg-transparent text-white border border-white hover:border-amber-100',
		text: 'text-amber-900 hover:text-amber-700',
	}

	const sizeStyles = {
		S: 'p-1',
		M: 'p-[12px]',
		L: 'py-[16px] px-2',
		XL: 'py-[20px] px-3',
	}

	const textStyles = {
		S: 'text-button-s',
		M: 'text-button-m px-[12px]',
		L: 'text-button-l px-[16px]',
		XL: 'text-button-xl px-[24px]',
	}

	return (
		<button
			className={`${baseStyle} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`.trim()}
			{...props}
		>
			{iconLeft && <span>{iconLeft}</span>}
			{text ? <p className={`${textStyles[size]}`}>{text}</p> : children}
			{iconRight && <span>{iconRight}</span>}
		</button>
	)
}

Button.propTypes = {
	children: PropTypes.node.isRequired,
	variant: PropTypes.oneOf(['primary', 'secondary', 'text']),
	size: PropTypes.oneOf(['S', 'M', 'L', 'XL']),
	className: PropTypes.string,
	iconRight: PropTypes.node,
	iconLeft: PropTypes.node,
	text: PropTypes.string,
}

export default Button
