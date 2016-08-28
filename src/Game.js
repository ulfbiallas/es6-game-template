import Player from "./Player"
import Cannon from "./Cannon"
import Weapon from "./Weapon"
import Map from "./Map"

export default class Game {

    constructor(canvas, keystate, imageLoader) {
        this.canvas = canvas
        this.context = this.canvas.getContext('2d')
        this.keystate = keystate
        this.imageLoader = imageLoader

        let player = new Player(imageLoader, 100, 100, new Weapon(10, 300, 5))
        this.map = new Map(1000, 1000, this.canvas.width, this.canvas.height, player)

        this.map.addEnemy(new Cannon(imageLoader, 350, 100, new Weapon(6, 200, 20)))
        this.map.addEnemy(new Cannon(imageLoader, 150, 250, new Weapon(6, 200, 20)))
    }

    draw() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.map.draw(this.context)
    }

    update() {
        this.map.update(this.keystate)
    }

}