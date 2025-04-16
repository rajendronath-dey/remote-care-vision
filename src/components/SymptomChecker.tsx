
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Card, 
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle 
} from "@/components/ui/card";
import { Brain, Send, Loader2, Info } from "lucide-react";

const SymptomChecker = () => {
  const [symptoms, setSymptoms] = useState("");
  const [duration, setDuration] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<null | {
    possibleConditions: string[];
    recommendedAction: string;
    urgencyLevel: "low" | "medium" | "high";
  }>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate AI processing
    setTimeout(() => {
      // This would be replaced with actual API call to an AI service
      setResult({
        possibleConditions: ["Common cold", "Seasonal allergies", "Sinusitis"],
        recommendedAction: "Rest, stay hydrated, and take over-the-counter antihistamines. If symptoms persist for more than 7 days, consult with a healthcare provider.",
        urgencyLevel: "low"
      });
      setIsLoading(false);
    }, 1500);
  };

  const getUrgencyColor = (level: "low" | "medium" | "high") => {
    switch(level) {
      case "low": return "bg-green-100 text-green-800";
      case "medium": return "bg-yellow-100 text-yellow-800";
      case "high": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const resetForm = () => {
    setSymptoms("");
    setDuration("");
    setAge("");
    setGender("");
    setResult(null);
  };

  return (
    <section id="symptom-checker" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            AI Symptom Assessment
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Describe your symptoms and our AI will provide an initial assessment and recommendations.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card>
            <CardHeader>
              <div className="flex items-center">
                <Brain className="h-6 w-6 text-medical-blue mr-2" />
                <CardTitle>Symptom Checker</CardTitle>
              </div>
              <CardDescription>
                Enter your symptoms and basic information for an initial AI assessment.
              </CardDescription>
            </CardHeader>

            <CardContent>
              {!result ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="symptoms" className="block text-sm font-medium text-gray-700 mb-1">
                      Describe your symptoms in detail
                    </label>
                    <Textarea 
                      id="symptoms"
                      value={symptoms}
                      onChange={(e) => setSymptoms(e.target.value)}
                      placeholder="Example: I've had a headache for the past 2 days, along with a runny nose and sore throat."
                      className="min-h-[100px]"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-1">
                      How long have you experienced these symptoms?
                    </label>
                    <Input 
                      id="duration"
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                      placeholder="Example: 2 days" 
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
                        Age
                      </label>
                      <Input 
                        id="age"
                        type="number"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        placeholder="Your age" 
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
                        Gender
                      </label>
                      <select
                        id="gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                        required
                      >
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </form>
              ) : (
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-gray-900">Possible conditions:</h3>
                    <ul className="mt-2 list-disc pl-5 text-gray-600">
                      {result.possibleConditions.map((condition, index) => (
                        <li key={index}>{condition}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-gray-900">Recommended action:</h3>
                    <p className="mt-2 text-gray-600">{result.recommendedAction}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-gray-900">Urgency level:</h3>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mt-2 ${getUrgencyColor(result.urgencyLevel)}`}>
                      {result.urgencyLevel.charAt(0).toUpperCase() + result.urgencyLevel.slice(1)}
                    </span>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-md flex">
                    <Info className="h-5 w-5 text-medical-blue flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-600 ml-2">
                      This assessment is not a medical diagnosis. Always consult with a healthcare professional for medical advice.
                    </p>
                  </div>
                </div>
              )}
            </CardContent>

            <CardFooter className="flex justify-between">
              {!result ? (
                <div className="w-full flex justify-end">
                  <Button 
                    type="submit" 
                    disabled={isLoading} 
                    onClick={handleSubmit}
                    className="bg-medical-blue hover:bg-medical-blue/90"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      <>
                        Check Symptoms
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </div>
              ) : (
                <div className="w-full flex justify-between">
                  <Button variant="outline" onClick={resetForm}>
                    Start New Assessment
                  </Button>
                  <Button className="bg-medical-teal hover:bg-medical-light-teal">
                    Book Consultation
                  </Button>
                </div>
              )}
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SymptomChecker;
