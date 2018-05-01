import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import './App.css';

class App extends Component {
  constructor (){
    super();
    this.state = {
      projects: []
    }
  }

  componentWillMount(){
    this.setState({projects: [
      {
        title: "Business Development",
        Categories: "Web Design"
      },
      {
        title: "Social Media",
        Categories: "Marketing"
      },
      {
        title: "Shoping Cart",
        Categories: "Plan and subcription"
      }
    ]})
  }
  render() {
    return (
      <div className="App">
        <AddProject />
        <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
