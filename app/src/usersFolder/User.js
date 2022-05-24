import './Users.css';
import react from 'react';

function User({ userFriend, displayName, message,lastMessageType, img, time, doChoose }) {

   
    const choose = function () {
        doChoose(userFriend);
    }
    var lastMs = message;

    //last message is image
    if(lastMessageType.localeCompare('image') == 0){
        lastMs = 'img.png '
    }


    //last message is audio
    if(lastMessageType.localeCompare('audio') == 0){
        lastMs = 'audio'
    }

    //last message is audio
    if(lastMessageType.localeCompare('video') == 0){
        lastMs = 'video'
    }

    

    return (
        <>
            <a onClick={choose} className="list-group-item list-group-item-action">
                <div className='chat-box'>
                    <div className="row">
                        <div className="col order-first position-relative">
                            <img id="circle" className="position-absolute top-50 start-50 translate-middle" src={img} alt="..."></img>
                        </div>
                        <div className="col-9">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="name">{displayName}</h5>
                                <small className="time">{time}</small>
                            </div>
                            <p className="mb-1 message">{lastMs}</p>
                        </div>
                    </div>
                </div>
            </a>
        </>
    );
}

export default User;