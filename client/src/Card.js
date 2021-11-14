import React from "react";
import react from "react";
import './card.css';
export default class Card extends React.Component{
    constructor(props){
        super(props);
    }
    render(){

        let a;
        if(this.props.heading=="Personalized onboarding")
        a="https://app.mindhouse.com//static/uploads/personalized_onboarding_w8ex1Df.png";
        if(this.props.heading=="Multiple time slots")
        a="https://app.mindhouse.com//static/uploads/goal_tile_patience_bKJab0x.jpg";
        if(this.props.heading=="Manage classes on the app")
        a="https://app.mindhouse.com//static/uploads/manage_classes_on_the_app_AYtfS8v.png";
        if(this.props.heading=="small batches")
        a="https://app.mindhouse.com//static/uploads/small_batches_61svd4E.png";

        return(
            <div>
                <div className="card">
                    <h2 className="head">{this.props.heading}</h2>
                    <img className="logo" src={a} width="120rem"></img>
                    <p className="para">{this.props.content}</p>
                </div>
            </div>
        );
    }

}