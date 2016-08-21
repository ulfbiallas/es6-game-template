import Player from "./Player"

export default class Game {

    constructor(canvas, keystate, imageLoader) {
        this.canvas = canvas
        this.context = this.canvas.getContext('2d')
        this.keystate = keystate
        this.imageLoader = imageLoader

        this.player = new Player(imageLoader, 100, 100)  
    }

    draw() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.player.draw(this.context)
    }

    update() {
        this.player.update(this.keystate)
    }

}