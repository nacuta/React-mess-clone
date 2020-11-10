
import React, { useRef, useState } from 'react';
import './App.css';
import ChatRoom from './ChatRoom';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';
import firebaseApp from './firebase';
import SendIcon from '@material-ui/icons/Send';
import { IconButton, Input } from '@material-ui/core';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';



// firebase.initializeApp({
//   // your config
// })
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
// const firestore = firebase.firestore();
// const analytics = firebase.analytics();


function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <img src="https://resource.globenewswire.com/Resource/Download/2dd44ad7-7cb2-4944-a518-0823b39b9f08?size=2?" />
        <h1>DD internal ChatRoom </h1>
        <SignOut />
      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>

    </div>
  );
}

function SignIn() {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
      <p>Do not violate the community guidelines or you will be banned for life!</p>
    </>
  )

}

function SignOut() {
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
  )
}



export default App;
