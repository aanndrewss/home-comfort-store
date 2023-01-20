import React from 'react'
import { CheckboxProps } from './Checkbox.props'
import styles from './Checkbox.module.scss'
import cn from 'classnames'

export const Checkbox = ({ className, id, ...props }: CheckboxProps) => {
	return (
		<>
			<input
				{...props}
				className={cn(styles.checkbox, className)}
				type="checkbox"
				id={id}
			/>
			<label htmlFor={id}></label>
		</>
	)
}
