
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Target, TrendingUp, Zap } from "lucide-react";
import AssessmentQuiz from "@/components/AssessmentQuiz";
import ResultsDashboard from "@/components/ResultsDashboard";
import TrainingProgram from "@/components/TrainingProgram";

const Index = () => {
  const [currentView, setCurrentView] = useState<'landing' | 'assessment' | 'results' | 'training'>('landing');
  const [assessmentResults, setAssessmentResults] = useState(null);

  const handleAssessmentComplete = (results: any) => {
    setAssessmentResults(results);
    setCurrentView('results');
  };

  const renderLandingPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">Mental Fitness Index</span>
          </div>
          <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
            Beta Version
          </Badge>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Train Your Brain Like
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"> an Athlete</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Measure your mental stamina, cognitive endurance, and neural agility with our performance-based assessment. 
            Get your Mental VO₂ Max score and a personalized 12-week brain optimization program.
          </p>
          <Button 
            onClick={() => setCurrentView('assessment')}
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Start Your Mental Fitness Assessment
            <Zap className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-white">Focus Endurance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-400">
                Measure your ability to maintain high-quality attention without cognitive drift. Track your deep work capacity.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-white">Cognitive Recovery</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-400">
                Assess how quickly you regain mental clarity after high-output tasks or cognitive depletion.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-white">Mental Agility</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-400">
                Evaluate your speed and clarity in shifting contexts without losing productivity or mental sharpness.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Your Mental Performance Benchmark</h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">MFI Score</div>
              <div className="text-slate-400">0-100 Scale</div>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">MVO₂ Max</div>
              <div className="text-slate-400">Mental Volume Index</div>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">CR Index</div>
              <div className="text-slate-400">Cognitive Recovery</div>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">12 Weeks</div>
              <div className="text-slate-400">Training Program</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (currentView === 'assessment') {
    return <AssessmentQuiz onComplete={handleAssessmentComplete} onBack={() => setCurrentView('landing')} />;
  }

  if (currentView === 'results' && assessmentResults) {
    return (
      <ResultsDashboard 
        results={assessmentResults} 
        onViewTraining={() => setCurrentView('training')}
        onRetakeAssessment={() => setCurrentView('assessment')}
      />
    );
  }

  if (currentView === 'training' && assessmentResults) {
    return (
      <TrainingProgram 
        results={assessmentResults}
        onBack={() => setCurrentView('results')}
      />
    );
  }

  return renderLandingPage();
};

export default Index;
