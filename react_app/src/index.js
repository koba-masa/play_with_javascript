import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      counter: 0
    };
  }

  // 出力が DOM にレンダーされた後に実行される
  componentDidMount() {
    // 1000ミリ秒ごとにtick関数を呼び出す
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }

  // 呼び出されるたびにstateのdateを更新する
  tick() {
    this.setState({
      date: new Date()
    });
    console.log("before", this.state.counter);
    const local_counter = this.state.counter + 1;
    this.setState((state, props) => ({
      counter: local_counter
    }));
    console.log("after", this.state.counter);
    console.log("after2", local_counter);
  }
}

root.render(<Clock />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
