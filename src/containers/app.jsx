import React, { Component } from "react";
import CardList from "../components/cardList";
import SearchBox from "../components/searchBox";
import './app.css';
export default class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: [],
            searchField: ""
        };
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users", {method: "GET"})
        .then(response => response.json())
        .then((users) => this.setState({robots: users}))
        .catch(error => console.log(error))
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value})
    }

    render(){

        const {robots, searchField} = this.state;

        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })

        return !robots.length ?
            <h1 className="tc">Loading...</h1>
            :        
            (
                <div className="tc">
                    <h1 className="f1">RoboFriends</h1>
                    < SearchBox searchChange={this.onSearchChange} />
                    < CardList robots={filteredRobots} />
                </div>
            );

    };
}