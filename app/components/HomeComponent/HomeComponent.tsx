import React from 'react'
import { BestOffer } from '../BestOffers/BestOffers'
import { HeroBlock } from '../HeroBlock/HeroBlock'
import { Popular } from '../Popular/Popular'

export const HomeComponent = () => {
	return (
		<>
			<HeroBlock />
			<Popular />
			<BestOffer />
		</>
	)
}
