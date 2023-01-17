import { MenuItems } from '@/app/helpers/helpers'
import React from 'react'
import styles from './Menu.module.scss'

export const Menu = (): JSX.Element => {
	return (
		<ul className={styles.menu}>
			{MenuItems.map((m) => (
				<li className={styles.menuItem}>{m.icon}</li>
			))}
		</ul>
	)
}
