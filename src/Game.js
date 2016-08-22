import Player from "./Player"
import Cannon from "./Cannon"
import Weapon from "./Weapon"

export default class Game {

    constructor(canvas, keystate, imageLoader) {
        this.canvas = canvas
        this.context = this.canvas.getContext('2d')
        this.keystate = keystate
        this.imageLoader = imageLoader

        this.bullets = []
        this.cannons = []
        this.cannons.push(new Cannon(imageLoader, 350, 100, new Weapon(6, 200, 20)))
        this.cannons.push(new Cannon(imageLoader, 150, 250, new Weapon(6, 200, 20)))

        this.player = new Player(imageLoader, 100, 100, new Weapon(10, 300, 5))
    }

    draw() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.player.draw(this.context)
        for(let bullet of this.bullets) {
            bullet.draw(this.context)
        }
        for(let cannon of this.cannons) {
            cannon.draw(this.context)
        }
    }

    update() {
        this.player.update(this.keystate, this.bullets)

        for(let cannon of this.cannons) {
            cannon.update(this.player, this.bullets)
        }

        for(let bullet of this.bullets) {
            bullet.update()
        }
        this.bullets = this.bullets.filter((bullet) => !bullet.isRangeExceeded())
    }

}