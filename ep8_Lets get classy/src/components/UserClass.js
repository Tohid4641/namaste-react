import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 1,
            count2: 2
        }
    }

    render() {

        const { name, location, contact } = this.props;
        const { count } = this.state;

        return (
            <div className="user-card">
                <h1>Count: {count}</h1>
                <button onClick={() => {
                    this.setState({
                        count: count + 1
                    })
                }}>Increament Count</button>
                <h1>Name: {name}</h1>
                <h2>Location: {location}</h2>
                <h3>Contact: {contact}</h3>
            </div>
        )
    }
}

export default UserClass;