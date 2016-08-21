import Vec2 from "./Vec2"

const rad = Math.PI / 180

export default class Player {

    constructor(imageLoader, x, y) {
        this.imageLoader = imageLoader
        this._position = new Vec2(x, y)
        this.speed = 3
        this._angle = 0

        this.img = imageLoader.getImage('player')
    }

    draw(context) {
        context.translate(this._position.x, this._position.y)
        context.rotate(this._angle * rad)
        context.drawImage(this.img, -11, -9)
        context.rotate(-this._angle * rad)
        context.translate(-this._position.x, -this._position.y)
    }

    update(keystate) {
        if(keystate.left) this._angle -= 5
        if(keystate.right) this._angle += 5
        if(keystate.up) {
            let direction = new Vec2(Math.cos(this._angle * rad), Math.sin(this._angle * rad))
            this._position = this._position.add(direction.scale(this.speed))
        }
    }

    get position() {
        return this._position
    }

    get angle() {
        return this._angle
    }

}