import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import './App.css';

class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: [],
            searchfield: ''
        };
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots:users}));
    }

    onSearchChange = (e)=>{
        this.setState({searchfield: e.target.value})
    }

    render(){
        const filteredRobots = this.state.robots.filter(robot=>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });

        return(
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList list={filteredRobots}/>
            </div>
        );
    }
}

// function Appp() {
//     const [userList, setUserList] = useState(robots);
//     const [searchfield, setSearchfield] = useState('');

//     function handleSearchChange(e) {
//         setSearchfield(e.target.value);
//     }

//     const filteredUsers = userList.filter(user=>{
//         return user.name.toLowerCase().includes(searchfield.toLowerCase());
//     });

//     return (
//         <div className="tc">
//                 <h1 className="f1">RoboFriends</h1>
//                 <SearchBox searchChange={handleSearchChange} />
//                 <CardList list={filteredUsers}/>
//         </div>
//     );
// }

export default App;
