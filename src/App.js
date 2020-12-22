import React, {useState, useEffect} from 'react';
import {Button, FormControl, InputLabel, Input} from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import {IconButton} from '@material-ui/core';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  //useState = variable in React
  //useEffect = run code on a condition in REACT

  useEffect(() => {
    //run once when the app component loads
    db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({message:doc.data(), id:doc.id})))
    })
  }, [])

  useEffect(() => { 
    //rim code here..
    //if it blanks inside [], this code runs ONCE when the app component loads
    console.log("hey");
    //const name = prompt("please enter your name");
    setUsername(prompt("Please enter your name"));
  }, [] )//condition

  const sendMessage = (event) =>{
    event.preventDefault();
    db.collection('messages').add({
      message:input,
      username:username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    //logic to send message goes here.
    //copy everything that is in the messages and append the new input one
    setInput('');
  }
  return (
    <div className="App">
      <img style={{marginTop:"10px"}} src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=90&h=90" />
      <h1 style={{fontFamily:'Roboto Mono, monospace', fontSize:'2.5em', marginBottom:'0'}}>Messanger App</h1>
      <h4 style={{fontWeight:'normal', marginTop:'5pxs'}}>Welcome {username}</h4>
      <form class="app__form">
        <FormControl className="app__formControl">
          <Input className="app__input" placeholder="Enter a message..." value={input} onChange={event => setInput(event.target.value)}/>
          <IconButton className="app__iconButton" disabled={!input} type="submit" variant="contained" color="primary" onClick={sendMessage}><SendIcon /></IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {
          messages.map(({message, id}) => (
            <Message message={message} key={id} username={username}/>
          ))
        }
      </FlipMove>
    </div>
  );
}

export default App;
