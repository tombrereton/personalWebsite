import React, { Component } from 'react';
import MessageList from './components/MessageList';
import MessageBox from './components/MessageBox';
import Header from './components/Header';
import { base } from './base';

class App extends Component {

  constructor(props) {
    super(props);
    this.updateMessages = this.updateMessages.bind(this);
    this.state = {
      messages: []
    };
  }

  updateMessages(message) {
    this.setState({
      messages: this.state.messages.concat([{ message: message }])
    })
  }

  componentWillMount() {
    this.messagesRef = base.syncState('messages', {
      context: this,
      state: 'messages',
      asArray: true
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.messagesRef);
  }


  render() {
    return (
      <div className="container">
        <Header title="Simple Firebase App" />
        <div className="columns">
          <div className="column is-3"></div>
          <div className="column is-6">
            <MessageList messages={this.state.messages} />
          </div>
        </div>
        <div className="columns">
          <div className="column is-3"></div>
          <div className="column is-6">
            <MessageBox callBackToMessages={this.updateMessages} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
