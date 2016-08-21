import Vec2 from "./Vec2"

const rad = Math.PI / 180

export default class Cannon {

    constructor(imageLoader, x, y) {
        this.imageLoader = imageLoader
        this._position = new Vec2(x, y)
        this._angle = 0
        this.img = imageLoader.getImage('gun')
    }

    draw(context) {
        context.translate(this._position.x, this._position.y)
        context.rotate(this._angle * rad)
        context.drawImage(this.img, -11, -9)
        context.rotate(-this._angle * rad)
        context.translate(-this._position.x, -this._position.y)
    }

    update(player) {
        this._angle = (this._angle + 360) % 360
        let direction = player.position.sub(this._position).normalize()
        let angleA = (Math.atan2(direction.y, direction.x) / rad + 360) % 360
        let angleB = this._angle >= angleA ? angleA + 360 : angleA - 360

        let angle0 = Math.min(angleA, angleB)
        let angle1 = Math.max(angleA, angleB)

        let dAngle0 = this._angle - angle0
        let dAngle1 = angle1 - this._angle
        if(dAngle0 > 1 && dAngle1 > 1) {
            if(dAngle0 >= dAngle1) {
                this._angle++
            } else {
                this._angle--
            }
        }
    }

    get position() {
        return this._position
    }

    get angle() {
        return this._angle
    }

}