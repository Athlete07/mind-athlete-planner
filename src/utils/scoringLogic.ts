
export const calculateMFIScore = (answers: { [key: number]: number }, questions: any[]) => {
  console.log('Calculating MFI Score with answers:', answers);
  
  // Group answers by category
  const categoryScores = {
    'Focus Endurance': [] as number[],
    'Cognitive Recovery': [] as number[],
    'Task Switching Agility': [] as number[],
    'Stress Resilience': [] as number[],
    'Mental Energy Reserve': [] as number[]
  };

  // Process each answer
  Object.entries(answers).forEach(([questionId, answer]) => {
    const question = questions.find(q => q.id === parseInt(questionId));
    if (question) {
      let processedScore = answer;
      
      // Reverse score for negatively worded questions
      const reverseQuestions = [2, 3, 9]; // Questions that should be reverse scored
      if (reverseQuestions.includes(parseInt(questionId))) {
        processedScore = 8 - answer; // Reverse the 1-7 scale
      }
      
      categoryScores[question.category as keyof typeof categoryScores].push(processedScore);
    }
  });

  // Calculate category averages
  const categoryAverages = Object.entries(categoryScores).reduce((acc, [category, scores]) => {
    const average = scores.length > 0 ? scores.reduce((sum, score) => sum + score, 0) / scores.length : 0;
    acc[category] = Math.round((average / 7) * 100); // Convert to 0-100 scale
    return acc;
  }, {} as { [key: string]: number });

  console.log('Category averages:', categoryAverages);

  // Calculate overall MFI score (weighted average)
  const weights = {
    'Focus Endurance': 0.25,
    'Cognitive Recovery': 0.20,
    'Task Switching Agility': 0.20,
    'Stress Resilience': 0.20,
    'Mental Energy Reserve': 0.15
  };

  const mfiScore = Math.round(
    Object.entries(categoryAverages).reduce((total, [category, score]) => {
      return total + (score * (weights[category as keyof typeof weights] || 0));
    }, 0)
  );

  // Calculate derived metrics
  const mvo2Score = Math.min(100, mfiScore + Math.round(Math.random() * 10 - 5)); // Slight variation
  const recoveryIndex = Math.round((categoryAverages['Cognitive Recovery'] / 10));
  const focusEndurance = categoryAverages['Focus Endurance'];
  const taskAgility = categoryAverages['Task Switching Agility'];

  // Determine category and description
  let category = '';
  let description = '';
  
  if (mfiScore >= 80) {
    category = 'Cognitive Athlete';
    description = 'You demonstrate elite mental performance with exceptional stamina, quick recovery, and superior cognitive agility. You operate at peak mental fitness.';
  } else if (mfiScore >= 60) {
    category = 'Strategic Striver';
    description = 'You show strong mental performance with good focus windows and manageable fatigue. You have solid cognitive foundations with room for optimization.';
  } else if (mfiScore >= 40) {
    category = 'Reactive Performer';
    description = 'You can achieve good mental performance in short bursts but experience noticeable fatigue. Building endurance and recovery skills will unlock your potential.';
  } else {
    category = 'Cognitive Crash Zone';
    description = 'You experience frequent mental fatigue and brain fog. Your cognitive system needs foundational support and structured recovery protocols.';
  }

  // Identify strengths and weaknesses
  const strengths = [];
  const weaknesses = [];

  if (categoryAverages['Focus Endurance'] >= 70) strengths.push('Strong sustained attention capacity');
  else weaknesses.push('Focus endurance needs development');

  if (categoryAverages['Cognitive Recovery'] >= 70) strengths.push('Excellent mental recovery abilities');
  else weaknesses.push('Cognitive recovery could be improved');

  if (categoryAverages['Task Switching Agility'] >= 70) strengths.push('High mental flexibility and adaptability');
  else weaknesses.push('Task switching efficiency needs work');

  if (categoryAverages['Stress Resilience'] >= 70) strengths.push('Maintains clarity under pressure');
  else weaknesses.push('Stress management skills need strengthening');

  if (categoryAverages['Mental Energy Reserve'] >= 70) strengths.push('Good mental energy management');
  else weaknesses.push('Mental energy optimization needed');

  // Generate recommendations
  let recommendedMode = '';
  let modeDescription = '';

  if (focusEndurance >= 70 && categoryAverages['Cognitive Recovery'] >= 70) {
    recommendedMode = 'Endurance Mode';
    modeDescription = 'You excel in extended focus sessions (90-120 minutes) with natural recovery cycles.';
  } else if (focusEndurance >= 60) {
    recommendedMode = 'Sprint Mode';
    modeDescription = 'You perform best in focused 30-60 minute sessions with deliberate breaks.';
  } else {
    recommendedMode = 'Interval Mode';
    modeDescription = 'You benefit from short 15-25 minute focus blocks with frequent recovery periods.';
  }

  const results = {
    mfiScore,
    category,
    description,
    mvo2Score,
    recoveryIndex,
    focusEndurance,
    taskAgility,
    categoryScores: categoryAverages,
    strengths,
    weaknesses,
    recommendedMode,
    modeDescription
  };

  console.log('Final results:', results);
  return results;
};
