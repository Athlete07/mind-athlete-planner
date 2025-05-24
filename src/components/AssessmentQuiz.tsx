
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, Brain } from "lucide-react";
import { calculateMFIScore } from "@/utils/scoringLogic";

interface AssessmentQuizProps {
  onComplete: (results: any) => void;
  onBack: () => void;
}

const questions = [
  {
    id: 1,
    category: "Focus Endurance",
    question: "I can stay in deep focus for 30-60 minutes without breaks or distractions.",
    description: "Rate your ability to maintain sustained attention on demanding tasks."
  },
  {
    id: 2,
    category: "Cognitive Recovery",
    question: "After intense thinking or problem-solving, I feel mentally drained for extended periods.",
    description: "How quickly do you bounce back from cognitively demanding work?"
  },
  {
    id: 3,
    category: "Task Switching Agility",
    question: "Switching between meetings or different types of tasks leaves me mentally foggy.",
    description: "Assess your ability to maintain clarity when context-switching."
  },
  {
    id: 4,
    category: "Stress Resilience",
    question: "I can think clearly and make good decisions even under pressure or tight deadlines.",
    description: "How well do you maintain cognitive performance under stress?"
  },
  {
    id: 5,
    category: "Mental Energy Reserve",
    question: "I have consistent mental energy throughout my most productive hours.",
    description: "Rate your overall cognitive stamina and energy management."
  },
  {
    id: 6,
    category: "Focus Endurance",
    question: "I rarely experience mind-wandering or attention drift during important tasks.",
    description: "How well can you control and direct your attention?"
  },
  {
    id: 7,
    category: "Cognitive Recovery",
    question: "I use specific techniques or rituals to restore my mental clarity after demanding work.",
    description: "Do you actively manage your cognitive recovery?"
  },
  {
    id: 8,
    category: "Task Switching Agility",
    question: "I can quickly adapt my thinking style when moving between different types of problems.",
    description: "Rate your cognitive flexibility and adaptability."
  },
  {
    id: 9,
    category: "Stress Resilience",
    question: "Mental stress and pressure linger in my mind even after I've finished work.",
    description: "How well do you compartmentalize and release cognitive stress?"
  },
  {
    id: 10,
    category: "Mental Energy Reserve",
    question: "I know my peak mental performance hours and schedule my most important work accordingly.",
    description: "How well do you understand and optimize your cognitive rhythms?"
  },
  {
    id: 11,
    category: "Focus Endurance",
    question: "I can maintain attention quality even when working on boring or repetitive tasks.",
    description: "Rate your ability to sustain focus regardless of task engagement level."
  },
  {
    id: 12,
    category: "Cognitive Recovery",
    question: "I recover quickly from mental exhaustion compared to others.",
    description: "How does your cognitive recovery rate compare to your perception of others?"
  }
];

const scaleLabels = [
  "Strongly Disagree",
  "Disagree", 
  "Somewhat Disagree",
  "Neutral",
  "Somewhat Agree",
  "Agree",
  "Strongly Agree"
];

const AssessmentQuiz: React.FC<AssessmentQuizProps> = ({ onComplete, onBack }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswerSelect = (value: number) => {
    setSelectedAnswer(value);
  };

  const handleNext = () => {
    if (selectedAnswer !== null) {
      setAnswers(prev => ({ ...prev, [questions[currentQuestion].id]: selectedAnswer }));
      
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(prev => prev + 1);
        setSelectedAnswer(null);
      } else {
        // Assessment complete
        const finalAnswers = { ...answers, [questions[currentQuestion].id]: selectedAnswer };
        const results = calculateMFIScore(finalAnswers, questions);
        onComplete(results);
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
      setSelectedAnswer(answers[questions[currentQuestion - 1].id] || null);
    }
  };

  const currentQ = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-6 py-8 max-w-4xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="text-slate-300 hover:text-white hover:bg-slate-800"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          <div className="flex items-center gap-3">
            <Brain className="w-6 h-6 text-blue-400" />
            <span className="text-xl font-semibold text-white">Mental Fitness Assessment</span>
          </div>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm text-slate-400">Question {currentQuestion + 1} of {questions.length}</span>
            <span className="text-sm text-slate-400">{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2 bg-slate-800" />
        </div>

        {/* Question Card */}
        <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm mb-8">
          <CardHeader>
            <div className="flex items-center gap-3 mb-4">
              <div className="px-3 py-1 bg-blue-500/20 rounded-full">
                <span className="text-blue-300 text-sm font-medium">{currentQ.category}</span>
              </div>
            </div>
            <CardTitle className="text-2xl text-white leading-relaxed">{currentQ.question}</CardTitle>
            <p className="text-slate-400 mt-2">{currentQ.description}</p>
          </CardHeader>
          <CardContent>
            {/* Rating Scale */}
            <div className="space-y-3">
              {scaleLabels.map((label, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index + 1)}
                  className={`w-full p-4 rounded-lg border-2 text-left transition-all duration-200 ${
                    selectedAnswer === index + 1
                      ? 'border-blue-500 bg-blue-500/20 text-blue-300'
                      : 'border-slate-600 bg-slate-700/50 text-slate-300 hover:border-slate-500 hover:bg-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{label}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-slate-500">{index + 1}</span>
                      <div className={`w-4 h-4 rounded-full border-2 ${
                        selectedAnswer === index + 1 ? 'border-blue-500 bg-blue-500' : 'border-slate-500'
                      }`}>
                        {selectedAnswer === index + 1 && (
                          <div className="w-2 h-2 bg-white rounded-full m-0.5"></div>
                        )}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="border-slate-600 text-slate-300 hover:bg-slate-800"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>
          <Button
            onClick={handleNext}
            disabled={selectedAnswer === null}
            className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white"
          >
            {currentQuestion === questions.length - 1 ? 'Complete Assessment' : 'Next Question'}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AssessmentQuiz;
