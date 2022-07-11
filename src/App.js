import './App.css';
import {useDispatch, useSelector} from "react-redux"
import {
	CreateSchoolAction, DoneLessonAction, FinishLearningGroupAction,
	RegisterCourseAction,
	StartLearningGroupAction,
	UpdateSchoolAction
} from "./store/actionCreators"
import {useEffect} from "react"

function App() {
	const str = useSelector(state => state)
	const dispatch = useDispatch()

	const createSchool = () => {
		dispatch(CreateSchoolAction({
			name: 'Yug',
		}))
	}

	const updateSchool = () => {
		dispatch(UpdateSchoolAction({name: 'HL'}))
	}

	const registerCourse = () => {
		dispatch(RegisterCourseAction({schoolName: 'ADS', data: {name: 'Demo 123', lessonsAmount: 20, mentorsAmount: 3}}))
	}

	const startLearningGroup = () => {
		dispatch(StartLearningGroupAction({schoolName: 'ADS', data: {
				groupName: 'Learning' +
						' group 123',
				courseName: 'Demo course 1',
				mentorName: 'Nick Gromov',
				studentsAmount: 10,
				passedLessons: []
		}}))
	}

	const doneLesson = () => {
		dispatch(DoneLessonAction({schoolName: 'ADS', groupName: 'LearningGroup 1', courseName: 'Demo course 1', data: {title: 'Node' +
					' JS', topics: 'Express'}}))
	}

	const finishLearningGroup = () => {
		dispatch(FinishLearningGroupAction({schoolName: 'ADS', courseName: 'Demo course 1', groupName: 'LearningGroup 1'}))
	}

	useEffect(() => {
		console.log(str)
	}, [str])

  return (
    <div className="App">
	    <button onClick={createSchool}>Create school</button>
	    <button onClick={updateSchool}>Update school</button>
	    <button onClick={registerCourse}>Register course</button>
	    <button onClick={startLearningGroup}>Start learning group</button>
	    <button onClick={doneLesson}>Done lesson</button>
	    <button onClick={finishLearningGroup}>Finish learning group</button>
    </div>
  );
}

export default App;
