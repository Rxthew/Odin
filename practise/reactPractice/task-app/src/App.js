import React from 'react';
import './App.css';
import Tasks from './Overview'

class App extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        values : [],
        value : ''
      }
      this.addValue = this.addValue.bind(this)
      this.writeValue = this.writeValue.bind(this)
    }

    addValue(event){
      event.preventDefault()
      this.setState( () => {
        return {values : [...this.state.values, this.state.value]}
      })
    }

     writeValue(event){
      this.setState(() => {
        return {value: event.target.value}
      })
    }
  

  render(){
    return <div className="App">
      <h1>Tasks:</h1>
      <form onSubmit={this.addValue}>
        <input type='text' value={this.state.value} onChange={this.writeValue}/>
        <button type='submit'>Submit Task</button>
      </form>
      <Tasks items={[...this.state.values]} />
    </div>
  }
}


export default App;
