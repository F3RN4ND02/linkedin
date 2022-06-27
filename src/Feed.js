import React, {useState} from 'react';
import './Feed.css'
import BorderColorIcon from '@mui/icons-material/BorderColor';
import InputOptions from './InputOptions'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';

function Feed() {



  const sendPost = e => {
    e.preventDefault();
  }


  return (
    <div>
            <div className="feed">
                <div className="feed_inputContainer">
                    <div className="feed_input">
                        <BorderColorIcon/>
                        <form>
                            <input type="text" />
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
                
                <Post name='Fernando Martinez' description='This is a test' message='is this working' />
            </div>
    </div>
  );
}
export default Feed;
