
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Calendar, Target, Zap, Clock, CheckCircle } from "lucide-react";
import { generateTrainingProgram } from "@/utils/trainingProgram";

interface TrainingProgramProps {
  results: any;
  onBack: () => void;
}

const TrainingProgram: React.FC<TrainingProgramProps> = ({ results, onBack }) => {
  const [activeWeek, setActiveWeek] = useState(1);
  const trainingProgram = generateTrainingProgram(results);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-6 py-8 max-w-6xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="text-slate-300 hover:text-white hover:bg-slate-800"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Results
          </Button>
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white">Your Personalized Training Program</h1>
            <p className="text-slate-400">12-Week Cognitive Optimization Plan</p>
          </div>
          <div className="w-24"></div>
        </div>

        {/* Program Overview */}
        <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="text-white text-xl">Program Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Focus Training</h3>
                <p className="text-slate-400 text-sm">Build sustained attention and concentration endurance</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Recovery Protocols</h3>
                <p className="text-slate-400 text-sm">Optimize cognitive recovery and mental energy</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Agility Drills</h3>
                <p className="text-slate-400 text-sm">Enhance mental flexibility and adaptability</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Training Phases */}
        <Tabs defaultValue="phase1" className="mb-8">
          <TabsList className="grid w-full grid-cols-3 bg-slate-800 border-slate-700">
            <TabsTrigger value="phase1" className="data-[state=active]:bg-blue-600">
              Phase 1: Foundation (Weeks 1-4)
            </TabsTrigger>
            <TabsTrigger value="phase2" className="data-[state=active]:bg-blue-600">
              Phase 2: Development (Weeks 5-8)
            </TabsTrigger>
            <TabsTrigger value="phase3" className="data-[state=active]:bg-blue-600">
              Phase 3: Optimization (Weeks 9-12)
            </TabsTrigger>
          </TabsList>

          <TabsContent value="phase1" className="mt-6">
            <div className="grid md:grid-cols-2 gap-6">
              {trainingProgram.phase1.map((week, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-blue-400" />
                      Week {index + 1}: {week.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 mb-4">{week.description}</p>
                    <div className="space-y-3">
                      {week.exercises.map((exercise, exerciseIndex) => (
                        <div key={exerciseIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="text-white font-medium">{exercise.name}</div>
                            <div className="text-slate-400 text-sm">{exercise.description}</div>
                            <Badge variant="secondary" className="mt-1 text-xs">
                              <Clock className="w-3 h-3 mr-1" />
                              {exercise.duration}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="phase2" className="mt-6">
            <div className="grid md:grid-cols-2 gap-6">
              {trainingProgram.phase2.map((week, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-green-400" />
                      Week {index + 5}: {week.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 mb-4">{week.description}</p>
                    <div className="space-y-3">
                      {week.exercises.map((exercise, exerciseIndex) => (
                        <div key={exerciseIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="text-white font-medium">{exercise.name}</div>
                            <div className="text-slate-400 text-sm">{exercise.description}</div>
                            <Badge variant="secondary" className="mt-1 text-xs">
                              <Clock className="w-3 h-3 mr-1" />
                              {exercise.duration}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="phase3" className="mt-6">
            <div className="grid md:grid-cols-2 gap-6">
              {trainingProgram.phase3.map((week, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-purple-400" />
                      Week {index + 9}: {week.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 mb-4">{week.description}</p>
                    <div className="space-y-3">
                      {week.exercises.map((exercise, exerciseIndex) => (
                        <div key={exerciseIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="text-white font-medium">{exercise.name}</div>
                            <div className="text-slate-400 text-sm">{exercise.description}</div>
                            <Badge variant="secondary" className="mt-1 text-xs">
                              <Clock className="w-3 h-3 mr-1" />
                              {exercise.duration}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Quick Tips */}
        <Card className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border-blue-500/30 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white">Quick Start Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-blue-300 font-semibold mb-2">Daily Habits</h4>
                <ul className="space-y-2 text-slate-300">
                  <li>• Start with 10-minute focused sessions</li>
                  <li>• Use natural light to regulate circadian rhythms</li>
                  <li>• Take 5-minute breaks every 25-30 minutes</li>
                  <li>• Practice mindful breathing between tasks</li>
                </ul>
              </div>
              <div>
                <h4 className="text-blue-300 font-semibold mb-2">Progress Tracking</h4>
                <ul className="space-y-2 text-slate-300">
                  <li>• Rate your focus quality daily (1-10)</li>
                  <li>• Track mental energy levels throughout day</li>
                  <li>• Note your peak performance hours</li>
                  <li>• Monitor recovery time after intense work</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TrainingProgram;
