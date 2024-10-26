import Header from './components/Header';
import UserInfo from './components/UserInfo';
import Footer from './components/Footer';
import MedicalDashboard from './components/MedicalDashboard';
import DoctorRecommendationsCard from './components/DoctorRecomendationsCard';

function PacientApp() {
	return (
		<main>
			<Header />
			<svg
				height="57"
				viewBox="0 0 1195 57"
				fill="none"
				className="w-full h-auto fill-white opacity-65 backdrop-blur-md translate-y-1"
			>
				<path d="M1194.5 56.5H0V0.5C597.25 56.5 597.25 56.5 1194.5 0.5V56.5Z" />
			</svg>
			<div className="bg-white bg-opacity-65 backdrop-blur-md px-4 pt-10">
				<div className="grid grid-cols-12 gap-4">
					<UserInfo />
					<DoctorRecommendationsCard role="Pacient" />
				</div>
				<MedicalDashboard />
				<Footer />
			</div>
		</main>
	);
}

export default PacientApp;
