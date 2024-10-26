import Header from "./components/Header";
import UserInfo from "./components/UserInfo";
import Footer from "./components/Footer";
import MedicalDashboard from "./components/MedicalDashboard";
import DoctorRecommendationsCard from "./components/DoctorRecomendationsCard";

function PacientApp() {
  return (
    <main className="px-12">
      <Header />
      <div className="grid grid-cols-12 gap-4">
        <UserInfo />
        <DoctorRecommendationsCard role="Pacient" />
      </div>
      <MedicalDashboard />
      <Footer />
    </main>
  );
}

export default PacientApp;
