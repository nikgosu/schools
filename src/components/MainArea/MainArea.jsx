import React from 'react'
import Header from "../Header/Header"
import styles from './MainArea.module.css'
import SchoolInfo from "../SchoolInfo/SchoolInfo"

const MainArea = () => {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<Header/>
				<SchoolInfo/>
			</div>
		</div>
	)
}

export default MainArea