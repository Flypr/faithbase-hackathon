import Header from "./components/Header";
import UserInfo from "./components/UserInfo";
import DoctorRecomendationsCard from "./components/DoctorRecomendationsCard";
import Footer from "./components/Footer";
import MedicalDashboard from "./components/MedicalDashboard";

function App() {
  return (
    <main className="px-12">
      <Header />
      <div className="flex gap-6">
        <UserInfo />
        <DoctorRecomendationsCard />
      </div>
      <MedicalDashboard />
      <Footer />
    </main>
  );
}

export default App;
