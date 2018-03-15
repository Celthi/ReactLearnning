import React from 'react'
import {Component} from 'react'
class Ip extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            ip_address: "0.0.0.0",
        }
    }
    componentDidMount() {
        fetch("https://ipinfo.io/json").then((response) => {return response.json();}).then((resJson) => {
            this.setState({ 
                ip_address: resJson.ip, 
            });
        });
    }
    render() {
        return (<div>{this.state.ip_address}</div>);
    }
}
export default Ip;