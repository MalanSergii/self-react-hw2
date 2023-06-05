import { Component } from 'react';

import Feedback from './Feedback';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  normalize = item => {
    return item[0].toUpperCase() + item.slice(1);
  };

  onButtonClick = e => {
    this.setState(prev => ({
      [e.target.value]: prev[e.target.value] + 1,
    }));
  };

  countTotalFeedback = data =>
    Object.values(data).reduce((acc, item) => acc + item, 0);

  countPositiveFeedbackPercentage = () => {
    return Math.round(
      (this.state.good * 100) / this.countTotalFeedback(this.state)
    );
  };

  render() {
    const dataArray = Object.entries(this.state);
    const totalFeedbackPoints = this.countTotalFeedback(this.state);
    const positive = this.countPositiveFeedbackPercentage();
    return (
      <>
        <Section title="Please leave feedback">
          <Feedback
            dataArray={dataArray}
            normalize={this.normalize}
            onButtonClick={this.onButtonClick}
          ></Feedback>
        </Section>

        <Section title="Statistics">
          {totalFeedbackPoints > 0 ? (
            <Statistics
              dataArray={dataArray}
              normalize={this.normalize}
              total={totalFeedbackPoints}
              positive={positive}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
