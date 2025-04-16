
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle 
} from "@/components/ui/card";
import { 
  Pill,
  Plus,
  Check,
  AlertCircle,
  Clock,
  Calendar,
  Bell
} from "lucide-react";

type Medication = {
  id: number;
  name: string;
  dosage: string;
  frequency: string;
  time: string[];
  taken: boolean[];
};

const MedicationReminder = () => {
  const [medications, setMedications] = useState<Medication[]>([
    {
      id: 1,
      name: "Lisinopril",
      dosage: "10mg",
      frequency: "Once daily",
      time: ["8:00 AM"],
      taken: [true]
    },
    {
      id: 2,
      name: "Metformin",
      dosage: "500mg",
      frequency: "Twice daily",
      time: ["8:00 AM", "8:00 PM"],
      taken: [true, false]
    },
    {
      id: 3,
      name: "Atorvastatin",
      dosage: "20mg",
      frequency: "Once daily",
      time: ["9:00 PM"],
      taken: [false]
    }
  ]);

  const markAsTaken = (medicationId: number, doseIndex: number) => {
    const updatedMedications = medications.map(med => {
      if (med.id === medicationId) {
        const updatedTaken = [...med.taken];
        updatedTaken[doseIndex] = true;
        return { ...med, taken: updatedTaken };
      }
      return med;
    });
    
    setMedications(updatedMedications);
  };

  const getTodayMedications = () => {
    const result = [];
    
    for (const med of medications) {
      for (let i = 0; i < med.time.length; i++) {
        if (!med.taken[i]) {
          result.push({
            id: med.id,
            name: med.name,
            dosage: med.dosage,
            time: med.time[i],
            doseIndex: i
          });
        }
      }
    }
    
    return result.sort((a, b) => {
      // Convert time strings to comparable values (simple approach)
      const timeA = a.time.includes('PM') && !a.time.includes('12:') ? 
        Number(a.time.split(':')[0]) + 12 : Number(a.time.split(':')[0]);
      const timeB = b.time.includes('PM') && !b.time.includes('12:') ? 
        Number(b.time.split(':')[0]) + 12 : Number(b.time.split(':')[0]);
      
      return timeA - timeB;
    });
  };

  // Get medications that need to be taken today
  const todayMedications = getTodayMedications();

  // Calculate adherence rate
  const totalDoses = medications.reduce((sum, med) => sum + med.time.length, 0);
  const takenDoses = medications.reduce((sum, med) => sum + med.taken.filter(taken => taken).length, 0);
  const adherenceRate = Math.round((takenDoses / totalDoses) * 100);

  return (
    <section id="medication" className="py-12 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Medication Management
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Never miss a dose with our smart medication reminder system.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="flex items-center">
                      <Clock className="mr-2 h-5 w-5 text-medical-blue" /> 
                      Today's Medications
                    </CardTitle>
                    <CardDescription>
                      Medications you need to take today
                    </CardDescription>
                  </div>
                  <Button className="bg-medical-blue hover:bg-medical-blue/90">
                    <Plus className="mr-2 h-4 w-4" /> Add Medication
                  </Button>
                </div>
              </CardHeader>
              
              <CardContent>
                {todayMedications.length > 0 ? (
                  <div className="space-y-4">
                    {todayMedications.map((med) => (
                      <div 
                        key={`${med.id}-${med.doseIndex}`} 
                        className="flex items-center justify-between p-4 rounded-lg border"
                      >
                        <div className="flex items-center">
                          <div className="bg-medical-blue/10 p-2 rounded-full mr-4">
                            <Pill className="h-6 w-6 text-medical-blue" />
                          </div>
                          <div>
                            <h4 className="font-medium">{med.name} {med.dosage}</h4>
                            <p className="text-sm text-gray-500">Take at {med.time}</p>
                          </div>
                        </div>
                        <Button 
                          variant="outline" 
                          className="border-medical-teal hover:bg-medical-teal hover:text-white"
                          onClick={() => markAsTaken(med.id, med.doseIndex)}
                        >
                          <Check className="mr-2 h-4 w-4" />
                          Mark as Taken
                        </Button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-10">
                    <Check className="h-12 w-12 text-green-500 mx-auto mb-4" />
                    <h4 className="text-lg font-medium">All Done for Today!</h4>
                    <p className="text-gray-500 mt-2">You've taken all your medications for today.</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bell className="mr-2 h-5 w-5 text-medical-blue" /> 
                  Medication Schedule
                </CardTitle>
                <CardDescription>
                  Your weekly medication plan
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  {medications.map((med) => (
                    <div key={med.id} className="border rounded-lg p-3">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium">{med.name}</h4>
                        <span className="text-xs bg-blue-100 text-blue-800 rounded-full px-2 py-1">
                          {med.frequency}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500">{med.dosage}</p>
                      <div className="mt-2">
                        {med.time.map((time, index) => (
                          <div key={index} className="flex justify-between items-center mt-1 text-sm">
                            <span>{time}</span>
                            {med.taken[index] ? (
                              <span className="flex items-center text-green-600">
                                <Check className="h-3 w-3 mr-1" /> Taken
                              </span>
                            ) : (
                              <span className="flex items-center text-amber-600">
                                <AlertCircle className="h-3 w-3 mr-1" /> Due
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5 text-medical-blue" /> 
                  Adherence Tracker
                </CardTitle>
                <CardDescription>
                  Your medication compliance
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-col items-center">
                  <div className="relative w-40 h-40">
                    <svg className="w-full h-full" viewBox="0 0 36 36">
                      <circle cx="18" cy="18" r="16" fill="none" className="stroke-gray-200" strokeWidth="3" />
                      <circle 
                        cx="18" 
                        cy="18" 
                        r="16" 
                        fill="none" 
                        className={`${adherenceRate >= 80 ? 'stroke-green-500' : adherenceRate >= 60 ? 'stroke-amber-500' : 'stroke-red-500'}`}
                        strokeWidth="3" 
                        strokeDasharray={`${adherenceRate} ${100-adherenceRate}`}
                        strokeDashoffset="25" 
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                      <span className="text-3xl font-bold">{adherenceRate}%</span>
                      <span className="text-sm text-gray-500">adherence</span>
                    </div>
                  </div>
                  
                  <p className="mt-4 text-center text-sm">
                    {adherenceRate >= 80 
                      ? "Excellent adherence! Keep it up!"
                      : adherenceRate >= 60 
                      ? "Good job! Try to be more consistent."
                      : "You need to improve your medication adherence."
                    }
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicationReminder;
