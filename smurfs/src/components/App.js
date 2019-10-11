import React, { Component } from "react";
import "./App.css";
import AddUserForm from '../Rest/AddUserForm';
import UserList from '../Rest/AddUserForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>ReDuX'd SmUrFs</h1>
        <AddUserForm />
        <UserList />
      </div>
    );
  }
}

export default App;
