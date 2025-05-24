
export const generateTrainingProgram = (results: any) => {
  const { mfiScore, categoryScores, strengths, weaknesses } = results;
  
  // Base program structure
  const baseProgram = {
    phase1: [
      {
        title: "Foundation Building",
        description: "Establish baseline focus patterns and introduce basic cognitive training principles.",
        exercises: [
          {
            name: "Deep Work Initiation",
            description: "Start with 15-minute uninterrupted focus sessions",
            duration: "15 min, 2x daily"
          },
          {
            name: "Attention Anchor Practice",
            description: "Use breath awareness to train sustained attention",
            duration: "5 min, 3x daily"
          },
          {
            name: "Digital Environment Setup",
            description: "Configure distraction-free workspace and tools",
            duration: "One-time setup"
          }
        ]
      },
      {
        title: "Cognitive Awareness",
        description: "Develop metacognitive skills and mental state monitoring.",
        exercises: [
          {
            name: "Mental Energy Tracking",
            description: "Rate and log cognitive energy levels hourly",
            duration: "2 min, every hour"
          },
          {
            name: "Focus Quality Assessment",
            description: "Post-session evaluation of attention quality",
            duration: "3 min, after focus sessions"
          },
          {
            name: "Ultradian Rhythm Mapping",
            description: "Identify natural high and low energy periods",
            duration: "Daily observation"
          }
        ]
      },
      {
        title: "Basic Recovery Protocols",
        description: "Introduce fundamental cognitive recovery techniques.",
        exercises: [
          {
            name: "Cognitive Cool-down",
            description: "Structured transition between intense mental tasks",
            duration: "5 min, between sessions"
          },
          {
            name: "Eye Movement Reset",
            description: "Gaze shifting exercises to reduce mental fatigue",
            duration: "2 min, every 30 min"
          },
          {
            name: "Progressive Muscle Relaxation",
            description: "Release physical tension that impacts cognition",
            duration: "10 min, before sleep"
          }
        ]
      },
      {
        title: "Habit Anchoring",
        description: "Establish consistent cognitive fitness routines.",
        exercises: [
          {
            name: "Morning Cognitive Warm-up",
            description: "5-minute mental preparation routine",
            duration: "5 min, upon waking"
          },
          {
            name: "Evening Brain Dump",
            description: "Clear mental cache before rest",
            duration: "10 min, before sleep"
          },
          {
            name: "Micro-recovery Stacks",
            description: "Brief reset rituals between tasks",
            duration: "1-2 min, between tasks"
          }
        ]
      }
    ],
    phase2: [
      {
        title: "Endurance Building",
        description: "Extend focus capacity and build cognitive stamina.",
        exercises: [
          {
            name: "Extended Focus Sessions",
            description: "Gradually increase uninterrupted work periods to 45 minutes",
            duration: "45 min, 2x daily"
          },
          {
            name: "Distraction Resistance Training",
            description: "Practice maintaining focus amid controlled interruptions",
            duration: "30 min, daily"
          },
          {
            name: "Cognitive Load Progression",
            description: "Gradually increase task complexity and demand",
            duration: "Variable, based on capacity"
          }
        ]
      },
      {
        title: "Recovery Optimization",
        description: "Enhance cognitive recovery speed and quality.",
        exercises: [
          {
            name: "Active Recovery Protocols",
            description: "Walking meditation and nature exposure",
            duration: "15 min, 2x daily"
          },
          {
            name: "Glymphatic Enhancement",
            description: "Sleep optimization for brain detoxification",
            duration: "7-9 hours, nightly"
          },
          {
            name: "Cognitive Cross-training",
            description: "Engage different mental faculties for active rest",
            duration: "20 min, daily"
          }
        ]
      },
      {
        title: "Agility Development",
        description: "Improve task switching and mental flexibility.",
        exercises: [
          {
            name: "Context Switching Drills",
            description: "Rapid transitions between different types of tasks",
            duration: "25 min, daily"
          },
          {
            name: "Executive Function Training",
            description: "Working memory and inhibition control exercises",
            duration: "15 min, 3x weekly"
          },
          {
            name: "Cognitive Flexibility Challenges",
            description: "Perspective-shifting and rule-changing exercises",
            duration: "20 min, 3x weekly"
          }
        ]
      },
      {
        title: "Stress Inoculation",
        description: "Build resilience under cognitive pressure.",
        exercises: [
          {
            name: "Pressure Training Sessions",
            description: "Maintain quality under artificial time pressure",
            duration: "30 min, 3x weekly"
          },
          {
            name: "Cognitive Stress Testing",
            description: "Complex multi-tasking scenarios",
            duration: "20 min, 2x weekly"
          },
          {
            name: "Cortical Stability Practice",
            description: "Maintain clarity during emotional or physical stress",
            duration: "15 min, daily"
          }
        ]
      }
    ],
    phase3: [
      {
        title: "Peak Performance",
        description: "Achieve consistent high-level cognitive output.",
        exercises: [
          {
            name: "Ultra-Focus Sessions",
            description: "90-minute deep work sessions with minimal breaks",
            duration: "90 min, daily"
          },
          {
            name: "Flow State Cultivation",
            description: "Systematic approach to entering optimal cognitive states",
            duration: "Variable, daily practice"
          },
          {
            name: "Cognitive Athletics",
            description: "Competition-style mental challenges",
            duration: "45 min, 3x weekly"
          }
        ]
      },
      {
        title: "Advanced Recovery",
        description: "Master rapid cognitive restoration techniques.",
        exercises: [
          {
            name: "Micro-recovery Mastery",
            description: "5-minute complete cognitive resets",
            duration: "5 min, between sessions"
          },
          {
            name: "Biohack Integration",
            description: "Advanced recovery tools and techniques",
            duration: "Variable, daily"
          },
          {
            name: "Recovery-Performance Optimization",
            description: "Fine-tune work-rest ratios for peak output",
            duration: "Ongoing monitoring"
          }
        ]
      },
      {
        title: "Elite Adaptability",
        description: "Master complex cognitive demands and environments.",
        exercises: [
          {
            name: "Multi-domain Switching",
            description: "Rapid transitions across vastly different cognitive domains",
            duration: "40 min, daily"
          },
          {
            name: "Chaos Navigation",
            description: "Maintain performance in unpredictable environments",
            duration: "30 min, 3x weekly"
          },
          {
            name: "Cognitive Leadership",
            description: "High-level thinking while managing multiple variables",
            duration: "60 min, 3x weekly"
          }
        ]
      },
      {
        title: "Maintenance & Mastery",
        description: "Sustain peak cognitive fitness long-term.",
        exercises: [
          {
            name: "Performance Monitoring",
            description: "Track and adjust cognitive training based on metrics",
            duration: "15 min, weekly"
          },
          {
            name: "Challenge Progression",
            description: "Continuously increase cognitive demands",
            duration: "Variable, ongoing"
          },
          {
            name: "Cognitive Lifestyle Integration",
            description: "Embed optimal practices into daily life permanently",
            duration: "Lifestyle integration"
          }
        ]
      }
    ]
  };

  // Customize based on user's specific needs
  if (categoryScores['Focus Endurance'] < 50) {
    // Add extra focus training in early phases
    baseProgram.phase1.forEach(week => {
      week.exercises.unshift({
        name: "Micro-focus Drills",
        description: "Start with 5-minute focus exercises to build basic attention span",
        duration: "5 min, 4x daily"
      });
    });
  }

  if (categoryScores['Cognitive Recovery'] < 50) {
    // Emphasize recovery protocols
    baseProgram.phase1.forEach((week, index) => {
      if (index % 2 === 1) { // Add to every other week
        week.exercises.push({
          name: "Enhanced Recovery Protocol",
          description: "Extended recovery sessions for faster mental restoration",
          duration: "15 min, after each focus session"
        });
      }
    });
  }

  if (categoryScores['Task Switching Agility'] < 50) {
    // Add agility training from phase 1
    baseProgram.phase1[2].exercises.push({
      name: "Basic Task Switching",
      description: "Simple transitions between reading and writing tasks",
      duration: "10 min, 2x daily"
    });
  }

  return baseProgram;
};
