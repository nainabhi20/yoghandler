import React from "react";
import react from "react";
import axios from "axios";
import './Userdetail.css';
export default class Userdetail extends React.Component{
    constructor(props){
        super(props);
        this.state={name:'',age:0,mobile:'',batch:'6-7 AM'}
    }
    render(){
        return(
            <div>
                <form className="form">
                    <h3 style={{color:'#9933ff'}}>Sign up for the trial</h3>
                    <input  value={this.state.name}  placeholder="Name" class="input" type="text" onChange={(e)=>{this.setState({name:e.target.value})}}/><br/>
                    <input  value={this.state.age}  placeholder="age" class="input" type="number" onChange={(e)=>{this.setState({age:e.target.value})}}/><br/>
                    <input  value={this.state.mobile}  placeholder="phone number" class="input" type="text" onChange={(e)=>{this.setState({mobile:e.target.value})}}/><br/>
                    <select  value={this.state.batch}  placeholder="Select the batch" class="input" type="text" onChange={(e)=>{this.setState({batch:e.target.value})}}>
                        <option>6-7 AM</option>
                        <option>7-8 AM</option>
                        <option>8-9 AM</option>
                        <option>5-6 PM</option>    
                    </select><br/>
                    <button className="try" onClick={(e)=>{
                        //Here we can add what happen if we click the button of main form
                        e.preventDefault();
                        if(this.state.name.length<4){
                            alert("Name is too short");
                            return;
                        }
                        if(this.state.mobile.length<10){
                            alert("Phone number is not valid");
                            return;
                        }
                        let s=this.state.mobile;
                        for(let i=0;i<this.state.mobile.length;i++){
                            if(s[i]<'0'||s[i]>'9'){
                                alert("phone number is not valid");
                                return;
                            }
                        }
                        let age=this.state.age;
                        if(age<18||age>65){
                            alert("Your age is not suitable for our yoga classes");
                            return;
                        }
                        console.log(this.state);
                        axios.post("/signup",this.state)
                            .then(resp=>{alert(resp.data);
                                        }).catch(err=>{
                                                    alert(err);
                            });

                        //code of onclick ends here
                    }}><h3>Try for INR 500</h3></button>
                </form>
            </div>
        );
    }
}
