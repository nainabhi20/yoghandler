import './App.css';
import yoga from './yoga.jpg';
import Card from './Card.js';
import Userdetail from './Userdetail';
import Advantages from './Advantages';
import Footer from './Footer.js';
import axios from 'axios';
import { getElementError } from '@testing-library/dom';
import React , {useState} from 'react';

function hide(){
  const element = document.querySelector('#findme');
  const style = getComputedStyle(element);
let I1=setInterval(() => {
     let val=parseFloat(style.opacity);
      if(val==0){
          clearInterval(I1);
          document.getElementById("findme").style.display="none";
          document.getElementById("msg_heading").innerHTML="";

      }else{
          val=val-0.01;
          document.getElementById("findme").style.opacity=val.toString();
      }
  }, 5);
}

function show(){
  document.getElementById("findme").style.display="block";
  const element = document.querySelector('#findme');
  const style = getComputedStyle(element);
let I1=setInterval(() => {
    
     let val=parseFloat(style.opacity);
      if(val==0.8){
          clearInterval(I1);
      }else{
          val=val+0.01;
          document.getElementById("findme").style.opacity=val.toString();
      }
  }, 5);
}

function App() {
  const [click,setClick] = useState({mobile:''});
  return (
    <div className="App">
        <div><img src={yoga} style={{height:'7rem',width:'7rem'}}></img></div>
        <div>
          <div className="main_div"></div>
            <img width="100%" height="700px" src="https://app.mindhouse.com//static/uploads/hero-image_reduced-height.jpg"></img>
            <h1 className="heading">Interactive Online Yoga classes for fitness</h1>
            <h1 className="pack">Package starting from INR 500</h1>
            <button className="show_pack" onClick={()=>{
                let iterval=setInterval(()=>{
                    window.scrollTo(0,window.scrollY+5);
                    if(window.scrollY>1230)
                    clearInterval(iterval);
                },2);
            }}><h5>Show package detail</h5></button>
            <button className="find_me" onClick={()=>{show()}}>Find me</button>
            <Userdetail/>
        </div>
        <div>
        <div className="cards">
            <Card heading="Personalized onboarding" content="To help our trainer curate sessions better for you"/>
            <Card heading="Multiple time slots" content="Available from 6:30AM to 8:30 PM"/>
            <Card heading="Manage classes on the app" content="Class links,cancellations - all at your fingertips"/>
            <Card heading="small batches" content="For a more Personalized setting"/>
            </div>
        </div>
        <div>
          <h1 style={{position:'relative',top:'-11rem',color:'darkcyan'}}>Benifits of yoga</h1>
            <div class="advan_app">
              <Advantages heading="Energizes the body" content="Especially useful for modern sedentary lifestyles, “power” poses can help shake off feelings of physical and mental lethargy."/>
              <Advantages heading="Improve flexibility & balance" content="Studies have shown that yoga can have a positive impact on key muscles areas, and measurably improve athletic performance."/>
              <Advantages heading="Enhances Blood Circulation" content="Certain postures help to thin the blood naturally, thus preventing the formation of clots, and improving overall circulation."/>
              <Advantages heading="Boosts mental well being" content="Along with the physical benefits, yoga can also help combat the effects of insomnia, stress, and anxiety through regular practice."/>
            </div>
        </div>
      
      <div id="findme">
        <form style={{marginTop:'2rem'}}>
         <input id="phonenumber" value={click.mobile}  onChange={(e)=>{setClick({...click,mobile:e.target.value})}} class="input" placeholder="Enter registred phone no"/>
         <button  onClick={(e)=>{
            e.preventDefault();
            let s=click.mobile;
            if(s.length!=10){
            alert("Invalid phone number format");
            return;
            }
            for(let i=0;i<s.length;i++){
              if(s[i]<'0'||s[i]>'9'){
                alert("Invalid phone number format");
                 return;
              }
            }
            
            axios.post("/get_user_data",click)
            .then(resp=>{
              document.getElementById("msg_heading").innerHTML=resp.data;
                        }).catch(err=>{
                    
                                    alert(err);
            });
         }} >GO</button>
         </form>
         <h1 id="msg_heading"></h1>
         <h2 id="cross" style={{color:'white',position:'absolute',top:'0px',right:'15px',cursor:'pointer'}} onClick={()=>{
           setClick({...click,mobile:''});
           hide();}}>X</h2>
      </div>

    </div>
  );
}

export default App;
