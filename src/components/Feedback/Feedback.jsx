import { Component } from 'react';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Section from 'components/Section/Section';
import Notification from 'components/Notification/Notification';

class Feedback extends Component {
  constructor(props) {
    super(props);

    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  countPositiveFeedbackPercentage = () => {
    let percent = 0;

    percent = ((this.state.good / this.countTotalFeedback()) * 100).toFixed();

    return percent;
  };

  countTotalFeedback = () => {
    let total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  onLeaveFeedback = feedback => {
    this.setState(prevSate => ({
      [feedback]: prevSate[feedback] + 1,
    }));
  };

  render() {
    return (
      <>
        <Section
          title="Please leave feedback"
          children={
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.onLeaveFeedback}
            ></FeedbackOptions>
          }
        ></Section>

        <Section
          title={'Statistics'}
          children={
            this.countTotalFeedback() === 0 ? (
              <Notification message={'There is no feedback'} />
            ) : (
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              ></Statistics>
            )
          }
        ></Section>
      </>
    );
  }
}

export default Feedback;