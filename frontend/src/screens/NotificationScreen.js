import React, {useEffect, useState} from 'react'

const NotificationScreen = ({ history }) => {

    let socket = null;

    const [notifications,setNotification] = useState([]);


    useEffect(() => {
         socket = new WebSocket('ws://localhost:5000')

        socket.addEventListener('open', function (event) {
                console.log("Connected to Server")

        }
        );

        socket.addEventListener('message', function (event) {
            const notification = event.data.toString();
            // push the new message into the state
            setNotification((notifications) => {
                return [...notifications, notification];
            });
        });



    }, []);

    const sendMessage = () => {
        if (socket.readyState === WebSocket.OPEN) {
            socket.send('Hello Server!');
        }
    }


return(
    <div className="container mt-5">
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card">
                    <div className="card-body">
                        <div className="d-flex flex-column">
                            {notifications.length > 0 && notifications.map((notification, index) => (
                                <div key={index} className="p-2">{notification}</div>
                            ))}
                            {notifications.length === 0 && (
                                <div className="p-2">No notifications yet</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
}

export default NotificationScreen;