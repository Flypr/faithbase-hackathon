import Header from './components/Header';
import UserInfo from './components/UserInfo';
import DoctorRecomendationsCard from './components/DoctorRecomendationsCard';

function App() {
	return (
		<main className="px-12 h-screen">
			<Header />
			<div className="flex gap-6">
				<UserInfo />
				<DoctorRecomendationsCard />
			</div>
		</main>
	);
}

export default App;
