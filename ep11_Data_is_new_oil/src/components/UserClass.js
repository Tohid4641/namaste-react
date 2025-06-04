import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 1,
            count2: 2,
            data: {
                name: "guest"
            }
        }

        // console.log(this.props.nameProp, ": constructor()");
    }

    componentDidMount() {
        // console.log(this.props.nameProp,": componentDidMount()")

    }

    componentWillUnmount() {
        // console.log(this.props.nameProp, ": componentWillUnmount()");
    }

    render() {
        console.log(this.props.nameProp, ": render()")
        const { nameProp, location, contact } = this.props;
        const { count } = this.state;
        const { name } = this?.state?.data;

        return (
            <div className="user-card">
                <h1>Count: {count}</h1>
                <button onClick={() => {
                    this.setState({
                        count: count + 1
                    })
                }}>Increament Count</button>
                <h1>Name Prop: {nameProp}</h1>
                <h1>Name API: {name}</h1>
                <h2>Location: {location}</h2>
                <h3>Contact: {contact}</h3>
                <UserContext.Consumer>
                    {({ loggedInUser }) => ( <h3 className="font-bold text-xl">{loggedInUser}</h3> )}
                </UserContext.Consumer>
            </div>
        )
    }
}

export default UserClass;