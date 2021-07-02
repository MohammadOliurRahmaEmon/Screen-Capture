const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media Stream, pass to video element, then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        // Catch error here
        console.log('Woops,Bloody Error', error);
    }
}
// Picture in Picture Add Event
button.addEventListener('click', async() => {
        //Disable Button
        button.disabled = true;
        //Start picture in picture
        await videoElement.requestPictureInPicture();
        //reset button
        button.disabled = false;
    })
    // On load
selectMediaStream();