import { Rooms } from '@/app/helpers/helpers'
import { Button } from '@/app/ui-components'
import React from 'react'
import styles from './Questionnaire.module.scss'
import { QuestionnaireProps } from './QuestionnaireItem/Questionnaire.props'
import { QuestionnaireItem } from './QuestionnaireItem/QuestionnaireItem'
import Steps from './steps.svg'

export const Questionnaire = () => {
	return (
		<div className={styles.wrapper}>
			<h4 className={styles.borderTitle}>ВАШ ПОМОЩНИК В ВЫБОРЕ СОЛНЦЕЗАЩИТЫ</h4>
			<div className={styles.main}>
				<div className={styles.titleWrapper}>
					<h1 className={styles.title}>
						Для какого помещения выбираете Lorem?
					</h1>
					<Steps className={styles.steps} />
				</div>
				<div className={styles.rooms}>
					{Rooms.map((r: QuestionnaireProps) => (
						<QuestionnaireItem name={r.name} />
					))}
				</div>
				<Button appearance="white" className={styles.btn}>
					ДАЛЕЕ
				</Button>
			</div>
		</div>
	)
}
