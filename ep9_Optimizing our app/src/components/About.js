import React from "react"
import User from "./User"
import UserClass from "./UserClass"

class About extends React.Component{

    constructor(props){
        super(props)
        // console.log("P: constructor()");
    }

    componentDidMount(){
        // console.log("P: componentDidMount()");
    }

    componentWillUnmount(){
        // console.log("P: componentWillUnmount()");
    }

    render(){

        console.log("P: render()")

        return (
        <div className="about">
            <UserClass nameProp="1st" location="Naned" contact="+917414969691"/>
        </div>
    )
    }
}

export default About