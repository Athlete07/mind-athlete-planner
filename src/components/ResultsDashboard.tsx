
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Brain, Target, Zap, TrendingUp, RotateCcw, ArrowRight } from "lucide-react";

interface ResultsDashboardProps {
  results: any;
  onViewTraining: () => void;
  onRetakeAssessment: () => void;
}

const ResultsDashboard: React.FC<ResultsDashboardProps> = ({ 
  results, 
  onViewTraining, 
  onRetakeAssessment 
}) => {
  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-400";
    if (score >= 60) return "text-blue-400";
    if (score >= 40) return "text-yellow-400";
    return "text-red-400";
  };

  const getScoreGradient = (score: number) => {
    if (score >= 80) return "from-green-500 to-emerald-400";
    if (score >= 60) return "from-blue-500 to-cyan-400";
    if (score >= 40) return "from-yellow-500 to-orange-400";
    return "from-red-500 to-pink-400";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-6 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
              <Brain className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white">Your Mental Fitness Results</h1>
          </div>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Based on your responses, here's your comprehensive cognitive performance profile and personalized optimization recommendations.
          </p>
        </div>

        {/* Main Score Card */}
        <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm mb-8">
          <CardHeader className="text-center pb-4">
            <div className="flex justify-center mb-4">
              <div className={`w-32 h-32 rounded-full bg-gradient-to-r ${getScoreGradient(results.mfiScore)} flex items-center justify-center`}>
                <div className="w-28 h-28 rounded-full bg-slate-900 flex items-center justify-center">
                  <span className={`text-4xl font-bold ${getScoreColor(results.mfiScore)}`}>
                    {results.mfiScore}
                  </span>
                </div>
              </div>
            </div>
            <CardTitle className="text-2xl text-white">Mental Fitness Index (MFI)</CardTitle>
            <Badge 
              variant="secondary" 
              className={`bg-gradient-to-r ${getScoreGradient(results.mfiScore)} text-white border-none text-lg px-4 py-1`}
            >
              {results.category}
            </Badge>
            <p className="text-slate-400 mt-2">{results.description}</p>
          </CardHeader>
        </Card>

        {/* Detailed Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <Target className="w-5 h-5 text-blue-400" />
                <CardTitle className="text-sm text-slate-300">Mental VO₂ Max</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-400 mb-2">{results.mvo2Score}</div>
              <Progress value={results.mvo2Score} className="h-2 bg-slate-700" />
              <p className="text-xs text-slate-500 mt-2">Peak cognitive capacity index</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5 text-cyan-400" />
                <CardTitle className="text-sm text-slate-300">Recovery Index</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-cyan-400 mb-2">{results.recoveryIndex}/10</div>
              <Progress value={results.recoveryIndex * 10} className="h-2 bg-slate-700" />
              <p className="text-xs text-slate-500 mt-2">Cognitive bounce-back rate</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <CardTitle className="text-sm text-slate-300">Focus Endurance</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-400 mb-2">{results.focusEndurance}%</div>
              <Progress value={results.focusEndurance} className="h-2 bg-slate-700" />
              <p className="text-xs text-slate-500 mt-2">Sustained attention capacity</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <Brain className="w-5 h-5 text-purple-400" />
                <CardTitle className="text-sm text-slate-300">Task Agility</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-400 mb-2">{results.taskAgility}%</div>
              <Progress value={results.taskAgility} className="h-2 bg-slate-700" />
              <p className="text-xs text-slate-500 mt-2">Context switching efficiency</p>
            </CardContent>
          </Card>
        </div>

        {/* Cognitive Profile */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Target className="w-5 h-5" />
                Cognitive Strengths
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {results.strengths.map((strength: string, index: number) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    <span className="text-slate-300">{strength}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Growth Opportunities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {results.weaknesses.map((weakness: string, index: number) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                    <span className="text-slate-300">{weakness}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recommendation Card */}
        <Card className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border-blue-500/30 backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="text-white text-xl">Your Mental Performance Mode</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-blue-200 text-lg mb-4">{results.recommendedMode}</p>
            <p className="text-slate-300">{results.modeDescription}</p>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={onViewTraining}
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white px-8 py-3 text-lg"
          >
            View Your 12-Week Training Program
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button
            onClick={onRetakeAssessment}
            variant="outline"
            size="lg"
            className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-3 text-lg"
          >
            <RotateCcw className="w-5 h-5 mr-2" />
            Retake Assessment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResultsDashboard;
