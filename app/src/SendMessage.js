import './SendMessage.css'
import './ChatPage'
import attach from './attach.jpg';
import ReactDOM from 'react-dom'
import userMap from './usersFolder/usersList.js';
import { useState } from 'react';
function SendMessage({trigger, myUsername, addressee, changeTheMsgs }) {

    const [update, setUpdate] = useState(true);
    const [val, setVal] = useState();

    function handleSend() {
        // the text that we send
        var textMessage = document.getElementById("text").value;
        textMessage = textMessage.trim();
        if(textMessage==""){
            document.getElementById("text").value = "";
            return;
        }
        console.log(userMap);
        //adding the text message to the two converasions.
        function addZero(variable){
            if(variable < 10){
                return (variable = "0" + variable);
            }
            return(variable);
        }
        var today = new Date();
        var hour=addZero(today.getHours())
        var minute=addZero(today.getMinutes())
        var time = hour + ":" + minute;
        //add to server
        userMap[myUsername].myFriends[addressee].push({ type: "text", text: textMessage, time: time, mine: true });
        //changing the messages state
        var chatFriend = userMap[myUsername].myFriends[addressee];
        //setMsgs(msgs=>fakeChat);
        changeTheMsgs(chatFriend);
        //setVal(() => "")
        document.getElementById("text").value = "";
        //setUpdate(false);
    }
    async function sendText(){

    }
    return (trigger) ? (
        <>
        <div className="text-send">
            <div className="hiiii h-100">
                <div className="row h-100">
                    <div className="col-10 h-100">
                        <div className="typing h-100">
                            <input type="text" value={val} id="text" placeholder="Enter text here..."></input>
                        </div>
                    </div>
                    <div className="col order-last">
                        <button type="submit" className="btn btn-success" onClick={() => handleSend()}
                        >Send</button>
                    </div>
                </div>
            </div>
            </div>
        </>
    ):<></>;
}


export default SendMessage;