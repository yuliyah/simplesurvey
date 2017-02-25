import React, { Component } from 'react';
import './App.css';
var uuid = require('uuid');
var firebase = require('firebase');

  var config = {
    apiKey: "AIzaSyCUN0YuEqC-cKbtB__vFMZpRWQlg0Ct-bI",
    authDomain: "oscarspred.firebaseapp.com",
    databaseURL: "https://oscarspred.firebaseio.com",
    storageBucket: "oscarspred.appspot.com",
    messagingSenderId: "1082571679156"
  };
  firebase.initializeApp(config);


class App extends Component {
  constructor(props){
      super(props);
      this.state = {
        id: uuid.v1(),
        name:'',
        answers: {
          q1:'',
          q2:'',
          q3:'',
          q4:'',
          q5:'',
          q6:'',
          q7:'',
          q8:'',
          q9:'',
          q10:''
        },
        submitted: false
      }

      this.handleQuestionChange = this.handleQuestionChange.bind(this);
  }

  handleNameSubmit(event){
    var name = this.refs.name.value;
    this.setState({name:name}, function(){
      console.log(this.state);
    });
    event.preventDefault();
  }

  handleQuestionSubmit(event){
    
    firebase.database().ref("surveys/"+this.state.id).set({
      name: this.state.name,
      answers: this.state.answers
    });
    this.setState({submitted:true}, function(){
      console.log("Questions Submitted...");
    
    })
    event.preventDefault();

  }

  handleQuestionChange(event){
    var answers = this.state.answers;
    if(event.target.name === 'q1'){
      answers.q1 = event.target.value;
    } else if(event.target.name === 'q2'){
      answers.q2 = event.target.value;
    } else if(event.target.name === 'q3'){
      answers.q3 = event.target.value;
    } else if(event.target.name === 'q4'){
      answers.q4 = event.target.value;
    } else if(event.target.name === 'q5'){
      answers.q5 = event.target.value;
    } else if(event.target.name === 'q6'){
      answers.q6 = event.target.value;
    } else if(event.target.name === 'q7'){
      answers.q7 = event.target.value;
    } else if(event.target.name === 'q8'){
      answers.q8 = event.target.value;
    } else if(event.target.name === 'q9'){
      answers.q9 = event.target.value;
    } else if(event.target.name === 'q10'){
      answers.q10 = event.target.value;
    }

    this.setState({answers:answers},function(){
      console.log(this.state);
    });
  }

  render() {
    var user;
    var questions;
    if(this.state.name && this.state.submitted === false){
      user = <h2>Welcome {this.state.name}</h2>
      questions = <span>
        <h3>Who is going to win Oscars this year? .... Hmmm....</h3>
        <form onSubmit={this.handleQuestionSubmit.bind(this)}>
          <div>
            <label>Best Picture</label><br />
            <input type="radio" name="q1" value="Arrival" onChange={this.handleQuestionChange} />Arrival<br />
            <input type="radio" name="q1" value="Fences" onChange={this.handleQuestionChange} />Fences<br />
            <input type="radio" name="q1" value="Hacksaw Ridge" onChange={this.handleQuestionChange} />Hacksaw Ridge<br />
            <input type="radio" name="q1" value="Hell or High Water" onChange={this.handleQuestionChange} />Hell or High Water<br />
            <input type="radio" name="q1" value="Hidden Figures" onChange={this.handleQuestionChange} />Hidden Figures<br />
               <input type="radio" name="q1" value="La La Land" onChange={this.handleQuestionChange} />La La Land<br />
                 <input type="radio" name="q1" value="Lion" onChange={this.handleQuestionChange} />Lion<br />
                    <input type="radio" name="q1" value="Moonlight" onChange={this.handleQuestionChange} />Moonlight<br />
                       <input type="radio" name="q1" value="Manchester by the Sea" onChange={this.handleQuestionChange} />Manchester by the Sea<br />
                          
          </div>
          <div>
          <label>Actor in a Leading Role</label><br />
          <input type="radio" name="q2" value="Casey Affleck (Manchester by the Sea)" onChange={this.handleQuestionChange} />Casey Affleck (Manchester by the Sea)<br />
          <input type="radio" name="q2" value="Andrew Garfield (Hacksaw Ridge)" onChange={this.handleQuestionChange} />Andrew Garfield (Hacksaw Ridge)<br />
          <input type="radio" name="q2" value="Ryan Gosling (La La Land)" onChange={this.handleQuestionChange} />Ryan Gosling (La La Land)<br />
          <input type="radio" name="q2" value="Viggo Mortensen (Captain Fantastic)" onChange={this.handleQuestionChange} />Viggo Mortensen (Captain Fantastic)<br />
          <input type="radio" name="q2" value="Denzel Washington (Fences)" onChange={this.handleQuestionChange} />Denzel Washington (Fences)<br />
            
        </div>
        <div>
          <label>Actor in a Supporting Role</label><br />
          <input type="radio" name="q3" value="Jeff Bridges (Hell or High Water)" onChange={this.handleQuestionChange} />Jeff Bridges (Hell or High Water)<br />
          <input type="radio" name="q3" value="Mahershala Ali (Moonlight)" onChange={this.handleQuestionChange} />Mahershala Ali (Moonlight)<br />
          <input type="radio" name="q3" value="Dev Patel (Lion)" onChange={this.handleQuestionChange} />Dev Patel (Lion)<br />
          <input type="radio" name="q3" value="Lucas Hedges (Manchester by the Sea)" onChange={this.handleQuestionChange} />Lucas Hedges (Manchester by the Sea)<br />
          <input type="radio" name="q3" value="Michael Shannon (Nocturnal Animals)" onChange={this.handleQuestionChange} />Michael Shannon (Nocturnal Animals)<br />
        </div>
        <div>
          <label>Actress in a Leading Role</label><br />
          <input type="radio" name="q4" value="Isabelle Huppert (Elle)"

 onChange={this.handleQuestionChange} /> Isabelle Huppert (Elle)

<br />
          <input type="radio" name="q4" value="Ruth Negga (Loving)" onChange={this.handleQuestionChange} /> Ruth Negga (Loving) <br />
          <input type="radio" name="q4" value="Emma Stone (La La Land)" onChange={this.handleQuestionChange} />Emma Stone (La La Land)<br />
          <input type="radio" name="q4" value="Natalie Portman (Jackie)" onChange={this.handleQuestionChange} />Natalie Portman (Jackie)<br />
          <input type="radio" name="q4" value="Meryl Streep (Florence Foster Jenkins)" onChange={this.handleQuestionChange} />Meryl Streep (Florence Foster Jenkins)
<br />
            
        </div>
          
            <div>
          <label>Actress in a Supporting Role</label><br />
          <input type="radio" name="q5" value="Viola Davis (Fences)"

 onChange={this.handleQuestionChange} /> Viola Davis (Fences)

<br />
          <input type="radio" name="q5" value="Naomie Harris (Moonlight)" onChange={this.handleQuestionChange} /> Naomie Harris (Moonlight) <br />
          <input type="radio" name="q5" value="Nicole Kidman (Lion)" onChange={this.handleQuestionChange} />Nicole Kidman (Lion)<br />
          <input type="radio" name="q5" value="Octavia Spencer (Hidden Figures)" onChange={this.handleQuestionChange} />Octavia Spencer (Hidden Figures)<br />
          <input type="radio" name="q5" value="Michelle Williams (Manchester by the Sea)" onChange={this.handleQuestionChange} />Michelle Williams (Manchester by the Sea)
<br />
            
        </div>
          <div>
          <label>Best Director</label><br />
          <input type="radio" name="q6" value="Damien Chazelle (La La Land)"

 onChange={this.handleQuestionChange} /> Damien Chazelle (La La Land)

<br />
          <input type="radio" name="q6" value="Mel Gibson (Hacksaw Ridge)" onChange={this.handleQuestionChange} /> Mel Gibson (Hacksaw Ridge)<br />
          <input type="radio" name="q6" value="Barry Jenkins (Moonlight)" onChange={this.handleQuestionChange} />Barry Jenkins (Moonlight)<br />
          <input type="radio" name="q6" value="Kenneth Lonergan (Manchester by the Sea)" onChange={this.handleQuestionChange} />Kenneth Lonergan (Manchester by the Sea)<br />
          <input type="radio" name="q6" value="Denis Villeneuve (Arrival)" onChange={this.handleQuestionChange} />Denis Villeneuve (Arrival)
<br />
            
        </div>
          
          <div>
          <label>Animated Feature Film</label><br />
          <input type="radio" name="q7" value="Kubo and the Two Strings"

 onChange={this.handleQuestionChange} /> Kubo and the Two Strings

<br />
          <input type="radio" name="q7" value="Moana" onChange={this.handleQuestionChange} /> Moana<br />
          <input type="radio" name="q7" value="My Life As a Zucchini" onChange={this.handleQuestionChange} />My Life As a Zucchini<br />
          <input type="radio" name="q7" value="The Red Turtle" onChange={this.handleQuestionChange} />The Red Turtle<br />
          <input type="radio" name="q7" value="Zootopia" onChange={this.handleQuestionChange} />Zootopia <br />
            
        </div>
        
        <div>
          <label>Writing (Original Screenplay)</label><br />
          <input type="radio" name="q8" value="Hell or High Water"

 onChange={this.handleQuestionChange} /> Hell or High Water

<br />
          <input type="radio" name="q8" value="La La Land" onChange={this.handleQuestionChange} />  La La Land<br />
          <input type="radio" name="q8" value="The Lobster" onChange={this.handleQuestionChange} /> The Lobster<br />
          <input type="radio" name="q8" value="Manchester by the Sea" onChange={this.handleQuestionChange} /> Manchester by the Sea<br />
          <input type="radio" name="q8" value="20th Century Women" onChange={this.handleQuestionChange} /> 20th Century Women<br />
          
            
        </div>
           <div>
          <label>Writing (Adapted Screenplay)</label><br />
          <input type="radio" name="q9" value="Arrival"

 onChange={this.handleQuestionChange} /> Arrival

<br />
          <input type="radio" name="q9" value="Fences" onChange={this.handleQuestionChange} />  Fences<br />
          <input type="radio" name="q9" value="Hidden Figures" onChange={this.handleQuestionChange} /> Hidden Figures<br />
          <input type="radio" name="q9" value="Lion" onChange={this.handleQuestionChange} /> Lion<br />
          <input type="radio" name="q9" value="Moonlight" onChange={this.handleQuestionChange} /> Moonlight<br />      
        </div>
           <div>
          <label>Music (Original Score)</label><br />
          <input type="radio" name="q10" value="Jackie"

 onChange={this.handleQuestionChange} /> Jackie

<br />
          <input type="radio" name="q10" value="La La Land" onChange={this.handleQuestionChange} />  La La Land<br />
          <input type="radio" name="q10" value="Lion" onChange={this.handleQuestionChange} /> Lion<br />
          <input type="radio" name="q10" value="Moonlight" onChange={this.handleQuestionChange} /> Moonlight<br />
          <input type="radio" name="q10" value="Passengers" onChange={this.handleQuestionChange} /> Passengers<br />
          
            
        </div>
          
        <input type="submit" value="Submit my Prediction" />
        </form>
      </span>
    } else if(!this.state.name && this.state.submitted === false){
      user = <span>
        <h2>Please enter your name to begin the survey</h2>
        <form onSubmit={this.handleNameSubmit.bind(this)}>
          <input type="text" placeholder="Enter Name..." ref="name" />
        </form>
      </span>;
      questions = '';
    } else if(this.state.submitted === true){
      user = <h2>Thank You, {this.state.name} !</h2>
    }
    return (
      <div className="App">
        <div className="App-header text-center">
          <h2>Oscar Survey 2017</h2>
        </div>
        <div className="text-center">
          {user}
        </div>
        <div className="container">
          {questions}
        </div>
      </div>
    );
  }
}

export default App;
