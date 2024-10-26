import Header from './components/Header';
import Footer from './components/Footer';
import MainDashboard from './components/MainDashboard';

function DoctorApp() {
	return (
		<main className="px-12">
			<Header />
			<MainDashboard />
			<Footer />
		</main>
	);
}

export default DoctorApp;
