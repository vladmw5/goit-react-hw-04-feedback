import React, { Component, Fragment } from 'react';
import Section from './Section';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleBtnClick = event => {
    this.setState(prevState => {
      return {
        [event.target.dataset.name]:
          prevState[event.target.dataset.name] + 1,
      };
    });
  };

  total = () => this.state.good + this.state.neutral + this.state.bad;
  positive = () =>
    Math.floor((this.state.good / (this.total() || 1)) * 100);

  render() {
    const total = this.total();
    return (
      <Fragment>
        <Section title="Please leave feedback">
          <FeedbackOptions feedbackLeaveHandler={this.handleBtnClick} />
        </Section>
        {/* Якщо total === 0, то заміть нього буде null, який react не рендерить */}
        {(total || null) && (
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positive={this.positive()}
            />
          </Section>
        )}
      </Fragment>
    );
  }
}

export default App;
