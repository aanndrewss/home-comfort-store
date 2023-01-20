import { Checkbox } from '@/app/ui-components'
import React from 'react'
import { QuestionnaireProps } from './Questionnaire.props'
import styles from './QuestionnaireItem.module.scss'

export const QuestionnaireItem = ({ name }: QuestionnaireProps) => {
	return (
		<div className={styles.wrapper}>
			<Checkbox id={name} />
			{name}
		</div>
	)
}
