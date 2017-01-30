import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './quiz/QuestionList.jsx';
import Scorebox from './quiz/Scorebox.jsx';
import Results from './quiz/Results.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          id: 1,
          text: 'How many continents exist on our planet?',
          choices: [
            {
              id: 'a',
              text: '4'
            },
            {
              id: 'b',
              text: '6'
            },
            {
              id: 'c',
              text: '7'
            }
          ],
          correct: 'c'
        },
        {
          id: 2,
          text: 'What is the smallest country in the world?',
          choices: [
            {
              id: 'a',
              text: 'Tuvalu'
            },
            {
              id: 'b',
              text: 'Vatican City'
            },
            {
              id: 'c',
              text: 'Monaco'
            }
          ],
          correct: 'b'
        },
        {
          id: 3,
          text: 'The highest mountain in the world, Mt. Everest, is located on the border of which two countries?',
          choices: [
            {
              id: 'a',
              text: 'Tibet and Nepal'
            },
            {
              id: 'b',
              text: 'Bhutan and Nepal'
            },
            {
              id: 'c',
              text: 'India and Nepal'
            }
          ],
          correct: 'a'
        },
        {
          id: 4,
          text: 'How many oceans exist on our planet?',
          choices: [
            {
              id: 'a',
              text: '7'
            },
            {
              id: 'b',
              text: '9'
            },
            {
              id: 'c',
              text: '5'
            }
          ],
          correct: 'c'
        }
      ],
      score: 0,
      current: 1
    }
  }

  setCurrent(current) {
    this.setState({current});
  }

  setScore(score){
    this.setState({score});
  }
  render() {
    if(this.state.current > this.state.questions.length) {
      var scorebox = '';
      var results = <Results {...this.state} />
    } else {
      var scorebox = <Scorebox {...this.state} />
      var results = '';
    }
    return (
      <div>
        {scorebox}
        <QuestionList {...this.state}
          setCurrent={this.setCurrent.bind(this)}
          setScore={this.setScore.bind(this)} />
          {results}
      </div>
    )
  }
}

export default App
