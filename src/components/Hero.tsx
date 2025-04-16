
import { Button } from "@/components/ui/button";
import { ArrowRight, Stethoscope, Activity, Clock, Shield } from "lucide-react";

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:space-x-8 py-12 lg:py-20">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <div className="animate-fade-in">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Healthcare</span>
                <span className="block text-medical-blue">Powered by AI</span>
              </h1>
              <p className="mt-6 text-xl text-gray-500 max-w-3xl">
                Experience the future of healthcare with our AI-powered remote care platform. Get instant symptom assessment, connect with doctors, and manage your health - all from the comfort of your home.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-medical-teal hover:bg-medical-light-teal text-white px-8 py-6">
                  Check Symptoms Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-6">
                  Schedule Consultation
                </Button>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="flex items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-medical-blue/10 text-medical-blue">
                  <Stethoscope className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">AI Diagnosis</h3>
                  <p className="mt-1 text-sm text-gray-500">Smart symptom analysis</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-medical-blue/10 text-medical-blue">
                  <Activity className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Health Tracking</h3>
                  <p className="mt-1 text-sm text-gray-500">Monitor vital statistics</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-medical-blue/10 text-medical-blue">
                  <Clock className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">24/7 Support</h3>
                  <p className="mt-1 text-sm text-gray-500">Round-the-clock care</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-medical-blue/10 text-medical-blue">
                  <Shield className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Secure & Private</h3>
                  <p className="mt-1 text-sm text-gray-500">HIPAA compliant</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative h-64 sm:h-72 md:h-96 lg:h-full overflow-hidden rounded-xl shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" 
                alt="Doctor using telemedicine technology"
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-medical-blue/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
