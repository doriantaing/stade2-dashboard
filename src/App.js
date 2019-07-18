import React from 'react';
import Dashboard from './views/Dashboard';
import socketIOClient from "socket.io-client";
import './assets/style/style.scss';

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            socket: null,
        }
    }

    componentDidMount() {
        this.setState({
            socket: socketIOClient("http://18.184.166.182:8082")
        })
    }

    render()
    {
        return (
            <div className="App">
                {this.state.socket ? <Dashboard socket={this.state.socket}/> : <p>Is Loading</p>}
            </div>
        );
    }
}

export default App;
