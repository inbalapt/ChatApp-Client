import User from './usersFolder/User.js';
import userMap from './usersFolder/usersList.js';
import AddFriend from './AddFriend.js';
import{useState} from 'react';
import Message from './Message.js';
import addPerson from './addPerson.jpeg';

function Help({plus}){
    const [buttonPopup, setButtonPopup] = useState(false);

   
    return(
        <>
        <img src={addPerson} onClick={()=>setButtonPopup(true)} class="col-2"></img>

     
    <AddFriend trigger={buttonPopup} setTrigger={setButtonPopup} plus={plus}/>
    
    </>
    );
}

export default Help;