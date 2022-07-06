import React, { useState, Fragment } from 'react';
import Section from './Section';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = () => good + neutral + bad;
  const positive = () => Math.floor((good / (total() || 1)) * 100);

  const handleBtnClick = event => {
    switch (event.target.dataset.name) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;

      case 'neutral':
        setNeutral(prevNeut => prevNeut + 1);
        break;

      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;

      default:
        throw new Error('Unknown option');
    }
  };

  const currentTotal = total();

  return (
    <Fragment>
      <Section title="Please leave feedback">
        <FeedbackOptions feedbackLeaveHandler={handleBtnClick} />
      </Section>
      {/* Якщо total === 0, то заміть нього буде null, який react не рендерить */}
      {(currentTotal || null) && (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={currentTotal}
            positive={positive()}
          />
        </Section>
      )}
    </Fragment>
  );
};

export default App;
