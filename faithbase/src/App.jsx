import Header from './components/Header';
import UserInfo from './components/UserInfo';
import DoctorRecomendationsCard from './components/DoctorRecomendationsCard';

function App() {
	return (
		<main className="px-12">
			<Header />
			<div className="grid grid-cols-12 gap-6">
				<UserInfo />
				<DoctorRecomendationsCard />
			</div>
		</main>
	);
}

export default App;
