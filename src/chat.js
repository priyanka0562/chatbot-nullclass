import React, { useState } from 'react'

function chat({socket, username, room}) {
        const [currentMessage, setCurrentMessage] = useState("");

        const sendMessage = () => {
            if (currentMessage !==""){
                const messageData={
                    room: 33,46 :sec
                }
            }
        }
  return(
  <div>
     <div className="chat-header">
        <p>Live Chat</p>
     </div>
     <div className="chat-body"></div>
     <div className="chat-footer">
        <input
         type="text"
         placeholder="Hey.."
         onChange={(event) => {
            setCurrentMessage(event.target.value);
         }}
          />
        <button>&#9658;</button>
     </div>
  </div>
  );
}

export default chat