import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Clock, Star, Video, Phone, MessageSquare } from "lucide-react";
type Doctor = {
  id: number;
  name: string;
  specialty: string;
  experience: string;
  rating: number;
  image: string;
  availability: string;
  price: string;
};
const doctors: Doctor[] = [{
  id: 1,
  name: "Dr. Sarah Johnson",
  specialty: "General Physician",
  experience: "15 years",
  rating: 4.9,
  image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  availability: "Today, 2:00 PM - 6:00 PM",
  price: "$45"
}, {
  id: 2,
  name: "Dr. Michael Chen",
  specialty: "Cardiologist",
  experience: "12 years",
  rating: 4.8,
  image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  availability: "Tomorrow, 9:00 AM - 1:00 PM",
  price: "$65"
}, {
  id: 3,
  name: "Dr. Lisa Rodriguez",
  specialty: "Pediatrician",
  experience: "10 years",
  rating: 4.7,
  image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  availability: "Today, 3:00 PM - 7:00 PM",
  price: "$50"
}];
const DoctorConsultation = () => {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  return <section id="consultation" className="py-12 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Virtual Doctor Consultations
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with experienced healthcare professionals from the comfort of your home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map(doctor => <Card key={doctor.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <img src={doctor.image} alt={doctor.name} className="change the image\n" />
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{doctor.name}</CardTitle>
                    <CardDescription className="mt-1">{doctor.specialty}</CardDescription>
                  </div>
                  <div className="flex items-center bg-amber-100 px-2 py-1 rounded-full">
                    <Star className="h-4 w-4 text-amber-500 mr-1" />
                    <span className="text-sm font-medium text-amber-700">{doctor.rating}</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2 text-gray-400" />
                    <span>{doctor.experience} experience</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                    <span>{doctor.availability}</span>
                  </div>
                  <div className="flex items-center text-sm font-medium text-medical-blue">
                    <span>{doctor.price} per consultation</span>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="border-t pt-4">
                <div className="w-full flex justify-between space-x-2">
                  <Button variant="outline" className="flex-1" onClick={() => setSelectedDoctor(doctor)}>
                    <Phone className="h-4 w-4 mr-2" />
                    Call
                  </Button>
                  <Button className="bg-medical-teal hover:bg-medical-light-teal flex-1" onClick={() => setSelectedDoctor(doctor)}>
                    <Video className="h-4 w-4 mr-2" />
                    Video
                  </Button>
                  <Button variant="ghost" className="flex-1" onClick={() => setSelectedDoctor(doctor)}>
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Chat
                  </Button>
                </div>
              </CardFooter>
            </Card>)}
        </div>

        <div className="mt-10 text-center">
          <Button className="bg-medical-blue hover:bg-medical-blue/90" size="lg">
            View All Doctors
          </Button>
        </div>
      </div>
    </section>;
};
export default DoctorConsultation;