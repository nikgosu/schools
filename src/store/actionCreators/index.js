import {
	CLEAR_SELECTED_COURSE,
	CREATE_SCHOOL,
	DONE_LESSON,
	FINISH_LEARNING_GROUP,
	REGISTER_COURSE, SELECT_COURSE, SELECT_SCHOOL,
	START_LEARNING_GROUP,
	UPDATE_SCHOOL
} from "../actions"

export const CreateSchoolAction = ({name = '', description = '', maxGroups = 10, maxStudents = 100, availableStudentsAmount = 100, startedGroups = [], availableCourses = []}) => ({type: CREATE_SCHOOL, payload: {
		name,
		description,
		maxGroups,
		maxStudents,
		availableStudentsAmount,
		startedGroups,
		availableCourses
	}})

export const UpdateSchoolAction = (payload) => ({type: UPDATE_SCHOOL, payload})

export const RegisterCourseAction = (payload) => ({type: REGISTER_COURSE, payload})

export const StartLearningGroupAction = (payload) => ({type: START_LEARNING_GROUP, payload})

export const DoneLessonAction = (payload) => ({type: DONE_LESSON, payload})

export const FinishLearningGroupAction = (payload) => ({type: FINISH_LEARNING_GROUP, payload})

export const SelectSchoolAction = (payload) => ({type: SELECT_SCHOOL, payload})

export const SelectCourseAction = (payload) => ({type: SELECT_COURSE, payload})

export const ClearSelectedCourseAction = () => ({type: CLEAR_SELECTED_COURSE})