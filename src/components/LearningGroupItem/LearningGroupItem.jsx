import React from 'react'
import styles from './LearningGroupItem.module.css'
import {useSelector} from "react-redux"

const LearningGroupItem = ({group}) => {
	const {selectedSchool, selectedCourse, selectedGroup} = useSelector(state => state)

	return (
		<div className={styles.container}>
			<h3>
				{group.groupName}
			</h3>
			<div className={styles.content}>
				<div className={styles.info}>
					<h4>
						{group.mentorName}
					</h4>
					<p>teacher name</p>
				</div>
				<div className={styles.info}>
					<h4>
						{group.passedLessons.length} / {selectedSchool.availableCourses.find(item => item.courseName === selectedCourse.courseName).lessonsAmount}
					</h4>
					<p>passed lessons</p>
				</div>
				<div className={styles.info}>
					<h4>
						{group.studentsAmount} / {selectedSchool.maxStudentsCountPerGroup}
					</h4>
					<p>students</p>
				</div>
				<div className={styles.info}>
					<h4>
						{selectedGroup.groupStarted}
					</h4>
					<p>group started</p>
				</div>
			</div>
			<div className={styles.
				scale}>
				{[...Array(selectedSchool.availableCourses.find(course => course.courseName === selectedCourse.courseName).lessonsAmount).keys()].map((_, i) => (
					<p
						key={i}
						className={i < selectedGroup.passedLessons.length ? styles.active : styles.box}
					></p>
				))}
			</div>
		</div>
	)
}

export default LearningGroupItem