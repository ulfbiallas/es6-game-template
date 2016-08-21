import $ from 'jquery';
import Game from "./Game"
import Keystate from "./Keystate"
import ImageLoader from "./ImageLoader"

let canvas = $("#canvas")[0]
canvas.width = 400
canvas.height = 300

let imageLoader = new ImageLoader({
    "player": "gfx/player.png",
    "gun": "gfx/gun.png"
})

imageLoader.load().then(() => {

    let keystate = new Keystate($)
    let game = new Game(canvas, keystate, imageLoader)

    let mainloop = () => {
        game.update()
        game.draw()
        requestAnimationFrame(mainloop)
    }

    requestAnimationFrame(mainloop)

}).catch((error) => {
    console.log(`${error.name}: ${error.message}`)
});