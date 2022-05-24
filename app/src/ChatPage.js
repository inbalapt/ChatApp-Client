import ChatingWith from './ChatingWith';
import './ChatPage.css';
import User from './usersFolder/User';
import users from './usersFolder/fakeUser';
import sami from './usersFolder/profile/sami.jpg';
import Message from './Message';
import TopLeftChat from './TopLeftChat';
import userMap from './usersFolder/usersList.js';
import { useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';
import MessagesListResult from './MessagesListResult';
import SendMessage from './SendMessage'
import AddFriend from './AddFriend';
import axios from 'axios';
//import React, { useRef } from "react";
var friendsFlag =0;
function ChatPage() {

    const { state } = useLocation();
    const { username } = state;
    //const divRef = useRef();

    const [msgs, setMsgs] = useState([]);
    const [friendTop, setFriendTop] = useState('');
    const [friends, setFriends] = useState([]);


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
    const doChoose = async function (userFriend) {

        console.log("hijiji")
        //'https://localhost:7100/api/Contacts/inbal33/yoval99/messages'
        //get the messages
        var srtingFetch = 'https://localhost:7100/api/Contacts/';
        const result = await fetch(srtingFetch.concat(username, '/',userFriend, '/messages'));
        const myMesg = await result.json();
        var tempMesg = [];
        for (let i = 0; i < myMesg.length; i++) {
            var content = myMesg[i].content;
            var created = myMesg[i].created;
            var sent = myMesg[i].sent;
            var type = "text";
            tempMesg.push({ type: "text", text: content, time: created, mine: sent})
        }

        setMsgs(msgs => tempMesg);
        setFriendTop(friendTop => userFriend);
        setSendPopup(true);
        /*
        var friendsDic = userMap[username].myFriends;
        var chatFriend = friendsDic[userFriend];
        setMsgs(msgs => chatFriend);
        setFriendTop(friendTop => userFriend);
        setSendPopup(true);
        */

        //updateScroll();
        //divRef.current.scrollIntoView({ behavior: "smooth" })
    }



    //triger for 
    const [buttonPopup, setButtonPopup] = useState(false);
    const [sendPopup, setSendPopup] = useState(false);

    const [modalVisible, setModalVisible] = useState(false);

    /* useEffect(()=>{
         async function something(){
             console.log("not good");
             var address = 'https://localhost:7100/api/Contacts/'.concat(username);
             const res = await fetch(address);
             console.log("hi");
         }
         something(); 
         //const data = await res.json();
         
     },[userFriends])*/
    //add friend
    async function plusFriend() {
        var writtenFriend = document.getElementById("writtenFriend").value;
        var friendDisplayName = document.getElementById("friendDisplayName").value;
        var friendServer = document.getElementById("friendServer").value;
        const result = await fetch('https://localhost:7100/api/Contacts/users');
        const users = await result.json();
        var j = 0;
        var exist = 0;
        for (; j < users.length; j++) {
            if (users[j].id == writtenFriend && users[j].server == friendServer && users[j].name == friendDisplayName) {
                exist = 1;
            }
        }
        if (exist == 0) {
            console.log("dont exist");
            return;
        }
        var address = 'https://localhost:7100/api/Contacts/'.concat('noale10');
        const res = await fetch(address);
        const friendsData = await res.json();
        console.log(friendsData);
        var i = 0;
        for (; i < friendsData.length; i++) {
            if (writtenFriend == friendsData[i].id && friendDisplayName == friendsData[i].name && friendServer == friendsData[i].server) {
                console.log("is your friend");
                return;
            }
        }

        const user = {connected:username, id:writtenFriend, name:friendDisplayName, server:friendServer};
        console.log(user);
        try{
            await fetch('https://localhost:7100/api/Contacts', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(user)
            });
        }
        catch(err){
            console.error("nla");
        }

        /*if (userMap.hasOwnProperty(writtenFriend)) {
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
        }*/

    }


    const plus = function (newUserMap) {
        setUserFriends(userFriends => newUserMap);
    }

    //var flag = 0;

    async function addLeftFriend() {

        var srtingFetch = 'https://localhost:7100/api/Contacts/';
        const result = await fetch(srtingFetch.concat(username));
        const myUsers = await result.json();
        var tempFriends = [];
        for (let i = 0; i < myUsers.length; i++) {
            // obj is the friend name
            var obj = myUsers[i].id;
            var name = myUsers[i].name;
            var myImage = sami;
            var last_message = myUsers[i].last;
            var last_message_type = "text";
            var lastTime = myUsers[i].lastDate;

            /*
            const obj = Object.assign("", myUsers[i].id);
            const name = Object.assign("", myUsers[i].name);
            const last_message = Object.assign("", myUsers[i].last);
            const lastTime = Object.assign("", myUsers[i].lastDate);
            
            var obj = `${myUsers[i].id}`;
            var name = `${myUsers[i].name}`;
            var last_message = `${myUsers[i].last}`;
            var lastTime = `${myUsers[i].lastDate}`;
            */
           
            tempFriends.push({ userFriend: obj, displayName: name, message: last_message, lastMessageType: last_message_type, img: myImage, time: lastTime })
            tempFriends.sort((a, b) => a.time < b.time ? 1 : -1)
        }

        
        setFriends(friends => tempFriends);
        friendsFlag =1;
        //return;
        
    }
    //var friends = [];
    if (friendsFlag == 0){
      addLeftFriend();  
    }   
    
    const userList = friends.map((user, key) => {
            return <User doChoose={doChoose} {...user} key={key} />
    });
    
    console.log(friends);

    var anotherFriends = [
        { userFriend: "noale10", displayName: "noa", message: "hiii", lastMessageType: "text", img: sami, time: "10:00" },
        { userFriend: "yoval99", displayName: "yoval", message: "hola hfgjr", lastMessageType: "text", img: sami, time: "17:40" }
    ];
    
    //console.log(anotherFriends);
    /*
    const userList = anotherFriends.map((user, key) => {
        return <User doChoose={doChoose} {...user} key={key} />
    });
    */

   
    
    
   

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
                    <input id="friendDisplayName" placeholder="Enter friend's display name"></input>
                    <input id="friendServer" placeholder="Enter friend's server"></input>
                    <button className="add-button" onClick={() => plusFriend()}>Add</button>
                </AddFriend>

            </div>




        </>
    );
}

export default ChatPage;