// import Banner from './components/Banner';
import Skills from './components/Skills';
import MUINavBar from './components/MUINavBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MUIBanner from './components/MUIBanner';

function App() {
	return (
		<div className="App">
			<MUINavBar />
			<MUIBanner />
			{/* <Banner /> */}
			<Skills id="skills" />
		</div>
	);
}

export default App;
