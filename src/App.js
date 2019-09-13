/* global EventsServer */
import React from 'react';                    //Socket.io
//import request from 'superagent'

class App extends React.Component {

  state = { text: ''}

  source = new EventSource('http://localhost:4000/stream')        //eventsource is buildin 

  componentDidMount(){
   this.source.onmessage = (event) => {
     const { data } = event
     console.log('data test:', data)

     const messages = JSON.parse(data)                            // puts the string back in js
     console.log('messages test:', messages)
   }
  }

  onChange = (event) => {
    const { target: { value }} = event
    console.log('value test:', value)

    this.setState({ text: value})
  }

  render(){
    return <form onSubmit>
    <input
        type='text'
        onChange={this.onChange}
        value={this.state.text}
    />
    <button
    onClick={onClick}
    type="button"
    >Click</button>
    </form>
  }
}

export default App;
