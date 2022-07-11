import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import styles from './NavBar.module.css'
import {SelectSchoolAction} from "../../store/actionCreators"

const NavBar = () => {
	const {schools, selectedSchool} = useSelector(state => state)
	const dispatch = useDispatch()

	return (
		<div className={styles.container}>
			{schools.map(school => (
				<button
					className={ school.id === selectedSchool.id ? styles.btns_active : styles.btns}
					key={school.id}
					onClick={() => dispatch(SelectSchoolAction(school))}
				>{school.name}
				</button>
			))}
		</div>
	)
}

export default NavBar