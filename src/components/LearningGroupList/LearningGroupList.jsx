import React from 'react'
import {useSelector} from "react-redux"
import styles from './LearningGroupList.module.css'
import LearningGroupItem from "../LearningGroupItem/LearningGroupItem"

const LearningGroupList = () => {
	const {selectedCourse, selectedSchool, allGroups} = useSelector(state => state)

	return (
		<div className={styles.container}>
			<h2>Learning Groups for {selectedCourse.courseName}</h2>
			{allGroups.length === 0 ?
				selectedSchool.startedGroups.map(item => {
					if (item.courseName === selectedCourse.courseName) {
						return (<LearningGroupItem key={item.id} group={item}/>)
					}
				})
				:
				allGroups.map(item => <LearningGroupItem key={item.id} group={item}/>
				)
			}
		</div>
	)
}

export default LearningGroupList