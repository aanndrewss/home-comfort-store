import React from 'react'
import styles from './Switcher.module.scss'
import LeftArrow from './assets/leftArrow.svg'
import RightArrow from './assets/rightArrow.svg'
import { SwitcherProps } from './Switcher.props'
import cn from 'classnames'

export const Switcher = ({
	className,
	...props
}: SwitcherProps): JSX.Element => {
	return (
		<div {...props} className={cn(styles.switch, className)}>
			<LeftArrow className={styles.switcher} />
			1 / 3
			<RightArrow className={styles.switcher} />
		</div>
	)
}
