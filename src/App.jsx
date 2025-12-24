import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, AlertTriangle, Phone, Lock, CheckCircle, XCircle } from 'lucide-react';
import { scenario, results } from './data';
import './App.css';

function App() {
  const [currentStep, setCurrentStep] = useState(0); // 0: Start, 1-10: Questions, 11: Result
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [lastFeedback, setLastFeedback] = useState({ text: '', isSafe: false });

  const handleStart = () => {
    setCurrentStep(1);
    setScore(0);
  };

  const handleAnswer = (isSafe, feedback) => {
    setLastFeedback({ text: feedback, isSafe });
    if (isSafe) setScore(score + 1);
    setShowFeedback(true);
  };

  const nextStep = () => {
    setShowFeedback(false);
    if (currentStep < 10) {
      setCurrentStep(currentStep + 1);
    } else {
      setCurrentStep(11);
    }
  };

  const restart = () => {
    setCurrentStep(0);
    setScore(0);
    setShowFeedback(false);
  };

  return (
    <div className="app-container">
      <AnimatePresence mode="wait">
        {currentStep === 0 && (
          <StartScreen key="start" onStart={handleStart} />
        )}
        {currentStep >= 1 && currentStep <= 10 && !showFeedback && (
          <QuestionScreen
            key={`step-${currentStep}`}
            data={scenario[currentStep - 1]}
            onAnswer={handleAnswer}
          />
        )}
        {showFeedback && (
          <FeedbackScreen
            key="feedback"
            feedback={lastFeedback}
            onNext={nextStep}
            isLast={currentStep === 10}
          />
        )}
        {currentStep === 11 && (
          <ResultScreen key="result" score={score} onRestart={restart} />
        )}
      </AnimatePresence>
    </div>
  );
}

function StartScreen({ onStart }) {
  return (
    <motion.div
      className="screen start-screen"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <Shield size={64} className="icon-shield" />
      <h1>千葉県警<br />詐欺防犯シミュレーター</h1>
      <p>あなたのスマホに忍び寄る「予兆」を見抜けますか？</p>
      <button className="btn-primary" onClick={onStart}>診断を開始する</button>
    </motion.div>
  );
}


function QuestionScreen({ data, onAnswer }) {
  const shuffledChoices = useMemo(() => {
    return [...data.choices].sort(() => Math.random() - 0.5);
  }, [data]);

  return (
    <motion.div
      className="screen question-screen"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
    >
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${(data.id / 10) * 100}%` }}></div>
      </div>
      <h2 className="step-title">{data.title}</h2>
      <div className="image-container">
        {/* Placeholder for images if not loaded */}
        <img src={data.image} alt={data.title} onError={(e) => e.target.style.display = 'none'} />
        <div className="image-overlay"></div>
      </div>
      <p className="question-text">{data.text}</p>
      <div className="choices">
        {shuffledChoices.map((choice, index) => (
          <button
            key={index}
            className="btn-choice"
            onClick={() => onAnswer(choice.isSafe, choice.feedback)}
          >
            {choice.text}
          </button>
        ))}
      </div>
    </motion.div>
  );
}

function FeedbackScreen({ feedback, onNext, isLast }) {
  return (
    <motion.div
      className={`screen feedback-screen ${feedback.isSafe ? 'safe' : 'danger'}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
    >
      <div className="feedback-icon">
        {feedback.isSafe ? <CheckCircle size={80} /> : <AlertTriangle size={80} />}
      </div>
      <h2>{feedback.isSafe ? "その調子！" : "危ない！"}</h2>
      <p>{feedback.text}</p>
      <button className="btn-next" onClick={onNext}>
        {isLast ? "結果を見る" : "次へ進む"}
      </button>
    </motion.div>
  );
}

function ResultScreen({ score, onRestart }) {
  const isSafe = score === 10; // Strict mode: MUST be 10/10 to be truly safe
  const resultData = isSafe ? results.safe : results.scammed;

  return (
    <motion.div
      className="screen result-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="result-header">
        {isSafe ? <Shield size={64} color="#4caf50" /> : <XCircle size={64} color="#f44336" />}
        <h2>{resultData.title}</h2>
      </div>
      <div className="result-image">
        <img src={resultData.image} alt="Result" onError={(e) => e.target.style.display = 'none'} />
      </div>
      <p className="result-text">{resultData.text}</p>
      <div className="advice-box">
        <h3>アドバイス</h3>
        <p>{resultData.advice}</p>
      </div>
      <p className="score-display">あなたの防犯レベル: {score} / 10</p>
      <button className="btn-primary" onClick={onRestart}>もう一度挑戦する</button>
    </motion.div>
  );
}

export default App;
