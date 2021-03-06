import logo from './images/logo.svg';
import person from './images/icon-person.svg';
import dollar from './images/icon-dollar.svg';

import InputBill from './components/InputBill';
import TipButton from './components/TipButton';
import InputPeople from './components/InputPeople';
import OutputTip from './components/OutputTip';
import OutputTotal from './components/OutputTotal';
import ResetButton from './components/ResetButton';

import './css/App.css';
import './css/InputCard.css';
import './css/OutputCard.css';
import './css/TipGrid.css';

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
    let temp = [...this.state.arr];
    for (let i = 0; i < temp.length; i++) {
      temp[i].active = false;
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
    let temp = [...this.state.arr];
    for (let i = 0; i < temp.length; i++) {
      temp[i].active = false;
    }
    this.setState({
      arr: temp,
      disabled: false
    })
  }

  reset() {
    let temp = [...this.state.arr];
    for (let i = 0; i < temp.length; i++) {
      temp[i].active = false;
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
          <div className='container'>
            <div className='inputCard'>
              <img src={person} id='person-icon' alt='' />
              <InputBill onChange={this.billChange} style={billWarningStyle} />
              <div>
                <p className='label'>Select Tip %</p>
                <div className='tipGrid'>
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
                  <input type='number' className='customTip' min='0' placeholder='Custom' onChange={this.tipChange} />
                </div>
              </div>
              <img src={dollar} id='dollar-icon' alt='' />
              <InputPeople onChange={this.peopleChange} style={peopleWarningStyle} />
            </div>
            <div className='outputCard'>
              <OutputTip value={`$${(Math.round(totalTipPerPerson * 100) / 100).toFixed(2)}`} />
              <OutputTotal value={`$${(Math.round(totalPerPerson * 100) / 100).toFixed(2)}`} />
              <ResetButton onClick={this.reset} disabled={this.state.disabled} />
            </div>
          </div>
        </main>
        <footer className="attribution">
          <p>
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" rel='noreferrer' target="_blank">Frontend Mentor</a>.
            Coded by <a href="https://github.com/Hazipan" rel='noreferrer' target="_blank">Aaron Rutherford</a>.
          </p>
          <a href='https://github.com/Hazipan/tip-calc'>See the code!</a>
        </footer>
      </div>
    )
  }
}


export default App;
