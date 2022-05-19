import Message from "./Message";
//import React, { useEffect, useRef } from 'react'
function MessagesListResult({ chatFriend }) {
    /*
    const divRef = useRef(null);

     useEffect(() => {
        divRef.current.scrollIntoView({ behavior: 'smooth' });
    });
    */

    if (chatFriend == []) {
        return (<></>);
    }
    const messagesList = chatFriend.map((message, key) => {
        return <Message {...message} key={key} />
    });
    return (
        <div>   
            {messagesList}
        </div>
    );
}
export default MessagesListResult;