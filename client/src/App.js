import './App.css';
import yoga from './yoga.jpg';
import Card from './Card.js';
import Userdetail from './Userdetail';
import Advantages from './Advantages';
import Footer from './Footer.js';
function App() {
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
    </div>
  );
}

export default App;
