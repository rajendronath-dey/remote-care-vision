
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import SymptomChecker from "@/components/SymptomChecker";
import DoctorConsultation from "@/components/DoctorConsultation";
import HealthDashboard from "@/components/HealthDashboard";
import MedicationReminder from "@/components/MedicationReminder";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <Hero />
        <SymptomChecker />
        <DoctorConsultation />
        <HealthDashboard />
        <MedicationReminder />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
