import React from 'react'
import { HeaderProps } from './Header.props'
import styles from './Header.module.scss'
import cn from 'classnames'
import Burger from './burger.svg'
import Cart from './cart.svg'

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
	return (
		<header {...props} className={cn(className, styles.header)}>
			<Burger className={styles.burgerBtn} />
			<h1 className={styles.logoText}>LOGO</h1>
			<Cart className={styles.cartBtn} />
		</header>
	)
}
