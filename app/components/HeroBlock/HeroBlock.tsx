import { Button } from '@/app/ui-components'
import { Switcher } from '@/app/ui-components'
import React from 'react'
import styles from './HeroBlock.module.scss'
import Cart from './assets/cart.svg'

export const HeroBlock = () => {
	return (
		<div className={styles.heroBlock}>
			<div className={styles.cartWrapper}>
				<Button appearance="primary">Order a measurement</Button>
				<button className={styles.cartBtn}>
					<Cart />
				</button>
			</div>
			<div>
				<h1 className={styles.heading}>Buy Something and more curtains</h1>
				<h5 className={styles.secondHeading}>
					«Lorem» — производитель изделий для внутренней и внешней lorem
				</h5>
				<Button appearance="white" className={styles.calcBtn}>
					Calculator
				</Button>
			</div>
			<Switcher className={styles.switcher}/>
		</div>
	)
}
