import Header from './components/Header';
import Footer from './components/Footer';
import MainDashboard from './components/MainDashboard';
import UserInfo from './components/UserInfo';
import DoctorRecommendationsCard from './components/DoctorRecomendationsCard';

function DoctorApp() {
	return (
		<main className="px-12">
			<Header />
			<MainDashboard />
			<div className="grid grid-cols-12 gap-4">
				<DoctorRecommendationsCard role="Doctor" />
				<UserInfo />
			</div>
			<Footer />
		</main>
	);
}

export default DoctorApp;
