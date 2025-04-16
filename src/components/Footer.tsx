
import { Button } from "@/components/ui/button";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin 
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <span className="text-medical-light-teal text-2xl font-bold">Remote</span>
              <span className="text-medical-light-blue text-2xl font-bold">Care</span>
            </div>
            <p className="text-gray-400 mb-4">
              Bringing healthcare to your fingertips with AI-powered remote care solutions.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-blue-900 hover:text-white">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-blue-900 hover:text-white">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-blue-900 hover:text-white">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-blue-900 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="/#symptom-checker" className="text-gray-400 hover:text-white transition-colors">Symptom Checker</a>
              </li>
              <li>
                <a href="/#consultation" className="text-gray-400 hover:text-white transition-colors">Find a Doctor</a>
              </li>
              <li>
                <a href="/#dashboard" className="text-gray-400 hover:text-white transition-colors">Health Dashboard</a>
              </li>
              <li>
                <a href="/#medication" className="text-gray-400 hover:text-white transition-colors">Medication Reminders</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Telemedicine</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Mental Health</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Chronic Care Management</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Preventive Care</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Health Records</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-medical-light-teal" />
                <span className="text-gray-400">+1 (800) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-medical-light-teal" />
                <span className="text-gray-400">support@remotecare.ai</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-medical-light-teal mt-0.5" />
                <span className="text-gray-400">123 Innovation Drive, Health Valley, CA 92123</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} RemoteCare. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
