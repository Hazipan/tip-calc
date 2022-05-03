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

const buttonArr = [
  { label: '5%', active: false, value: 0.05 },
  { label: '10%', active: false, value: 0.10 },
  { label: '15%', active: false, value: 0.15 },
  { label: '25%', active: false, value: 0.25 },
  { label: '50%', active: false, value: 0.50 }
]

// styles for default and selected tip buttons
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bill: 1,
      tip: 1,
      people: 1,
      arr: [...buttonArr]
    };
    this.tipClick = this.tipClick.bind(this);
    this.billChange = this.billChange.bind(this);
    this.peopleChange = this.peopleChange.bind(this);
  }

  tipClick(index) {
    let temp = this.state.arr;
    for(let i = 0; i < temp.length; i++){
      this.state.arr[i].active = false;
    }
    temp[index].active = true;
    this.setState({
      arr: temp,
      tip: temp[index].value
    })
  }

  billChange(event) {
    this.setState({
      bill: event.target.value
    })
  }

  peopleChange(event) {
    this.setState({
      people: event.target.value
    })
  }

  render() {
    const tipPerPerson = (parseFloat(this.state.total) * parseFloat(this.state.tip) / parseFloat(this.state.people));
    return (
      <div className="app">
        <img id="logo" src={logo} alt="Splitter Logo" />
        <Container>
          <InputCard>
            <img src={person} id='person-icon' alt='' />
            <InputBill onChange={this.billChange}/>
            <TipGrid>
              {
                this.state.arr.map((elem, index) => {
                  return (
                    <TipButton
                      key={index}
                      label={elem.label}
                      value={elem.value}
                      onClick={() => this.tipClick(index)}
                      isActive={elem.active}
                    />
                  );
                })
              }
              <CustomTip />
            </TipGrid>
            <img src={dollar} id='dollar-icon' alt='' />
            <InputPeople onChange={this.peopleChange}/>
          </InputCard>
          <OutputCard>
            <OutputTip value={tipPerPerson} />
            <OutputTotal value={((this.state.total * this.state.tip) + this.state.total) / this.state.people}/>
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
