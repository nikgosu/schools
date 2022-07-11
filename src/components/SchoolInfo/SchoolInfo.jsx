import React from 'react'
import CoursesList from "../CoursesList/CoursesList"
import LearningGroupList from "../LearningGroupList/LearningGroupList"
import styles from './SchoolInfo.module.css'

const SchoolInfo = () => {
	return (
		<div className={styles.container}>
			<CoursesList/>
			<LearningGroupList/>
		</div>
	)
}

export default SchoolInfo