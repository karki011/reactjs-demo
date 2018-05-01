import React, { Component } from 'react';
import Projects from './Components/Projects';
import './App.css';
class App extends Component {
  constructor (){
    super();
    this.state = {
      projects: [
        {
          title: "Business Development",
          Description: "Web Design"
        },
        {
          title: "Social Media",
          Description: "Marketing"
        },
        {
          title: "Shoping Cart",
          Description: "Plan and subcription"
        }
      ]
    }
  }

  componentWillMount(){
    
  }
  render() {
    return (
      <div className="App">

        <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
