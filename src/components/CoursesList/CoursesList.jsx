import React from 'react'
import styles from './CoursesList.module.css'
import CourseItem from "../CourseItem/CourseItem"

const CoursesList = () => {
	const {selectedSchool} = useSelector(state => state)

	return (
		<div className={styles.container}>
			<h2>Courses</h2>
			<div>
				{selectedSchool.availableCourses.map(course => (
					<CourseItem
						key={course.id}
						course={course}
					/>
				))}
			</div>
		</div>
	)
}

export default CoursesList