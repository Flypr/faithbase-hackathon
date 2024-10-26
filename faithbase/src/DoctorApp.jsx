import Header from './components/Header';
import Footer from './components/Footer';
import MainDashboard from './components/MainDashboard';
import UserInfo from './components/UserInfo';
import DoctorRecommendationsCard from './components/DoctorRecomendationsCard';

function DoctorApp() {
	return (
		<main>
			<Header />
			<MainDashboard />
			<div className="bg-white bg-opacity-65 backdrop-blur-md px-4">
				<div className="grid grid-cols-12 gap-4">
					<DoctorRecommendationsCard role="Doctor" />
					<UserInfo />
				</div>
				<Footer />
			</div>
		</main>
	);
}

export default DoctorApp;
