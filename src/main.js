import Game from "./Game"
import ImageLoader from "./ImageLoader"

const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const imageLoader = new ImageLoader({
    player: 'gfx/player.png'
})

imageLoader.load().then(() => {

    const game = new Game(canvas, imageLoader)

    const mainloop = () => {
        game.update()
        game.draw()
        requestAnimationFrame(mainloop)
    }

    requestAnimationFrame(mainloop)

}).catch((error) => {
    console.log(`${error.name}: ${error.message}`)
})
