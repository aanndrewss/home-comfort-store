import React from 'react'
import { FooterProps } from './Footer.props'
import styles from './Footer.module.scss'
import cn from 'classnames'

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
	return (
		<footer {...props} className={cn(className, styles.footer)}>
			<div className={styles.year}>© 2023 Lorem</div>
			<div className={styles.links}>
				<a href="">Cookie rules</a>
				<a href="">User agreement</a>
				<a href="">Card of site</a>
			</div>
			<div className={styles.developBy}>Develop by ANDRXW66</div>
		</footer>
	)
}
