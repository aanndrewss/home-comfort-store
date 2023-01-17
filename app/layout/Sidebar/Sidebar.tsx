import React from 'react'
import { SidebarProps } from './Sidebar.props'
import styles from './Sidebar.module.scss'
import cn from 'classnames'
import { Menu } from '../Menu/Menu'
import Burger from './burger.svg'
import Search from './search.svg'

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
	return (
		<div {...props} className={cn(className, styles.sidebar)}>
			<div className={styles.logo}>LOGO</div>
			<Burger />
			<Menu />
			<Search className={styles.search} />
		</div>
	)
}
