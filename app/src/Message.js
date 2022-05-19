import './messageList';
import './Message.css';
function Message({ type, text, time, mine }) {
    if (text === '') {
        return (<></>);
    }
    
    if (mine) {
        //this is a text type
        if (type.localeCompare('text') == 0) {
            return (
                <>
                    <div className="row message-body">
                        <div className="col-sm-12">
                            <div className="receiver">
                                <div className="message-text">
                                    {text}
                                </div>
                                <span className="message-time pull-right">
                                    {time}
                                </span>
                            </div>
                        </div>
                    </div>
                </>
            );
        }

        //image type
        if(type.localeCompare('image') == 0){
            return (
                <>
                    <div className="row message-body">
                        <div className="col-sm-12">
                            <div className="receiver">
                                <div className="message-img">
                                    <img src= {text}></img>
                                </div>
                                <span className="message-time pull-right">
                                    {time}
                                </span>
                            </div>
                        </div>
                    </div>
                </>
            );
        }
        else if(type.localeCompare('audio') == 0) {
            return (
                <>
                <div className="row message-body">
                      <div className="col-sm-12">
                          <div className="receiver">
                              <div className="message-img">
                            
                              <audio controls src={text}></audio>
                              </div>
                              <span className="message-time pull-right">
                                  {time}
                              </span>
                          </div>
                      </div>
                  </div>
          
          </>
                );
        }
        //its video type
        if(type.localeCompare('video') == 0){
            return (
                <>
                    <div className="row message-body">
                        <div className="col-sm-12">
                            <div className="receiver">
                                <div className="message-video">
                                    <video controls src= {text}></video>
                                </div>
                                <span className="message-time pull-right">
                                    {time}
                                </span>
                            </div>
                        </div>
                    </div>
                </>
            );
        }
    }

    
    if (!mine) {
        //this is a text type
        if (type.localeCompare('text') == 0) {
            return (
                <>
                    <div className="row message-body">
                        <div className="col-sm-12">
                            <div className="sender">
                                <div className="message-text">
                                    {text}
                                </div>
                                <span className="message-time pull-right">
                                    {time}
                                </span>
                            </div>
                        </div>
                    </div>
                </>
            );
        }
        // its an image type
        else if (type.localeCompare('image') == 0){
            return (
                <>
                    <div className="row message-body">
                        <div className="col-sm-12">
                            <div className="sender">
                                <div className="message-img">
                                    <img src= {text}></img>
                                </div>
                                <span className="message-time pull-right">
                                    {time}
                                </span>
                            </div>
                        </div>
                    </div>
                </>
            );
        } 
        //its audio message
        else if(type.localeCompare('audio') == 0) {
            return (
                <>
                  <div className="row message-body">
                        <div className="col-sm-12">
                            <div className="sender">
                                <div className="message-img">
                                <audio controls src={text}></audio>
                                </div>
                                <span className="message-time pull-right">
                                    {time}
                                </span>
                            </div>
                        </div>
                    </div>
            
            </>
            );

        }
        // its an image type
        else if (type.localeCompare('video') == 0){
            return (
                <>
                    <div className="row message-body">
                        <div className="col-sm-12">
                            <div className="sender">
                                <div className="message-video">
                                    <video controls src= {text}></video>
                                </div>
                                <span className="message-time pull-right">
                                    {time}
                                </span>
                            </div>
                        </div>
                    </div>
                </>
            );
        } 
    }

}
export default Message;