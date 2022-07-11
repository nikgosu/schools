import './App.css';
import {useDispatch, useSelector} from "react-redux"
import {
	CreateSchoolAction, DoneLessonAction, FinishLearningGroupAction,
	RegisterCourseAction,
	StartLearningGroupAction,
	UpdateSchoolAction
} from "./store/actionCreators"
import NavBar from "./components/NavBar/NavBar"
import MainArea from "./components/MainArea/MainArea"

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

  return (
    <div className="App">
	    <NavBar/>
	    <MainArea/>
    </div>
  );
}

export default App;
