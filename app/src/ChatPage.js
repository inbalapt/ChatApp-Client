import ChatingWith from './ChatingWith';
import './ChatPage.css';
import User from './usersFolder/User';
import users from './usersFolder/fakeUser';
import sami from './usersFolder/profile/sami.jpg';
import Message from './Message';
import TopLeftChat from './TopLeftChat';
import userMap from './usersFolder/usersList.js';
import { useLocation } from "react-router-dom";
import { useState } from 'react';
import MessagesListResult from './MessagesListResult';
import SendMessage from './SendMessage'
import AddFriend from './AddFriend';
//import React, { useRef } from "react";

function ChatPage() {

    const { state } = useLocation();
    const { username } = state;
    //const divRef = useRef();

    const [msgs, setMsgs] = useState([]);
    const [friendTop, setFriendTop] = useState('');

    
    //list of the friends name

    const [userFriends, setUserFriends] = useState(userMap);

    /*
    //scroll down
    function updateScroll(){
        //var element = document.getElementById("chatings");
        //element.scrollTop = element.offsetHeight;
        var messageBody = document.querySelector('#messages');
        messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;
    }
    */

    //function for changing the chat state
    function chageTheState(chatFriend) {
        //deep clone for rendring
        var newChatFriend = [...chatFriend];
        setMsgs(msgs => newChatFriend);
        //updateScroll();
    }


    // change the state when click on user
    const doChoose = function (userFriend) {
        var friendsDic = userMap[username].myFriends;
        var chatFriend = friendsDic[userFriend];
        setMsgs(msgs => chatFriend);
        setFriendTop(friendTop => userFriend);
        setSendPopup(true);
        //updateScroll();
        //divRef.current.scrollIntoView({ behavior: "smooth" })
    }



    //triger for 
    const [buttonPopup, setButtonPopup] = useState(false);
    const [sendPopup, setSendPopup] = useState(false);

    const [modalVisible, setModalVisible] = useState(false);

    //add friend
    function plusFriend() {
        var writtenFriend = document.getElementById("writtenFriend").value;
        if (userMap.hasOwnProperty(writtenFriend)) {
            if (userMap[username].myFriends.hasOwnProperty(writtenFriend) || writtenFriend === username) {
                alert('choose another username');
            }
            else {

                userMap[username].myFriends[writtenFriend] = [{ text: '' }];
                var newUserMap = JSON.parse(JSON.stringify(userMap))
                plus(newUserMap);
                setButtonPopup(false);
            }
        }
        else {
            console.log('bed');
            alert('bedJ');
        }

    }


    const plus = function (newUserMap) {
        setUserFriends(userFriends => newUserMap);
    }

    // the my friends map
    const www = userMap[username].myFriends;
    var friendsName = Object.keys(www);
    //let i = friends.length;
    var friends = [];
    for (let i = 0; i < friendsName.length; i++) {
        var obj = friendsName[i];
        var name = userFriends[obj].displayName;

        var myImage = userFriends[obj].img;

        //the list of the chat info
        var listMessage = www[obj];
        if (listMessage[0].text === '' && listMessage.length ==1) {
            last_message = "";
            lastTime = "";
            last_message_type = '';
        }
        else {
            var last_message = listMessage[listMessage.length - 1].text;
            var last_message_type = listMessage[listMessage.length - 1].type;
            var lastTime = listMessage[listMessage.length - 1].time;
        }

        friends.push({ userFriend: obj, displayName: name, message: last_message, lastMessageType:last_message_type, img: myImage, time: lastTime })
        friends.sort((a, b) => a.time < b.time ? 1 : -1)
    }
    const userList = friends.map((user, key) => {
        return <User doChoose={doChoose} {...user} key={key} />
    });

    return (

        <>
            <div className="row chating">
                <div className="col-3">
                    <div className='my-user'>
                        <TopLeftChat plus={plus} username={username} setButtonPopup={setButtonPopup} />
                    </div>
                    <div className="chatList">
                        {userList}
                    </div>
                </div>
                <div className="col-9 right-side">
                    
                        <div className='friend-top'>
                            <ChatingWith myUsername={username} friendTop={friendTop} changeTheMsgs={chageTheState} />
                        </div>
                        <div className="messages" id="messages">
                        <div className="chatings" id="chatings">
                            <MessagesListResult chatFriend={msgs} />
                        </div>
                    </div>

                        <div>
                            <SendMessage trigger={sendPopup} myUsername={username} addressee={friendTop} changeTheMsgs={chageTheState} />
                        </div>
                    
                </div>
                <AddFriend trigger={buttonPopup} setTrigger={setButtonPopup}>
                    <div className="titleCloseBtn">
                        <button onClick={() => { setButtonPopup(false); }}>X</button>
                    </div>
                    <h1>Add Friend</h1>
                    <input id="writtenFriend" placeholder="Enter friend's username"></input>
                    <button className="add-button" onClick={() => plusFriend()}>Add</button>
                </AddFriend>

            </div>




        </>
    );
}

export default ChatPage;