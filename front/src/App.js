import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';

class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {noteText: ''};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (e) {
    this.setState({noteText: e.target.value});
  }

  handleSubmit (e) {

    axios.post('http://localhost:3001/notes/add', {
      note: this.state.noteText
    })

    // 1
    e.preventDefault();
  }

  render() {
  return (
    <div className="App">
      <form onClick={this.handleSubmit}>
        <label>Заметка: <input type="text" value={this.state.noteText} onChange={this.handleChange}></input></label>
        <input type="submit" value="Отправить"></input>
      </form>
    </div>
  );
}

}


export default App;
