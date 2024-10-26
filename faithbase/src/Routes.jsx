import { BrowserRouter, Routes, Route } from "react-router-dom";
import PacientApp from "./PacientApp";
import DoctorApp from "./DoctorApp";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PacientApp />} />
        <Route path="/pacient" element={<PacientApp />} />
        <Route path="/doctor" element={<DoctorApp />} />
        <Route path="*" element={<PacientApp />} />
      </Routes>
    </BrowserRouter>
  );
}
