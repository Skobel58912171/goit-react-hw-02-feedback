import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from 'Section/Section';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export class App extends Component {
  state = {
    Good: 0,
    Neutral: 0,
    Bad: 0,
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
    const { Good, Neutral, Bad } = this.state;

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
          {Good === 0 && Neutral === 0 && Bad === 0 ? (
            <Notification message="There is no feedback"></Notification>
          ) : (
            <Statistics
              good={Good}
              neutral={Neutral}
              bad={Bad}
              total={this.countTotalFeedback(Good, Neutral, Bad)}
              positivePercentage={this.countPositiveFeedbackPercentage(
                Good,
                Neutral,
                Bad
              )}
            ></Statistics>
          )}
        </Section>
      </div>
    );
  }
}
