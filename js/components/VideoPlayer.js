export default function VideoPlayer({ $app, onCanPlay }) {
  const video = document.createElement("video");
  video.className = "player";
  $app.appendChild(video);

  async function getVideo() {
    try {
      const localMediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      });
      video.srcObject = localMediaStream;
      video.play();
    } catch (error) {
      console.log("Something wrong with video function.", error);
    }
  }

  video.addEventListener("canplay", () => {
    const width = video.videoWidth;
    const height = video.videoHeight;
    onCanPlay(width, height);
  });

  getVideo();
}
