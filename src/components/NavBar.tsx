
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, X, UserCircle, Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Symptom Check", path: "/#symptom-checker" },
    { name: "Consultation", path: "/#consultation" },
    { name: "Dashboard", path: "/#dashboard" },
    { name: "Medication", path: "/#medication" }
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-medical-teal text-2xl font-bold">Remote</span>
              <span className="text-medical-blue text-2xl font-bold">Care</span>
            </div>
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  className="text-gray-700 hover:text-medical-blue px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5 text-gray-500" />
            </Button>
            <Button variant="ghost" className="flex items-center space-x-2">
              <UserCircle className="h-5 w-5" />
              <span>Sign In</span>
            </Button>
            <Button className="bg-medical-teal hover:bg-medical-light-teal">
              Get Started
            </Button>
          </div>
          
          <div className="-mr-2 flex items-center md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 py-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <span className="text-medical-teal text-xl font-bold">Remote</span>
                      <span className="text-medical-blue text-xl font-bold">Care</span>
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                  <div className="flex flex-col space-y-3">
                    {navItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.path}
                        className="text-gray-700 hover:text-medical-blue px-3 py-2 text-base font-medium transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <Button className="w-full mb-3" variant="outline">
                      Sign In
                    </Button>
                    <Button className="w-full bg-medical-teal hover:bg-medical-light-teal">
                      Get Started
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
