import React from 'react'
import styles from './Popular.module.scss'

export const Popular = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>
				<h1>Popular</h1>
			</div>
			<div className={styles.firstColorBlock}></div>
			<div className={styles.secondColorBlock}></div>
			<div className={styles.thirdColorBlock}></div>
			<div className={styles.firstBlock}>
				<div>LOREM</div>
			</div>
			<div className={styles.secondBlock}>
				<div>Lorem</div>
			</div>
			<div className={styles.thirdBlock}>
				<div>Lorem</div>
			</div>
			<div className={styles.fourthBlock}>
				<div>Lorem</div>
			</div>
		</div>
	)
}
