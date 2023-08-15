import React, {useEffect, useState} from 'react'


const AddNotificationScreen = ({ history }) => {

    const [msg,setMsg] = useState();
    let socket = new WebSocket('ws://localhost:5000')

    socket.addEventListener('open', function (event) {
            // socket.send('Hello Server!');
        }
    );

    const addNotification = async () => {
        const Message = msg.toString();
        console.log(socket.readyState)
        console.log(WebSocket.OPEN)
        if (socket.readyState === WebSocket.OPEN) {
            socket.send(Message);
        }
    }



    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-header">
                            <h4>Add Notification</h4>
                        </div>
                        <div className="card-body">
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">Message</label>
                                    <textarea className="form-control" id="message" name="message" rows="3"  value={msg} onChange={(e)=>setMsg(e.target.value)}>

                                    </textarea>
                                </div>
                                <div className="mb-3">
                                    <button type="submit" className="btn btn-primary" onClick={addNotification}>Add Notification</button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default AddNotificationScreen
