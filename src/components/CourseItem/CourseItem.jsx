import React from 'react'
import styles from './CourseItem.module.css'
import {useDispatch, useSelector} from "react-redux"
import {ClearSelectedCourseAction, SelectCourseAction} from "../../store/actionCreators"

const CourseItem = ({course}) => {
	const {selectedCourse} = useSelector(state => state)
	const dispatch = useDispatch()

	const selectCourse = () => {
		if (selectedCourse.id !== course.id) dispatch(SelectCourseAction(course))
		else dispatch(ClearSelectedCourseAction())
	}

	return (
		<div
			onClick={selectCourse}
			className={course.id === selectedCourse.id ? styles.container_active : styles.container}
		>
			<p>{course.courseName}</p>
		</div>
	)
}

export default CourseItem