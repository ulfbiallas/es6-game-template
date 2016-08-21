import Player from "./Player"
import Weapon from "./Weapon"
import Bullet from "./Bullet"

export default class Game {

    constructor(canvas, keystate, imageLoader) {
        this.canvas = canvas
        this.context = this.canvas.getContext('2d')
        this.keystate = keystate
        this.imageLoader = imageLoader

        this.bullets = []
        this.player = new Player(imageLoader, 100, 100)
        this.weapon = new Weapon(10, 300, 5)
    }

    draw() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.player.draw(this.context)
        for(let bullet of this.bullets) {
            bullet.draw(this.context)
        }
    }

    update() {
        if(this.keystate.ctrl && this.weapon.shoot()) {
            let pos = this.player.position
            let angle = this.player.angle
            let weapon = this.weapon
            this.bullets.push(new Bullet(pos.x, pos.y, angle, weapon.speed, weapon.range))
        }
        this.player.update(this.keystate)
        this.weapon.update()
        for(let bullet of this.bullets) {
            bullet.update()
        }
        this.bullets = this.bullets.filter((bullet) => !bullet.isRangeExceeded())
    }

}