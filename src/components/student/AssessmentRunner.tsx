import React, { useState } from 'react';
import { useEcosystem } from '../../context/EcosystemContext';
import { CheckCircle2, Clock, Award, ArrowRight, RotateCcw, Play } from 'lucide-react';
import { FeatureBadge } from '../common/FeatureBadge';

export const AssessmentRunner: React.FC = () => {
  const { updateSkillScore, setActiveTab } = useEcosystem();

  const [selectedAssessment, setSelectedAssessment] = useState<'python' | 'react' | 'dsa'>('react');
  const [currentStep, setCurrentStep] = useState<'intro' | 'quiz' | 'result'>('intro');
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [calculatedScore, setCalculatedScore] = useState<number>(0);

  const sampleQuizzes = {
    python: {
      title: 'Python Advanced Assessment',
      questionsCount: 5,
      timeMinutes: 10,
      questions: [
        { q: 'What is the primary function of Python decoraters with @functools.wraps?', options: ['Preserve original function metadata like __name__ and __doc__', 'Optimize memory execution speed', 'Enforce strict static type checking', 'Convert sync functions to async'], correct: 0 },
        { q: 'In Python asyncio, what does asyncio.gather() accomplish?', options: ['Executes coroutines concurrently and returns ordered results', 'Blocks GIL execution across threads', 'Parses JSON payload asynchronously', 'Compiles bytecode'], correct: 0 },
        { q: 'What is the time complexity of lookup in a Python dictionary average case?', options: ['O(1)', 'O(log n)', 'O(n)', 'O(n^2)'], correct: 0 },
        { q: 'How does GIL impact multi-threading in CPython?', options: ['Prevents true parallel execution of bytecode on multiple CPU cores for CPU-bound tasks', 'Speeds up I/O bound execution tenfold', 'Restricts memory allocation to 2GB', 'Automates garbage collection'], correct: 0 },
        { q: 'What does a generator function return when yield is encountered?', options: ['A generator iterator yielding intermediate values', 'Void null', 'A full static array list', 'Promise object'], correct: 0 }
      ]
    },
    react: {
      title: 'React.js State & Performance Assessment',
      questionsCount: 5,
      timeMinutes: 10,
      questions: [
        { q: 'Which hook should be used to memoize expensive calculation values in React?', options: ['useMemo', 'useCallback', 'useEffect', 'useRef'], correct: 0 },
        { q: 'What happens when continuous state updates are dispatched inside a useEffect without dependency array?', options: ['Infinite re-render loop', 'Component unmounts immediately', 'Garbage collection error', 'React auto-throttles to 60fps'], correct: 0 },
        { q: 'What is the purpose of React Reconciliation engine (Virtual DOM)?', options: ['Diffing old vs new DOM trees to compute minimal real DOM operations', 'Replacing CSS flexbox engine', 'Executing server side queries', 'Compiling TypeScript to JS'], correct: 0 },
        { q: 'When should useCallback hook be passed to a child component?', options: ['When passing callback props to memoized child components (React.memo)', 'For all inline click handlers always', 'To delay network fetch requests', 'To format dates'], correct: 0 },
        { q: 'What is Context API best suited for in React applications?', options: ['Sharing global state like theme or auth across components without prop-drilling', 'Replacing database ORMs', 'Handling high-frequency 120fps canvas animations', 'Bundling asset files'], correct: 0 }
      ]
    },
    dsa: {
      title: 'Data Structures & Algorithms Advanced Assessment',
      questionsCount: 5,
      timeMinutes: 10,
      questions: [
        { q: 'What is the optimal time complexity of finding shortest paths in a weighted DAG?', options: ['O(V + E)', 'O(V^3)', 'O(E log V)', 'O(V^2)'], correct: 0 },
        { q: 'Which data structure is used in Breadth-First Search (BFS) algorithm?', options: ['Queue (FIFO)', 'Stack (LIFO)', 'Max Heap', 'Binary Search Tree'], correct: 0 },
        { q: 'What is the worst-case space complexity of QuickSort?', options: ['O(log n) call stack space', 'O(n^2)', 'O(1)', 'O(n log n)'], correct: 0 },
        { q: 'How does LRU (Least Recently Used) Cache achieve O(1) get and put operations?', options: ['Combining a Doubly Linked List with a Hash Map', 'Using a Min Heap array', 'Using B-Trees', 'Using Binary Search'], correct: 0 },
        { q: 'What is the time complexity to insert an element in a Balanced Binary Search Tree (AVL/Red-Black)?', options: ['O(log n)', 'O(1)', 'O(n)', 'O(n log n)'], correct: 0 }
      ]
    }
  };

  const activeQuiz = sampleQuizzes[selectedAssessment];

  const handleAnswerSelect = (optionIdx: number) => {
    const nextAnswers = [...answers];
    nextAnswers[questionIndex] = optionIdx;
    setAnswers(nextAnswers);
  };

  const handleNextQuestion = () => {
    if (questionIndex < activeQuiz.questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      let correctCount = 0;
      activeQuiz.questions.forEach((q, idx) => {
        if (answers[idx] === q.correct) correctCount++;
      });
      const finalPct = Math.round((correctCount / activeQuiz.questions.length) * 40 + 55);
      setCalculatedScore(finalPct);

      const skillName = selectedAssessment === 'react' ? 'React.js' : selectedAssessment === 'python' ? 'Python' : 'Data Structures & Algorithms';
      updateSkillScore(skillName, finalPct);

      setCurrentStep('result');
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-extrabold text-slate-900">Standardized Skill Assessments</h1>
            <FeatureBadge text="AUTOMATED EVALUATION" variant="purple" />
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Complete timed skill examinations to upgrade your verification status from Level 2 Certified to Level 3 Assessed.
          </p>
        </div>
      </div>

      {currentStep === 'intro' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {(['react', 'python', 'dsa'] as const).map((key) => {
            const quiz = sampleQuizzes[key];
            const isSelected = selectedAssessment === key;
            return (
              <div
                key={key}
                className={`bg-white rounded-2xl p-6 border transition-all shadow-xs space-y-4 flex flex-col justify-between ${
                  isSelected ? 'border-indigo-600 ring-2 ring-indigo-500/20' : 'border-slate-200'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 font-mono">Standard Exam</span>
                    <span className="px-2 py-0.5 bg-slate-100 text-slate-700 text-xs font-semibold rounded-md flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {quiz.timeMinutes} mins
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{quiz.title}</h3>
                  <p className="text-xs text-slate-500">{quiz.questionsCount} Multiple Choice Questions evaluating core concepts, memory performance, and architectural patterns.</p>
                </div>

                <button
                  onClick={() => {
                    setSelectedAssessment(key);
                    setQuestionIndex(0);
                    setAnswers([]);
                    setCurrentStep('quiz');
                  }}
                  className="w-full py-2.5 bg-indigo-600 text-white hover:bg-indigo-700 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow-md"
                >
                  <Play className="w-4 h-4" />
                  <span>Start Assessment</span>
                </button>
              </div>
            );
          })}
        </div>
      )}

      {currentStep === 'quiz' && (
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xl max-w-3xl mx-auto space-y-6">
          
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <span className="text-xs font-mono font-bold text-indigo-600 uppercase">Question {questionIndex + 1} of {activeQuiz.questions.length}</span>
              <h3 className="font-bold text-slate-900 text-base">{activeQuiz.title}</h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-600 bg-slate-100 px-3 py-1.5 rounded-lg">
              <Clock className="w-4 h-4 text-indigo-600" />
              <span>08:42 Remaining</span>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-base font-bold text-slate-900 leading-relaxed">
              {activeQuiz.questions[questionIndex].q}
            </h4>

            <div className="space-y-2.5">
              {activeQuiz.questions[questionIndex].options.map((opt, oIdx) => {
                const isChosen = answers[questionIndex] === oIdx;
                return (
                  <button
                    key={oIdx}
                    onClick={() => handleAnswerSelect(oIdx)}
                    className={`w-full text-left p-4 rounded-xl text-xs font-medium border transition-all flex items-center justify-between ${
                      isChosen
                        ? 'border-indigo-600 bg-indigo-50/80 text-indigo-950 font-bold shadow-xs'
                        : 'border-slate-200 bg-slate-50/50 hover:bg-slate-100 text-slate-800'
                    }`}
                  >
                    <span>{opt}</span>
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                      isChosen ? 'border-indigo-600 bg-indigo-600 text-white' : 'border-slate-300'
                    }`}>
                      {isChosen && <CheckCircle2 className="w-3.5 h-3.5" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex justify-between items-center pt-4 border-t border-slate-100">
            <button
              onClick={() => setCurrentStep('intro')}
              className="text-xs text-slate-500 hover:text-slate-800 font-semibold"
            >
              Cancel Exam
            </button>
            <button
              disabled={answers[questionIndex] === undefined}
              onClick={handleNextQuestion}
              className="px-6 py-2.5 bg-indigo-600 text-white rounded-xl text-xs font-bold hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2 shadow-md"
            >
              <span>{questionIndex === activeQuiz.questions.length - 1 ? 'Submit Assessment' : 'Next Question'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}

      {currentStep === 'result' && (
        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-2xl max-w-xl mx-auto text-center space-y-6 animate-scale-up">
          <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-3xl flex items-center justify-center mx-auto border-4 border-emerald-50 shadow-inner">
            <Award className="w-10 h-10" />
          </div>

          <div>
            <FeatureBadge text="SKILL VERIFIED" variant="emerald" />
            <h2 className="text-3xl font-extrabold text-slate-900 mt-2">Assessment Score: {calculatedScore}%</h2>
            <p className="text-xs text-slate-600 mt-1 max-w-md mx-auto">
              Your score meets the <strong>Advanced Level 3 Verification Threshold</strong>. Your verified skill level and job suitability metrics have been updated in real-time!
            </p>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs font-mono space-y-1 text-slate-700">
            <div><strong>Verified Skill:</strong> {selectedAssessment.toUpperCase()}</div>
            <div><strong>Verification Upgrade:</strong> Level 2 Certified → <span className="text-emerald-600 font-bold">Level 3 Assessed</span></div>
            <div><strong>Job Suitability Impact:</strong> Software Developer suitability increased to 93%!</div>
          </div>

          <div className="flex gap-3 justify-center">
            <button
              onClick={() => setCurrentStep('intro')}
              className="px-4 py-2.5 bg-slate-100 text-slate-700 hover:bg-slate-200 rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Take Another Test</span>
            </button>
            <button
              onClick={() => setActiveTab('job-suitability')}
              className="px-6 py-2.5 bg-indigo-600 text-white hover:bg-indigo-700 rounded-xl text-xs font-bold transition-colors shadow-md flex items-center gap-2"
            >
              <span>View Updated Job Suitability</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
