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

const visible = { visibility: 'visible' };
const hidden = { visibility: 'hidden' };

let billWarningStyle = hidden;
let peopleWarningStyle = hidden;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bill: 0,
      tip: 0,
      people: 1,
      arr: [...buttonArr],
      disabled: true
    };
    this.tipClick = this.tipClick.bind(this);
    this.billChange = this.billChange.bind(this);
    this.peopleChange = this.peopleChange.bind(this);
    this.tipChange = this.tipChange.bind(this);
    this.reset = this.reset.bind(this);
  }

  tipClick(index) {
    let temp = this.state.arr;
    for (let i = 0; i < temp.length; i++) {
      this.state.arr[i].active = false;
    }
    temp[index].active = true;
    this.setState({
      arr: temp,
      tip: temp[index].value,
      disabled: false
    })
  }

  billChange(event) {
    if (event.target.value >= 1) {
      this.setState({
        bill: event.target.value,
        disabled: false,
      })
      billWarningStyle = hidden;
    } else {
      this.setState({
        bill: 0,
        disabled: false,
      })
      billWarningStyle = visible;
    }
  }

  peopleChange(event) {
    if (event.target.value >= 1) {
      this.setState({
        people: event.target.value,
        disabled: false,
      });
      peopleWarningStyle = hidden;
    } else {
      this.setState({
        people: 1,
        disabled: false,
      });
      peopleWarningStyle = visible;
    }
  }

  tipChange(event) {
    if (event.target.value >= 0) {
      this.setState({
        tip: event.target.value / 100,
      });
    } else {
      this.setState({
        tip: 0,
      });
    }
    let temp = this.state.arr;
    for (let i = 0; i < temp.length; i++) {
      this.state.arr[i].active = false;
    }
    this.setState({
      arr: temp,
      disabled: false
    })
  }

  reset() {
    let temp = this.state.arr;
    for (let i = 0; i < temp.length; i++) {
      this.state.arr[i].active = false;
    }
    this.setState({
      bill: 0,
      tip: 0,
      people: 1,
      arr: temp,
      disabled: true,
    });
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );
  }

  render() {
    const totalTip = parseFloat(this.state.tip) * parseFloat(this.state.bill);
    const totalPerPerson = ((totalTip + parseFloat(this.state.bill)) / parseFloat(this.state.people));
    const totalTipPerPerson = totalTip / parseFloat(this.state.people);

    return (
      <div className='app'>
        <main className='main'>
          <img id="logo" src={logo} alt="Splitter Logo" />
          <Container>
            <InputCard>
              <img src={person} id='person-icon' alt='' />
              <InputBill onChange={this.billChange} style={billWarningStyle} />
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
                <CustomTip onChange={this.tipChange} />
              </TipGrid>
              <img src={dollar} id='dollar-icon' alt='' />
              <InputPeople onChange={this.peopleChange} style={peopleWarningStyle} />
            </InputCard>
            <OutputCard>
              <OutputTip value={`$${(Math.round(totalTipPerPerson * 100) / 100).toFixed(2)}`} />
              <OutputTotal value={`$${(Math.round(totalPerPerson * 100) / 100).toFixed(2)}`} />
              <ResetButton onClick={this.reset} disabled={this.state.disabled} />
            </OutputCard>
          </Container>
        </main>
        <footer className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
          Coded by <a href="https://github.com/Hazipan" target="_blank">Aaron Rutherford</a>.
        </footer>
      </div>
    )
  }
}


export default App;
