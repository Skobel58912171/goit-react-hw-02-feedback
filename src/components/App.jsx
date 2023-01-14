import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from 'Section/Section';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countFeedbacks = feedback => {
    this.setState(prevState => ({
      [feedback]: prevState[feedback] + 1,
    }));
  };
  countTotalFeedback = (a, b, c) => {
    return a + b + c;
  };
  countPositiveFeedbackPercentage = (a, b, c) => {
    const total = a + b + c;
    if (total === 0) {
      return 0;
    }

    return `${Math.round((a * 100) / total)}%`;
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          gap: 40,
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          backgroundColor: '#dee4e7',
          color: '#010101',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.countFeedbacks}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {good === 0 && neutral === 0 && bad === 0 ? (
            <Notification message="There is no feedback"></Notification>
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback(good, neutral, bad)}
              positivePercentage={this.countPositiveFeedbackPercentage(
                good,
                neutral,
                bad
              )}
            ></Statistics>
          )}
        </Section>
      </div>
    );
  }
}
