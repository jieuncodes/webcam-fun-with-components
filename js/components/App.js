import Canvas from "./Canvas";
import VideoPlayer from "./VideoPlayer";

export default function App($app) {
  this.state = {
    width: 0,
    height: 0,
    pixels: null,
    levels:{
    }
  };

  const videoPlayer = new VideoPlayer({
    $app,
    onCanPlay: (width, height) => {
      this.setState({ ...this.state, width, height });
    },
  });

const canvas = new Canvas({$app})

// const controls = new Controls({})

  this.setState = (nextState) => {
    this.state = nextState;
  };

  const init = async () => {
    try {
      this.setState({
        ...this.state,
      });
    } catch (error) {
      console.log("ERROR!!", error);
    } finally {
      this.setState({
        ...this.state,
      });
    }
  };
  init();
}
