import React, { Component } from 'react';
import request from 'superagent';

class App extends Component{
  constructor(){
    super();
    this.state = {
      users: []
    }
  }

  componentWillMount() {
      request
        .get('https://jsonplaceholder.typicode.com/photos')
        .end((err, res) => {
         console.log(res.body);
          this.setState({
            users: res.body
          });
        });
  }

  render() {
    var users = this.state.users.map((user, i) => {
      return (<div>
          <li key={i}>{user.title}</li>
          <li>{user.url}</li>
          <img src={user.url}/>
        </div>);
    });
    return(
      <div>
        <h1>Consumiendo Api Rest</h1>
        <ul>
          {users}
        </ul>
      </div>

    )
  }
}

export default App;
