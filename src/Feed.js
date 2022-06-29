import React, {useState, useEffect } from 'react';
import './Feed.css'
import BorderColorIcon from '@mui/icons-material/BorderColor';
import InputOptions from './InputOptions'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import {db} from './firebase'
import firebase from 'firebase/compat/app'

function Feed() {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState('')

  useEffect(() => {	
    db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) =>	
    setPosts(	
        snapshot.docs.map((doc) => ({	
            id: doc.id,	
            data: doc.data(),	
        }))	
    )	
);	
}, []);

  const sendPost = e => {
    e.preventDefault();
    db.collection('posts').add({
      name: 'Fernando Martinez',
      description: 'testaaa',
      message: input,
      photoUrl: '',
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
    setInput("");
  }


  return (
    <div>
            <div className="feed">
                <div className="feed_inputContainer">
                    <div className="feed_input">
                        <BorderColorIcon/>
                        <form>
                            <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                            <button onClick={sendPost} type='submit'>Send</button>
                        </form>
                    </div>
                    <div className="feed_inputOptions">
                    <InputOptions Icon={AddPhotoAlternateIcon} title='Photo' color="#70B5F9" />    
                    <InputOptions Icon={SubscriptionsIcon} title='Video' color="#E7A33E" />    
                    <InputOptions Icon={EventNoteIcon} title='Event' color="#C0CBCD" />    
                    <InputOptions Icon={CalendarViewDayIcon} title='Write Article' color="#7FC15E" />    
                    </div>                
                </div>
                {/*Posts*/}
                <>
                {posts.map(({ id, data: { name, description, message, photoUrl }}) => (
                  <Post 
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                  />
        ))}     
        </>
            </div>
    </div>
  );
}
export default Feed;
