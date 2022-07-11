import {
	CREATE_SCHOOL,
	DONE_LESSON,
	FINISH_LEARNING_GROUP,
	REGISTER_COURSE,
	START_LEARNING_GROUP,
	UPDATE_SCHOOL
} from "../actions"

export const initialState = {
	schools: [
		{
			name: 'DS1',
			description: '',
			maxGroups: 10,
			maxStudents: 100,
			availableStudentsAmount: 65,
			startedGroups: [
				{
					groupName: 'LearningGroup 1',
					courseName: 'Demo course 1',
					mentorName: 'Vlad Balabash',
					studentsAmount: 15,
					passedLessons: [
						{
							title: 'Redux',
							topics: 'React redux'
						}
					]
				},
				{
					groupName: 'LearningGroup 2',
					courseName: 'Demo course 2',
					mentorName: 'Vlad Balabash',
					studentsAmount: 15,
					passedLessons: [
						{
							title: 'Redux',
							topics: 'React redux'
						}
					]
				},
				{
					groupName: 'LearningGroup 3',
					courseName: 'Demo course 3',
					mentorName: 'Vlad Balabash',
					studentsAmount: 15,
					passedLessons: [
						{
							title: 'Redux',
							topics: 'React redux'
						}
					]
				}
			],
			availableCourses: [
				{
					courseName: 'Demo course 1',
					lessonsAmount: 25,
					mentorsAmount: 5
				},
				{
					courseName: 'Demo course 2',
					lessonsAmount: 25,
					mentorsAmount: 5
				},
				{
					courseName: 'Demo course 3',
					lessonsAmount: 25,
					mentorsAmount: 5
				},
			]
		},
		{
			name: 'ADS',
			description: '',
			maxGroups: 10,
			maxStudents: 100,
			availableStudentsAmount: 65,
			startedGroups: [
				{
					groupName: 'LearningGroup 1',
					courseName: 'Demo course 1',
					mentorName: 'Vlad Balabash',
					studentsAmount: 15,
					passedLessons: [
						{
							title: 'Redux',
							topics: 'React redux'
						}
					]
				},
				{
					groupName: 'LearningGroup 2',
					courseName: 'Demo course 2',
					mentorName: 'Vlad Balabash',
					studentsAmount: 15,
					passedLessons: [
						{
							title: 'Redux',
							topics: 'React redux'
						}
					]
				},
				{
					groupName: 'LearningGroup 3',
					courseName: 'Demo course 3',
					mentorName: 'Vlad Balabash',
					studentsAmount: 15,
					passedLessons: [
						{
							title: 'Redux',
							topics: 'React redux'
						}
					]
				}
			],
			availableCourses: [
				{
					courseName: 'Demo course 1',
					lessonsAmount: 25,
					mentorsAmount: 5
				},
				{
					courseName: 'Demo course 2',
					lessonsAmount: 25,
					mentorsAmount: 5
				},
				{
					courseName: 'Demo course 3',
					lessonsAmount: 25,
					mentorsAmount: 5
				},
			]
		},
		{
			name: 'HL',
			description: '',
			maxGroups: 10,
			maxStudents: 100,
			availableStudentsAmount: 65,
			startedGroups: [
				{
					groupName: 'LearningGroup 1',
					courseName: 'Demo course 1',
					mentorName: 'Vlad Balabash',
					studentsAmount: 15,
					passedLessons: [
						{
							title: 'Redux',
							topics: 'React redux'
						}
					]
				},
				{
					groupName: 'LearningGroup 2',
					courseName: 'Demo course 2',
					mentorName: 'Vlad Balabash',
					studentsAmount: 15,
					passedLessons: [
						{
							title: 'Redux',
							topics: 'React redux'
						}
					]
				},
				{
					groupName: 'LearningGroup 3',
					courseName: 'Demo course 3',
					mentorName: 'Vlad Balabash',
					studentsAmount: 15,
					passedLessons: [
						{
							title: 'Redux',
							topics: 'React redux'
						}
					]
				}
			],
			availableCourses: [
				{
					courseName: 'Demo course 1',
					lessonsAmount: 25,
					mentorsAmount: 5
				},
				{
					courseName: 'Demo course 2',
					lessonsAmount: 25,
					mentorsAmount: 5
				},
				{
					courseName: 'Demo course 3',
					lessonsAmount: 25,
					mentorsAmount: 5
				},
			]
		}
	],
	history: [],
	selectedSchool: {}
}

export const reducer = (state, action) => {
	switch (action.type) {
		case CREATE_SCHOOL :
			return {...state,
				history: [...state.history, {action: 'create' +
						' school', schoolName: action.payload.name, date: new Date().toDateString()}],
				schools: [...state.schools, action.payload]}
		case UPDATE_SCHOOL :
			return {...state,
				history: [...state.history, {action: 'update school', prevValue: state.schools.find(item => item.name === action.payload.name), newValue: action.payload, date: new Date().toDateString()}],
				schools: state.schools.map(item => item.name === action.payload.name ? action.payload : item)}
		case REGISTER_COURSE :
			return {...state,
				history: [...state.history, {action: 'register course', courseName: action.payload.data.name, date: new Date().toDateString()}],
				schools: state.schools.map(item => item.name === action.payload.schoolName ? {...item, availableCourses: [...item.availableCourses, action.payload.data]} : item)}
		case START_LEARNING_GROUP :
			return {
				...state,
				history: [...state.history, {action: 'start learning group', learningGroup: action.payload.data.groupName}],
				schools: state.schools.map(item => item.name === action.payload.schoolName && item.maxGroups > item.startedGroups.length && item.availableCourses.find(item => item.courseName === action.payload.data.courseName).mentorsAmount !== 0 ? {
					...item,
					startedGroups: [...item.startedGroups, action.payload.data],
					availableCourses: item.availableCourses.map(item => item.courseName === action.payload.data.courseName ? {...item, mentorsAmount: item.mentorsAmount -1 } : item)
				} : item)}
		case DONE_LESSON :
			return {...state,
				history: [...state.history, {action: 'done lesson', lesson: action.payload.data.name, date: new Date().toDateString()}],
				schools: state.schools.map(item => item.name === action.payload.schoolName && item.startedGroups.find(item => item.groupName === action.payload.groupName).passedLessons.length < item.availableCourses.find(item => item.courseName === action.payload.courseName).lessonsAmount ? {...item, startedGroups: item.startedGroups.map(item => item.groupName === action.payload.groupName ? {...item, passedLessons: [...item.passedLessons, action.payload.data]} : item)} : item)}
		case FINISH_LEARNING_GROUP :
			return {...state,
				history: [...state.history, {action: 'finish learning group', learningGroup: action.payload.groupName, date: new Date().toDateString()}],
				schools: state.schools.map(item => item.name === action.payload.schoolName ? {...item, availableStudentsAmount: item.availableStudentsAmount + item.startedGroups.find(item => item.groupName === action.payload.groupName).studentsAmount, availableCourses: item.availableCourses.map(item => item.name === action.payload.courseName ? {...item, mentorsAmount: item.mentorsAmount + 1} : item), startedGroups: item.startedGroups.filter(item => item.groupName !== action.payload.groupName)} : item)}
		default :
			return state
	}
}