import Vec2 from "./Vec2"
import AI from "./AI"

const rad = Math.PI / 180

const dt = 0.8;

export default class Player {

    constructor(imageLoader, x, y) {
        this.imageLoader = imageLoader
        this._position = new Vec2(x, y)
        this.speed = 3
        this._angle = 0

        this.img = imageLoader.getImage('player')

        this.ai = new AI();
    }

    draw(context) {
        let drawPosition = this._position;
        context.translate(drawPosition.x, drawPosition.y)
        context.rotate(this._angle * rad)
        context.drawImage(this.img, -11, -9)
        context.rotate(-this._angle * rad)
        context.translate(-drawPosition.x, -drawPosition.y)
    }

    update(itemPosition) {
        const playerItem = itemPosition.sub(this._position)
        const direction = playerItem.normalize()

        let isItemLeft = false;
        let isItemRight = false;
        let isItemInfront = false;
        let isItemBehind = false;

        const playerDirection = new Vec2(Math.cos(this._angle * rad), Math.sin(this._angle * rad));
        const dotProdFrontBack = playerDirection.dot(direction);
        if(dotProdFrontBack > 0) {
            isItemInfront = true
        } else {
            isItemBehind = true;
        }

        const playerDirectionPerp = playerDirection.perp();
        const dotProdLeftRight = playerDirectionPerp.dot(direction);
        if(dotProdLeftRight > 0.2) {
            isItemLeft = true
        } else if(dotProdLeftRight < -0.2) {
            isItemRight = true;
        }

        const state = {
            isItemLeft,
            isItemRight,
            isItemInfront,
            isItemBehind
        }

        const actions = {
            turnLeft: () => this.turnLeft(),
            turnRight: () => this.turnRight(),
            moveForward: () => this.moveForward()
        }

        this.ai.updateAgent(state, actions);
    }

    turnLeft() {
        this._angle -= 5 * dt
    }

    turnRight() {
        this._angle += 5 * dt
    }

    moveForward() {
        let direction = new Vec2(Math.cos(this._angle * rad), Math.sin(this._angle * rad))
        this._position = this._position.add(direction.scale(this.speed * dt))
    }

    get position() {
        return this._position
    }

    get angle() {
        return this._angle
    }

}