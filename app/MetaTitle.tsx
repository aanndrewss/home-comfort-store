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
			<link rel="preconnect" href="https://fonts.googleapis.com"></link>
			<link
				rel="preconnect"
				href="https://fonts.gstatic.com"
				crossOrigin="anonymous"
			></link>
			<link
				href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap"
				rel="stylesheet"
			></link>
		</Head>
	)
}

export default MetaTitle
