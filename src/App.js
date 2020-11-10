import './App.css';
import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import { FormControl, Input, InputLabel } from '@material-ui/core';
import Message from './Message';
import firebase from 'firebase'
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';


import db from './firebase';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUserName] = useState('');

  //useState = variable in REACT
  //useEffect = run code on a condition in REACT
  useEffect(() => {
    db.collection('messages')
      .orderBy('timestamp').limit(25)
      .onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() })))
      });
  }, [])


  useEffect(() => {
    //run code here
    // if [] is empty this code will run once when the app component loads
    setUserName(prompt('Please enter name'));
  }, [])//condition whatcher
  const sendMessage = (event) => {
    //all the logic to send message is here
    event.preventDefault();
    db.collection('messages').add({
      username: username,
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }

  return (
    <div className="App">
      <img src="https://fieldcommgroup.org/sites/default/files/fcglogo-268_5.png?w=100&h=100" />
      <h1>Hello noul canal de comunicare </h1>
      <h2>welcome {username}</h2>
      <form className="app_form">
        <FormControl className="app_formControl" >
          <Input className="app_input" placeholder="Enter a message" value={input} onChange={event => setInput(event.target.value)} />
          <IconButton className="app_iconButton" variant="contained" color="primary" type='submit' disabled={!input} onClick={sendMessage} >
            <SendIcon />
          </IconButton>
          <Button variant="contained" color="primary" type='submit' disabled={!input} onClick={sendMessage} className="button">Send Message</Button>
        </FormControl>
      </form>
      <FlipMove>
        {
          messages.map(({ id, message }) => (

            <Message key={id} username={username} message={message} />

          ))
        }
      </FlipMove>
    </div >
  );
}

export default App;
