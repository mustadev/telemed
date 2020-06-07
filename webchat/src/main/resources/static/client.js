// var conn = new WebSocket('ws://localhost:8001/socket');
console.log("Location Websucket", 'wss://' + location.hostname + (location.port ? ':' + location.port : '') + '/socket')
var conn = new WebSocket('wss://' + location.hostname + (location.port ? ':' + location.port : '') + '/socket')

const localVideo = document.getElementById('localVideo');
const remoteVideo = document.getElementById('remoteVideo');

conn.onopen = function () {
    console.log("Connected to the signaling server");
    initialize();
};

conn.onmessage = function (msg) {
    console.log("Got message", msg.data);
    var content = JSON.parse(msg.data);
    var data = content.data;
    switch (content.event) {
        // when somebody wants to call us
        case "offer":
            handleOffer(data);
            break;
        case "answer":
            handleAnswer(data);
            break;
        // when a remote peer sends an ice candidate to us
        case "candidate":
            handleCandidate(data);
            break;
        default:
            break;
    }
};

function send(message) {
    conn.send(JSON.stringify(message));
}

var peerConnection;
var dataChannel;
var input = document.getElementById("messageInput");

function initialize() {
    var configuration = {
        "iceServers": [
            { "url": "stun:23.21.150.121" },
            { "url": "stun:stun.l.google.com:19302" },
            { "url": "turn:numb.viagenie.ca", "credential": "webrtcdemo", "username": "louis@mozilla.com" }
        ]
    };


    peerConnection = new RTCPeerConnection(configuration, {
        optional: [{
            RtpDataChannels: true
        }]
    });

    // Setup ice handling
    peerConnection.onicecandidate = function (event) {
        if (event.candidate) {
            send({
                event: "candidate",
                data: event.candidate
            });
        }
    };

    // creating data channel
    dataChannel = peerConnection.createDataChannel("dataChannel", {
        reliable: true
    });

    dataChannel.onerror = function (error) {

        console.log("Error occured on datachannel:", JSON.stringify(error));
        console.log("data error", JSON.stringify(error.data));
        alert("datachanel error" + JSON.stringify(error));
    };

    // when we receive a message from the other peer, printing it on the console
    dataChannel.onmessage = function (event) {
        console.log("message:", event.data);
    };

    dataChannel.onclose = function () {
        console.log("data channel is closed");
    };


    // Adding support for video
    const constraints = {
        video: true, audio: true
    };
    navigator.mediaDevices.getUserMedia(constraints).
        then(function (stream) {
            /* use the stream */
            //    stream.getTracks().forEach(track => pc1.addTrack(track, localStream));
            stream.getTracks().forEach(track => peerConnection.addTrack(track, stream));
            gotStream(stream);
            
        })
        .catch(function (err) {
            /* handle the error */
            console.log("error adding stream ", JSON.stringify(err));
        });
    peerConnection.ontrack = getRemoteStream;
}

function createOffer() {
    peerConnection.createOffer(function (offer) {
        send({
            event: "offer",
            data: offer
        });
        peerConnection.setLocalDescription(offer);
    }, function (error) {
        alert("Error creating an offer");
    });
}

function handleOffer(offer) {
    peerConnection.setRemoteDescription(new RTCSessionDescription(offer));

    // create and send an answer to an offer
    peerConnection.createAnswer(function (answer) {
        peerConnection.setLocalDescription(answer);
        send({
            event: "answer",
            data: answer
        });
    }, function (error) {
        alert("Error creating an answer");
    });

};

function handleCandidate(candidate) {
    peerConnection.addIceCandidate(new RTCIceCandidate(candidate));
};

function handleAnswer(answer) {
    peerConnection.setRemoteDescription(new RTCSessionDescription(answer));
    console.log("connection established successfully!!");
};

function sendMessage() {
    dataChannel.send(input.value);
    input.value = "";
}


//Edit

function getRemoteStream(e) {
    console.log('gotRemoteStream', e.track, e.streams[0]);

    // reset srcObject to work around minor bugs in Chrome and Edge.
    remoteVideo.srcObject = null;
    remoteVideo.srcObject = e.streams[0];

}

function gotStream(stream) {
    console.log('Received local stream');
    localVideo.srcObject = stream;
    localStream = stream;
    callButton.disabled = false;
  }
