import React from 'react'
import { SidebarProps } from './Sidebar.props'
import styles from './Sidebar.module.scss'
import cn from 'classnames'
import { Menu } from '../Menu/Menu'

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
	return (
		<div {...props} className={cn(className, styles.sidebar)}>
			<Menu />
		</div>
	)
}
