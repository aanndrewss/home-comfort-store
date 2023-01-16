import React, { FC } from 'react'
import Head from 'next/head'

interface IMetaProps {
	title: string
	description: string
}

const MetaTitle: FC<IMetaProps> = ({ title, description }) => {
	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
		</Head>
	)
}

export default MetaTitle
