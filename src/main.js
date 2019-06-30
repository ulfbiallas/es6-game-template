import Game from "./Game"
import Keystate from "./Keystate"
import ImageLoader from "./ImageLoader"

const canvas = document.getElementById('canvas');
canvas.width = 400
canvas.height = 300

const imageLoader = new ImageLoader({
    player: 'gfx/player.png',
    gun: 'gfx/gun.png'
})

imageLoader.load().then(() => {

    const keystate = new Keystate()
    const game = new Game(canvas, keystate, imageLoader)

    const mainloop = () => {
        game.update()
        game.draw()
        requestAnimationFrame(mainloop)
    }

    requestAnimationFrame(mainloop)

}).catch((error) => {
    console.log(`${error.name}: ${error.message}`)
})
