import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import RatingPage from '../../components/common/RatingPage';
import ResultChart from './ResultChart';
import { Categories } from '../../data/data';

const Test = () => {
  const { SubCatId, SubCatName } = useParams();
  const [questionsToRender, setQuestionsToRender] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [reviewMode, setReviewMode] = useState(false);
  const [flaggedQuestions, setFlaggedQuestions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const category = Categories.find(cat =>
      cat.topics.some(topic => topic._id === SubCatId)
    );
    const topicQuestions = category?.topics.find(t => t._id === SubCatId)?.questions || [];
    setQuestionsToRender(topicQuestions);
  }, [SubCatId]);


  const handleAnswerOptionClick = (isCorrect, key) => {
    if (isCorrect) setScore(score + 1);
    setUserAnswers([...userAnswers, key]);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questionsToRender.length) setCurrentQuestion(nextQuestion);
    else setShowScore(true);
  };

  const handleRetake = () => {
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
    setUserAnswers([]);
    setReviewMode(false);
    setFlaggedQuestions([]);
  };

  useEffect(() => {
    if (showScore && userAnswers.length === questionsToRender.length) {
      const history = JSON.parse(localStorage.getItem('quizHistory') || '[]');
      history.push({
        date: new Date().toLocaleString(),
        score,
        total: questionsToRender.length,
        flagged: flaggedQuestions.length,
        answers: userAnswers,
        category: SubCatName || 'General',
      });
      localStorage.setItem('quizHistory', JSON.stringify(history));
    }
  }, [showScore, userAnswers, questionsToRender.length, flaggedQuestions.length, score, SubCatName]);

  const handleFlag = () => {
    if (!flaggedQuestions.includes(currentQuestion)) {
      setFlaggedQuestions([...flaggedQuestions, currentQuestion]);
      alert('Question flagged for review.');
    }
  };

  const handleReview = () => setReviewMode(true);
  const handleBackToQuiz = () => setReviewMode(false);

  const navLinks = [
    { to: '/', text: 'Home' },
    { to: '/OnlineTest', text: 'Quiz' },
    { to: '/About', text: 'About Us' },
    { to: '/Contact', text: 'Contact Us' },
  ];

  if (questionsToRender.length === 0)
  return <div className="text-center mt-10 text-gray-800">No questions found for {SubCatName}</div>;

  return (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Header brand="Educap" navLinks={navLinks} />
  <div className="container mx-auto my-10 p-6 border-2 border-blue-100 rounded-xl bg-white/90 shadow-xl">

        {!showScore && !reviewMode && (
          <div className="flex items-center mb-6">
            <div className="w-2/3 bg-gray-200 rounded-full h-3 mr-4">
              <div
                className="bg-blue-500 h-3 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questionsToRender.length) * 100}%` }}
                aria-label="Quiz Progress"
              ></div>
            </div>
          </div>
        )}


        {showScore && !reviewMode ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">You scored {score} out of {questionsToRender.length}</h2>
            <ResultChart correct={score} incorrect={questionsToRender.length - score} />
            <div className="flex flex-wrap justify-center gap-4 mb-4">
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition-all duration-150"
                onClick={handleReview}
              >
                Review Answers
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-all duration-150"
                onClick={handleRetake}
              >
                Retake Quiz
              </button>
              <button
                className="bg-gray-500 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded transition-all duration-150"
                onClick={() => navigate('/OnlineTest')}
              >
                Back to Categories
              </button>
            </div>
            <RatingPage />
            <div className="mt-8 text-left max-w-xl mx-auto">
              <h3 className="text-xl font-semibold mb-4 text-red-600">Incorrect Answers:</h3>
              <ul className="space-y-4">
                {questionsToRender.map((q, idx) => {
                  const userAnswer = userAnswers[idx];
                  if (userAnswer && userAnswer !== q.correctAnswer) {
                    const correctOption = q.options.find(opt => Object.keys(opt)[0] === q.correctAnswer);
                    const userOption = q.options.find(opt => Object.keys(opt)[0] === userAnswer);
                    return (
                      <li key={idx} className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
                        <div className="font-semibold">Q{idx + 1}: {q.Question}</div>
                        <div>Your answer: <span className="text-red-600">{userOption ? Object.values(userOption)[0] : 'No answer'}</span></div>
                        <div>Correct answer: <span className="text-green-600">{correctOption ? Object.values(correctOption)[0] : ''}</span></div>
                      </li>
                    );
                  }
                  return null;
                })}
              </ul>
            </div>
          </div>
        ) : reviewMode ? (

          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">Review Your Answers</h2>
            <ul className="space-y-6">
              {questionsToRender.map((q, idx) => {
                const userAnswer = userAnswers[idx];
                const correctOption = q.options.find(opt => Object.keys(opt)[0] === q.correctAnswer);
                const userOption = q.options.find(opt => Object.keys(opt)[0] === userAnswer);
                return (
                  <li key={idx} className="p-4 border rounded bg-gray-50">
                    <div className="font-semibold mb-2">Q{idx + 1}: {q.Question}</div>
                    <div className="mb-1">Your answer: <span className={userAnswer === q.correctAnswer ? 'text-green-600' : 'text-red-600'}>{userOption ? Object.values(userOption)[0] : 'No answer'}</span></div>
                    <div>Correct answer: <span className="text-green-600">{correctOption ? Object.values(correctOption)[0] : ''}</span></div>
                  </li>
                );
              })}
            </ul>
            <button
              className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-all duration-150"
              onClick={handleBackToQuiz}
            >
              Back to Score
            </button>
          </div>
        ) : (

          <>
            <div className="mb-4">
              <p className="mb-2 font-semibold">Question {currentQuestion + 1}/{questionsToRender.length}</p>
              <p className="text-lg">{questionsToRender[currentQuestion].Question}</p>
              <button
                className={`mt-2 px-3 py-1 rounded text-xs font-semibold border ${flaggedQuestions.includes(currentQuestion) ? 'bg-yellow-400 text-black border-yellow-500' : 'bg-gray-200 text-gray-700 border-gray-400 hover:bg-yellow-200'} transition-all duration-150`}
                onClick={handleFlag}
              >
                {flaggedQuestions.includes(currentQuestion) ? 'Flagged' : 'Flag/Report'}
              </button>
            </div>
            <div className="space-y-3">
              {questionsToRender[currentQuestion].options.map((option, index) => {
                const [key, value] = Object.entries(option)[0];
                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerOptionClick(key === questionsToRender[currentQuestion].correctAnswer, key)}
                    className="block bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md text-base mb-3 w-40 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-blue-300 text-left"
                  >
                    {value}
                  </button>
                );
              })}
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Test;
