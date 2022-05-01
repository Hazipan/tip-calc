import logo from './images/logo.svg';
import person from './images/icon-person.svg';
import dollar from './images/icon-dollar.svg';
import Container from './components/Container';
import InputCard from './components/InputCard';
import InputBill from './components/InputBill';
import TipGrid from './components/TipGrid';
import TipButton from './components/TipButton';
import CustomTip from './components/CustomTip';
import InputPeople from './components/InputPeople';
import OutputCard from './components/OutputCard';
import OutputTip from './components/OutputTip';
import OutputTotal from './components/OutputTotal';
import ResetButton from './components/ResetButton';
import './App.css';
import React from 'react';

const tipValues = [
  ['5%', '10%', '15%'],
  ['25%', '50%']
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bill: 0,
      tip: 0,
      people: 0,
      tipTotal: 0,
      total: 0,
    }
  }

  render() {
    let val = 0;
    return (
      <div class="app">
        <img id="logo" src={logo} alt="Splitter Logo" />
        <Container>
          <InputCard>
            <img src={person} id='person-icon' />
            <InputBill />
            <TipGrid>
              {
                tipValues.flat().map((btn, i) => {
                  return (
                    <TipButton
                      key={i}
                      label={btn}
                      value={
                        btn === '5%'
                          ? .05
                          : btn === '10%'
                            ? .10
                            : btn === '15%'
                              ? .15
                              : btn === '25%'
                                ? .25
                                : .50
                      }
                    />
                  );
                })
              }
              <CustomTip />
            </TipGrid>
            <img src={dollar} id='dollar-icon' />
            <InputPeople />
          </InputCard>
          <OutputCard>
            <OutputTip />
            <OutputTotal />
            <ResetButton />
          </OutputCard>
        </Container>
        <div className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
          Coded by <a href="#" target="_blank">Aaron Rutherford</a>.
        </div>
      </div>
    )
  }
}


export default App;
