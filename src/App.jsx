import { useState, useEffect } from 'react'
import './App.css'
import "modern-normalize";
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const savedData = localStorage.getItem('feedback');
    return savedData ? JSON.parse(savedData) : {good: 0, neutral: 0, bad: 0};
    });

  const updateFeedback = (feedbackType) => {
    setFeedback((prevState) => {
      const newFeedback = { ...prevState, [feedbackType]: prevState[feedbackType] + 1 };
      localStorage.setItem('feedback', JSON.stringify(newFeedback));
      return newFeedback;
    });
  };

   const resetFeedback = () => {
    const resetState = { good: 0, neutral: 0, bad: 0 };
    setFeedback(resetState);
    localStorage.setItem('feedback', JSON.stringify(resetState));
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round(((feedback.good + feedback.neutral) / totalFeedback) * 100)

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  return (
    <>
    <Description />
    <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} resetFeedback={resetFeedback}/>
    {totalFeedback > 0 ? (
        <Feedback feedback={feedback} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback}/>
      ) : (
      <Notification />
      )}
    </>
  )
}

export default App
