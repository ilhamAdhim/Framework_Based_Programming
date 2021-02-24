import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import HelloComponent from './components/HelloComponent'
import Test from './Test'
import reportWebVitals from './reportWebVitals';

// function HelloComponent() {
//   return HelloComponent
// }

// const HelloComponent = () => HelloComponent

class StateFullComponent extends React.Component {
  render() {
    return <p> StateFullComponents </p>
  }
}

ReactDOM.render(<HelloComponent />, document.getElementById('root'))
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
