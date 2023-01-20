import { Switcher } from '@/app/ui-components'
import React from 'react'
import styles from './BestOffers.module.scss'
import { CardItems } from '@/app/helpers/helpers'
import { ICardOfferProps } from './CardOffer/CardOffer.props'
import { CardOffer } from './CardOffer/CardOffer'

export const BestOffer = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.titleWrapper}>
				<h4 className={styles.title}>Best Offers</h4>
				<Switcher className={styles.switcher} />
			</div>
			<div className={styles.cards}>
				{CardItems.map((card: ICardOfferProps) => (
					<CardOffer
						fullPrice={card.fullPrice}
						name={card.name}
						price={card.price}
						discount={card.discount}
					/>
				))}
			</div>
		</div>
	)
}
