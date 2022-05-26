import userMap from './usersFolder/usersList.js';
import './usersFolder/Users.css';
import addPerson from './addPerson.jpeg';
import { useState } from 'react';
import './TopLeftChat.css';
import elsa from './usersFolder/profile/elsa.jpg';
import AddFriend from './AddFriend.js';
var topLeftFlag =0;
function TopLeftChat({ username, plus , setButtonPopup}) {

    //var x = userMap[username];
    const [myName, setName] = useState('');

    async function getMyName() {
        var srtingFetch = 'https://localhost:7100/api/Contacts/';
        //'https://localhost:7100/api/Contacts/{userName}/password'
        var flag = 0;
        let ser_name;
        const rest = await fetch(srtingFetch.concat(username,'/name'))
        .then(response => response.text()).then(data => {
            ser_name = data;
            setName(myName => data);
            });
    }

    if (topLeftFlag == 0){
        getMyName();
    }
    
    

    return (
        <>
            <div className="container-fluid h-100">
                <div className="row h-100">
                    <div className="col order-first position-relative">
                        <img id="circle" className="position-absolute top-50 start-50 translate-middle" src={elsa} alt="..."></img>
                    </div>
                    <div className="col">
                        
                            <h5 className="mb-1 name">{myName}</h5>
                        
                    </div>
                    <div className="col-2">
                      <i className="bi bi-person-plus-fill " onClick={() => setButtonPopup(true)} ></i>
                    </div>
                </div>
            </div>
        </>
    );
}
export default TopLeftChat;