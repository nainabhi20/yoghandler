import react from "react";
import React from "react";
import './advantages.css';
export default class Advantages extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div>
                <div class="advan">
                    
                    <img src="https://app.mindhouse.com//static/uploads/group_1617_fNYv8hm.png" style={{float:'left',position:'absolute',left:'2rem'}} height="50rem"></img>
                    <h2 className="headings" style={{padding:'0',margin:'0'}}>{this.props.heading}</h2>
                    <p className="content">{this.props.content}</p>
                </div>
            </div>
        );
    }

}