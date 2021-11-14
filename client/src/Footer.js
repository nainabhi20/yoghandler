import React from "react";
import './footer.css';
export default class Footer extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="footer">
                <h3>About Developer</h3>
                <p>Name: Abhishek</p>
                <p>Degree: Btech in information technology(2023)</p>
                <p>Collgae: National Institute of Technology, Kurukshetra</p>
                <p>Contact No:- <i>9991361402</i></p>
                <p><email>email:- abhisheknain1200@gmail.com</email></p>
            </div>
        );
    }
}