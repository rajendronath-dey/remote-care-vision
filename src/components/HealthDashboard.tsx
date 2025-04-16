
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Activity, Heart, Thermometer, Weight, TrendingUp, Droplets } from "lucide-react";

// Sample data for charts
const heartRateData = [
  { day: "Mon", value: 72 },
  { day: "Tue", value: 75 },
  { day: "Wed", value: 74 },
  { day: "Thu", value: 78 },
  { day: "Fri", value: 76 },
  { day: "Sat", value: 72 },
  { day: "Sun", value: 70 }
];

const bloodPressureData = [
  { day: "Mon", systolic: 120, diastolic: 80 },
  { day: "Tue", systolic: 118, diastolic: 79 },
  { day: "Wed", systolic: 122, diastolic: 82 },
  { day: "Thu", systolic: 125, diastolic: 83 },
  { day: "Fri", systolic: 119, diastolic: 80 },
  { day: "Sat", systolic: 117, diastolic: 78 },
  { day: "Sun", systolic: 118, diastolic: 79 }
];

const glucoseData = [
  { day: "Mon", value: 95 },
  { day: "Tue", value: 100 },
  { day: "Wed", value: 98 },
  { day: "Thu", value: 103 },
  { day: "Fri", value: 97 },
  { day: "Sat", value: 99 },
  { day: "Sun", value: 96 }
];

const weightData = [
  { day: "Mon", value: 155 },
  { day: "Tue", value: 154.8 },
  { day: "Wed", value: 154.5 },
  { day: "Thu", value: 154.2 },
  { day: "Fri", value: 153.9 },
  { day: "Sat", value: 153.7 },
  { day: "Sun", value: 153.5 }
];

const HealthDashboard = () => {
  return (
    <section id="dashboard" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Your Health Dashboard
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Track your vital health metrics and see your progress over time.
          </p>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Heart Rate</CardTitle>
                <Heart className="h-4 w-4 text-medical-blue" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">72 BPM</div>
                <p className="text-xs text-muted-foreground">Normal range</p>
                <div className="h-12 mt-3">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={heartRateData}>
                      <Line 
                        type="monotone" 
                        dataKey="value" 
                        stroke="#3B82F6" 
                        strokeWidth={2} 
                        dot={false} 
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Blood Pressure</CardTitle>
                <Activity className="h-4 w-4 text-medical-blue" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">118/79 mmHg</div>
                <p className="text-xs text-muted-foreground">Normal range</p>
                <div className="h-12 mt-3">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={bloodPressureData}>
                      <Line 
                        type="monotone" 
                        dataKey="systolic" 
                        stroke="#3B82F6" 
                        strokeWidth={2} 
                        dot={false} 
                      />
                      <Line 
                        type="monotone" 
                        dataKey="diastolic" 
                        stroke="#0D9488" 
                        strokeWidth={2} 
                        dot={false} 
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Blood Glucose</CardTitle>
                <Droplets className="h-4 w-4 text-medical-blue" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">96 mg/dL</div>
                <p className="text-xs text-muted-foreground">Normal range</p>
                <div className="h-12 mt-3">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={glucoseData}>
                      <Line 
                        type="monotone" 
                        dataKey="value" 
                        stroke="#3B82F6" 
                        strokeWidth={2} 
                        dot={false} 
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Weight</CardTitle>
                <Weight className="h-4 w-4 text-medical-blue" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">153.5 lbs</div>
                <p className="text-xs text-muted-foreground">-1.5 lbs this week</p>
                <div className="h-12 mt-3">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={weightData}>
                      <Line 
                        type="monotone" 
                        dataKey="value" 
                        stroke="#3B82F6" 
                        strokeWidth={2} 
                        dot={false} 
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="vital-signs" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="vital-signs">Vital Signs</TabsTrigger>
              <TabsTrigger value="medications">Medications</TabsTrigger>
              <TabsTrigger value="activities">Activities</TabsTrigger>
            </TabsList>
            <TabsContent value="vital-signs">
              <Card>
                <CardHeader>
                  <CardTitle>Vital Signs Trends</CardTitle>
                  <CardDescription>
                    View your health metrics over the past week
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={heartRateData}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Tooltip />
                        <Line
                          name="Heart Rate"
                          type="monotone"
                          dataKey="value"
                          stroke="#3B82F6"
                          activeDot={{ r: 8 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={bloodPressureData}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Tooltip />
                        <Line
                          name="Systolic"
                          type="monotone"
                          dataKey="systolic"
                          stroke="#3B82F6"
                          activeDot={{ r: 8 }}
                        />
                        <Line
                          name="Diastolic"
                          type="monotone"
                          dataKey="diastolic"
                          stroke="#0D9488"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="medications">
              <Card>
                <CardHeader>
                  <CardTitle>Medication Tracker</CardTitle>
                  <CardDescription>
                    Manage your medications and see adherence statistics
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="font-medium">Lisinopril</h4>
                        <p className="text-sm text-gray-500">10mg once daily</p>
                      </div>
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Taken today</span>
                    </div>
                    <div className="flex mt-2 space-x-1">
                      {Array.from({ length: 7 }).map((_, i) => (
                        <div key={i} className={`h-2 flex-1 rounded-full ${i < 6 ? "bg-green-500" : "bg-green-500"}`}></div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="font-medium">Metformin</h4>
                        <p className="text-sm text-gray-500">500mg twice daily</p>
                      </div>
                      <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">1 dose missed</span>
                    </div>
                    <div className="flex mt-2 space-x-1">
                      {Array.from({ length: 7 }).map((_, i) => (
                        <div key={i} className={`h-2 flex-1 rounded-full ${i !== 3 ? "bg-green-500" : "bg-red-500"}`}></div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="font-medium">Atorvastatin</h4>
                        <p className="text-sm text-gray-500">20mg once daily at bedtime</p>
                      </div>
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Taken today</span>
                    </div>
                    <div className="flex mt-2 space-x-1">
                      {Array.from({ length: 7 }).map((_, i) => (
                        <div key={i} className={`h-2 flex-1 rounded-full ${i < 7 ? "bg-green-500" : "bg-gray-200"}`}></div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="activities">
              <Card>
                <CardHeader>
                  <CardTitle>Physical Activities</CardTitle>
                  <CardDescription>
                    Track your exercise and daily movement
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card>
                      <CardHeader className="py-3">
                        <CardTitle className="text-sm">Steps</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex justify-between items-center">
                          <div className="text-2xl font-bold">8,432</div>
                          <TrendingUp className="h-4 w-4 text-green-500" />
                        </div>
                        <p className="text-xs text-gray-500 mt-1">Goal: 10,000</p>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                          <div className="bg-medical-blue h-2.5 rounded-full" style={{ width: "84%" }}></div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="py-3">
                        <CardTitle className="text-sm">Active Minutes</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex justify-between items-center">
                          <div className="text-2xl font-bold">42</div>
                          <TrendingUp className="h-4 w-4 text-green-500" />
                        </div>
                        <p className="text-xs text-gray-500 mt-1">Goal: 30</p>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                          <div className="bg-medical-teal h-2.5 rounded-full" style={{ width: "140%" }}></div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="py-3">
                        <CardTitle className="text-sm">Calories</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex justify-between items-center">
                          <div className="text-2xl font-bold">324</div>
                          <TrendingUp className="h-4 w-4 text-green-500" />
                        </div>
                        <p className="text-xs text-gray-500 mt-1">Goal: 400</p>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                          <div className="bg-medical-blue h-2.5 rounded-full" style={{ width: "81%" }}></div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="rounded-lg border p-4">
                    <h4 className="font-medium mb-2">Recent Activities</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center justify-between border-b pb-2">
                        <div>
                          <p className="font-medium">Morning Walk</p>
                          <p className="text-sm text-gray-500">30 minutes, 2.1 miles</p>
                        </div>
                        <span className="text-sm text-gray-500">Today</span>
                      </li>
                      <li className="flex items-center justify-between border-b pb-2">
                        <div>
                          <p className="font-medium">Strength Training</p>
                          <p className="text-sm text-gray-500">45 minutes</p>
                        </div>
                        <span className="text-sm text-gray-500">Yesterday</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Cycling</p>
                          <p className="text-sm text-gray-500">60 minutes, 12 miles</p>
                        </div>
                        <span className="text-sm text-gray-500">2 days ago</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default HealthDashboard;
