import MUINavBar from './components/MUINavBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MUIBanner from './components/MUIBanner';
import MUISkills from './components/MUISkills';
import MUIProjects from './components/MUIProjects';

function App() {
	return (
		<div className="App">
			<MUINavBar />
			<MUIBanner />
			<MUISkills id="skills" />
			<MUIProjects />
		</div>
	);
}

export default App;
