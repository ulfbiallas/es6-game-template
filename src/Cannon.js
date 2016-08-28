import Vec2 from "./Vec2"
import Bullet from "./Bullet"

const rad = Math.PI / 180

export default class Cannon {

    constructor(imageLoader, x, y, weapon) {
        this.imageLoader = imageLoader
        this._position = new Vec2(x, y)
        this._weapon = weapon
        this._angle = 0
        this.img = imageLoader.getImage('gun')
    }

    draw(context, screenPosition) {
        let drawPosition = this._position.sub(screenPosition)
        context.translate(drawPosition.x, drawPosition.y)
        context.rotate(this._angle * rad)
        context.drawImage(this.img, -11, -9)
        context.rotate(-this._angle * rad)
        context.translate(-drawPosition.x, -drawPosition.y)
    }

    update(player, bullets) {
        let playerCannon = player.position.sub(this._position)
        if(playerCannon.length() < this._weapon.range) {
            this._angle = (this._angle + 360) % 360
            let direction = playerCannon.normalize()
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
            } else {
                if(this._weapon.shoot()) {
                    bullets.push(new Bullet(this._position.x, this._position.y, this._angle, this._weapon.speed, this._weapon.range))
                }
            }
        }
        this._weapon.update()
    }

    get position() {
        return this._position
    }

    get angle() {
        return this._angle
    }

}