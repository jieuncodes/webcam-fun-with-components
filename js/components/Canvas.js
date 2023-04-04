export default function Canvas({$app}){
    const canvas = document.createElement("canvas");
    canvas.className = "photo";
    $app.appendChild(canvas);
    const ctx = canvas.getContext("2d");

    this.state = {
        width: 0,
        height: 0,
        pixels:null,
    }

    this.setState = (nextState)=> {
        this.state = nextState;
        canvas.width = this.state.width;
        canvas.height = this.state.height;
        if(this.state.pixels){
            ctx.putImageData(this.state.pixels,0, 0)
        }
    }

}