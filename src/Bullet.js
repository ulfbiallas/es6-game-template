import Vec2 from "./Vec2"

const rad = Math.PI / 180

export default class Bullet {

    constructor(x, y, angle, speed, range) {
        this.position = new Vec2(x, y)
        this.startPosition = this.position
        this.angle = angle
        this.speed = speed
        this.range = range
    }

    draw(context) {
        if(! this.isRangeExceeded()) {
            context.beginPath();
            context.arc(this.position.x, this.position.y, 2, 0, 2*Math.PI);
            context.stroke();
        }
    }

    update() {
        let direction = new Vec2(Math.cos(this.angle * rad), Math.sin(this.angle * rad))
        this.position = this.position.add(direction.scale(this.speed))
    }

    isRangeExceeded() {
        let distance = this.startPosition.sub(this.position).length()
        return distance > this.range
    }

}