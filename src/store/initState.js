export const initialState = {
	schools: [
		{
			id: 1,
			name: 'DS1',
			description: '',
			maxGroups: 10,
			maxStudents: 100,
			maxStudentsCountPerGroup: 15,
			availableStudentsAmount: 65,
			startedGroups: [
				{
					id: 1,
					groupName: 'LearningGroup 1',
					courseName: 'Demo course 1',
					mentorName: 'Vlad B.',
					studentsAmount: 15,
					groupStarted: '2022/04/30',
					passedLessons: [
						{
							id: 29,
							title: 'Redux',
							topics: 'React redux'
						}
					]
				},
				{
					id: 45,
					groupName: 'LearningGroup 1',
					courseName: 'Demo course 1',
					mentorName: 'Vlad B.',
					studentsAmount: 15,
					groupStarted: '2022/04/30',
					passedLessons: [
						{
							id: 29,
							title: 'Redux',
							topics: 'React redux'
						}
					]
				},
				{
					id: 23,
					groupName: 'LearningGroup 1',
					courseName: 'Demo course 1',
					mentorName: 'Vlad B.',
					studentsAmount: 15,
					groupStarted: '2022/04/30',
					passedLessons: [
						{
							id: 29,
							title: 'Redux',
							topics: 'React redux'
						}
					]
				},
				{
					id: 2,
					groupName: 'LearningGroup 2',
					courseName: 'Demo course 2',
					mentorName: 'Vlad B.',
					studentsAmount: 15,
					groupStarted: '2022/04/30',
					passedLessons: [
						{
							id: 28,
							title: 'Redux',
							topics: 'React redux'
						}
					]
				},
				{
					id: 3,
					groupName: 'LearningGroup 3',
					courseName: 'Demo course 3',
					mentorName: 'Vlad B.',
					studentsAmount: 15,
					groupStarted: '2022/04/30',
					passedLessons: [
						{
							id: 27,
							title: 'Redux',
							topics: 'React redux'
						}
					]
				}
			],
			availableCourses: [
				{
					id: 4,
					courseName: 'Demo course 1',
					lessonsAmount: 25,
					mentorsAmount: 5
				},
				{
					id: 5,
					courseName: 'Demo course 2',
					lessonsAmount: 25,
					mentorsAmount: 5
				},
				{
					id: 6,
					courseName: 'Demo course 3',
					lessonsAmount: 25,
					mentorsAmount: 5
				},
			]
		},
		{
			id: 7,
			name: 'ADS',
			description: '',
			maxGroups: 10,
			maxStudents: 100,
			maxStudentsCountPerGroup: 15,
			availableStudentsAmount: 65,
			startedGroups: [
				{
					id: 8,
					groupName: 'LearningGroup 1',
					courseName: 'Demo course 1',
					mentorName: 'Vlad B.',
					studentsAmount: 15,
					groupStarted: '2022/04/30',
					passedLessons: [
						{
							id: 26,
							title: 'Redux',
							topics: 'React redux'
						}
					]
				},
				{
					id: 45,
					groupName: 'LearningGroup 1',
					courseName: 'Demo course 1',
					mentorName: 'Vlad B.',
					studentsAmount: 15,
					groupStarted: '2022/04/30',
					passedLessons: [
						{
							id: 29,
							title: 'Redux',
							topics: 'React redux'
						}
					]
				},
				{
					id: 23,
					groupName: 'LearningGroup 1',
					courseName: 'Demo course 1',
					mentorName: 'Vlad B.',
					studentsAmount: 15,
					groupStarted: '2022/04/30',
					passedLessons: [
						{
							id: 29,
							title: 'Redux',
							topics: 'React redux'
						}
					]
				},
				{
					id: 9,
					groupName: 'LearningGroup 2',
					courseName: 'Demo course 2',
					mentorName: 'Vlad B.',
					studentsAmount: 15,
					groupStarted: '2022/04/30',
					passedLessons: [
						{
							id: 25,
							title: 'Redux',
							topics: 'React redux'
						}
					]
				},
				{
					id: 10,
					groupName: 'LearningGroup 3',
					courseName: 'Demo course 3',
					mentorName: 'Vlad B.',
					studentsAmount: 15,
					groupStarted: '2022/04/30',
					passedLessons: [
						{
							id: 24,
							title: 'Redux',
							topics: 'React redux'
						}
					]
				}
			],
			availableCourses: [
				{
					id: 11,
					courseName: 'Demo course 1',
					lessonsAmount: 25,
					mentorsAmount: 5
				},
				{
					id: 12,
					courseName: 'Demo course 2',
					lessonsAmount: 25,
					mentorsAmount: 5
				},
				{
					id: 13,
					courseName: 'Demo course 3',
					lessonsAmount: 25,
					mentorsAmount: 5
				},
			]
		},
		{
			id: 14,
			name: 'HL',
			description: '',
			maxGroups: 10,
			maxStudents: 100,
			maxStudentsCountPerGroup: 15,
			availableStudentsAmount: 65,
			startedGroups: [
				{
					id: 15,
					groupName: 'LearningGroup 1',
					courseName: 'Demo course 1',
					mentorName: 'Vlad B.',
					studentsAmount: 15,
					groupStarted: '2022/04/30',
					passedLessons: [
						{
							id: 23,
							title: 'Redux',
							topics: 'React redux'
						}
					]
				},
				{
					id: 45,
					groupName: 'LearningGroup 1',
					courseName: 'Demo course 1',
					mentorName: 'Vlad B.',
					studentsAmount: 15,
					groupStarted: '2022/04/30',
					passedLessons: [
						{
							id: 29,
							title: 'Redux',
							topics: 'React redux'
						}
					]
				},
				{
					id: 23,
					groupName: 'LearningGroup 1',
					courseName: 'Demo course 1',
					mentorName: 'Vlad B.',
					studentsAmount: 15,
					groupStarted: '2022/04/30',
					passedLessons: [
						{
							id: 29,
							title: 'Redux',
							topics: 'React redux'
						}
					]
				},
				{
					id: 16,
					groupName: 'LearningGroup 2',
					courseName: 'Demo course 2',
					mentorName: 'Vlad B.',
					studentsAmount: 15,
					groupStarted: '2022/04/30',
					passedLessons: [
						{
							id: 22,
							title: 'Redux',
							topics: 'React redux'
						}
					]
				},
				{
					id: 17,
					groupName: 'LearningGroup 3',
					courseName: 'Demo course 3',
					mentorName: 'Vlad B.',
					studentsAmount: 15,
					groupStarted: '2022/04/30',
					passedLessons: [
						{
							id: 21,
							title: 'Redux',
							topics: 'React redux'
						}
					]
				}
			],
			availableCourses: [
				{
					id: 18,
					courseName: 'Demo course 1',
					lessonsAmount: 25,
					mentorsAmount: 5
				},
				{
					id: 19,
					courseName: 'Demo course 2',
					lessonsAmount: 25,
					mentorsAmount: 5
				},
				{
					id: 20,
					courseName: 'Demo course 3',
					lessonsAmount: 25,
					mentorsAmount: 5
				},
			]
		}
	],
	history: [],
	selectedSchool: {
		id: 1,
		name: 'DS1',
		description: 'description of Demo School 1. description of Demo School 1. description of Demo School 1.',
		maxGroups: 10,
		maxStudents: 100,
		maxStudentsCountPerGroup: 15,
		availableStudentsAmount: 65,
		startedGroups: [
			{
				id: 1,
				groupName: 'LearningGroup 1',
				courseName: 'Demo course 1',
				mentorName: 'Vlad B.',
				studentsAmount: 15,
				groupStarted: '2022/04/30',
				passedLessons: [
					{
						id: 29,
						title: 'Redux',
						topics: 'React redux'
					}
				]
			},
			{
				id: 45,
				groupName: 'LearningGroup 1',
				courseName: 'Demo course 1',
				mentorName: 'Vlad B.',
				studentsAmount: 15,
				groupStarted: '2022/04/30',
				passedLessons: [
					{
						id: 29,
						title: 'Redux',
						topics: 'React redux'
					}
				]
			},
			{
				id: 23,
				groupName: 'LearningGroup 1',
				courseName: 'Demo course 1',
				mentorName: 'Vlad B.',
				studentsAmount: 15,
				groupStarted: '2022/04/30',
				passedLessons: [
					{
						id: 29,
						title: 'Redux',
						topics: 'React redux'
					}
				]
			},
			{
				id: 2,
				groupName: 'LearningGroup 2',
				courseName: 'Demo course 2',
				mentorName: 'Vlad B.',
				studentsAmount: 15,
				groupStarted: '2022/04/30',
				passedLessons: [
					{
						id: 28,
						title: 'Redux',
						topics: 'React redux'
					}
				]
			},
			{
				id: 3,
				groupName: 'LearningGroup 3',
				courseName: 'Demo course 3',
				mentorName: 'Vlad B.',
				studentsAmount: 15,
				groupStarted: '2022/04/30',
				passedLessons: [
					{
						id: 27,
						title: 'Redux',
						topics: 'React redux'
					}
				]
			}
		],
		availableCourses: [
			{
				id: 4,
				courseName: 'Demo course 1',
				lessonsAmount: 25,
				mentorsAmount: 5
			},
			{
				id: 5,
				courseName: 'Demo course 2',
				lessonsAmount: 25,
				mentorsAmount: 5
			},
			{
				id: 6,
				courseName: 'Demo course 3',
				lessonsAmount: 25,
				mentorsAmount: 5
			},
		]
	},
	selectedCourse: {
		id: 4,
		courseName: 'Demo course 1',
		lessonsAmount: 25,
		mentorsAmount: 5
	},
	selectedGroup: {
		id: 1,
		groupName: 'LearningGroup 1',
		courseName: 'Demo course 1',
		mentorName: 'Vlad B.',
		studentsAmount: 15,
		groupStarted: '2022/04/30',
		passedLessons: [
			{
				id: 29,
				title: 'Redux',
				topics: 'React redux'
			}
		]
	},
	allGroups: []
}