import './App.css';
import AddStudents from './components/AddStudents';
import StudentsList from './components/StudentsList';
import API from './services';
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';

function App() {
	const [data, setData] = useState([])

	const getFromAPIServer = () => {
		API.getStudents().then(result => {
			setData(result)
		})
	}

	const handleDeleteStudent = (data) => {
		API.deleteStudents(data)
			.then(() => {
				getFromAPIServer()
			})
	}


	useEffect(() => {
		getFromAPIServer()
	}, [])

	const handleSaveButton = (newItem) => {
		console.log(newItem)
		API.postStudents(newItem)
			.then(() => {
				getFromAPIServer(data);
			})
	}

	return (
		<Container>
			<AddStudents handleSaveButton={handleSaveButton}  ></AddStudents>
			<StudentsList data={data} handleDeleteStudent={handleDeleteStudent}></StudentsList >
		</Container >
	);
}

export default App;
