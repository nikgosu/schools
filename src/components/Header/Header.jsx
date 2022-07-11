import React from 'react'
import {useSelector} from "react-redux"
import styles from './Header.module.css'

const Header = () => {
	const {selectedSchool} = useSelector(state => state)

	return (
		<>
			{selectedSchool.id ?
				<div className={styles.container}>
					<div className={styles.content}>
						<div className={styles.leftside}>
							<h2>{selectedSchool.name}</h2>
							<p>{selectedSchool.description}</p>
						</div>
						<div className={styles.rightside}>
							<p>Groups count: {selectedSchool.startedGroups.length} / {selectedSchool.maxGroups}</p>
							<p>Total amount of students: {selectedSchool.availableStudentsAmount}</p>
						</div>
					</div>
					<hr/>
				</div>
				:
				<div>School not selected</div>
			}
		</>
	)
}

export default Header