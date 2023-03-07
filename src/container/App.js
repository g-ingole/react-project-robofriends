import CardList from '../component/CardList';
import SearchBox from '../component/SearchBox';
import './app.css';
import Scroll from '../component/Scroll';
import React, { Component } from 'react'

export default class App extends Component {
    constructor(){
        super()
        this.state={
            robots:[],
            searchfield:''
        }
    }
    componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users=>this.setState({robots:users}))
    }
    onSearchChange=(event)=>{
        this.setState({searchfield:event.target.value})
    }
  render() {
    const {robots, searchfield}=this.state;
    const filterRobots=robots.filter(robot=>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !robots.length ? <h1>Loading...</h1> :
    (
         <div className='tc'>
        <h1 className='f1 dark-green'>RoboFriends</h1>
        <SearchBox searchChange= {this.onSearchChange}/>
        <Scroll>
        <CardList robots={filterRobots} />
        </Scroll>
      </div>
    );
  }
  }

