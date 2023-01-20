import React from 'react'
import { ICardOfferProps } from './CardOffer.props'
import styles from './CardOffer.module.scss'
import { Button } from '@/app/ui-components'
import Cart from './cart.svg'
import Image from 'next/image'
import picture from './picture.png'

export const CardOffer = ({
	discount,
	name,
	price,
	fullPrice
}: ICardOfferProps) => {
	return (
		<div className={styles.card}>
			<div className={styles.cardImg}>
				<span className={styles.discount}>-{discount}%</span>
			</div>
			<div className={styles.name}>{name}</div>
			<div className={styles.price}>
				from <b>{price}$</b>
				<span className={styles.fullPrice}>{fullPrice}$</span>
			</div>
			<div className={styles.actions}>
				<Button appearance="white" outline={true}>
					CHECK ORDER
				</Button>
				<Cart />
			</div>
		</div>
	)
}
