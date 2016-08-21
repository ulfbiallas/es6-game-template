import Vec2 from "./Vec2"

const rad = Math.PI / 180

export default class Player {

    constructor(imageLoader, x, y) {
        this.imageLoader = imageLoader
        this.position = new Vec2(x, y)
        this.speed = 3
        this.angle = 0

        this.img = imageLoader.getImage('player')
    }

    draw(context) {
        let direction = new Vec2(Math.cos(this.angle * rad), Math.sin(this.angle * rad))

        context.translate(this.position.x, this.position.y)
        context.rotate(this.angle * rad)
        context.drawImage(this.img, -11, -9)
        context.rotate(-this.angle * rad)
        context.translate(-this.position.x, -this.position.y)
    }

    update(keystate) {
        if(keystate.left) this.angle -= 5
        if(keystate.right) this.angle += 5
        if(keystate.up) {
            let direction = new Vec2(Math.cos(this.angle * rad), Math.sin(this.angle * rad))
            this.position = this.position.add(direction.scale(this.speed))
        }
    }

}