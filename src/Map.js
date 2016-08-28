import Vec2 from "./Vec2"

export default class Map {

    constructor(width, height, screenWidth, screenHeight, player) {
        this._width = width
        this._height = height
        this._screenWidth = screenWidth
        this._screenHeight = screenHeight;
        this._player = player
        this._enemies = []
        this._bullets = []
    }

    draw(context) {
        let center = new Vec2(0.5 * this._screenWidth, 0.5 * this._screenHeight)
        let playerPosition = this._player.position
        let screenPosition = playerPosition.sub(center)

        this._player.draw(context, screenPosition)

        for(let bullet of this._bullets) {
            bullet.draw(context, screenPosition)
        }

        for(let enemy of this._enemies) {
            enemy.draw(context, screenPosition)
        }

        context.beginPath();
        context.moveTo(0-screenPosition.x, 0-screenPosition.y);
        context.lineTo(this._width-screenPosition.x, 0-screenPosition.y);
        context.lineTo(this._width-screenPosition.x, this._height-screenPosition.y);
        context.lineTo(0-screenPosition.x, this._height-screenPosition.y);
        context.lineTo(0-screenPosition.x, 0-screenPosition.y);
        context.stroke();
    }

    update(keystate) {
        this._player.update(keystate, this._bullets)

        for(let enemy of this._enemies) {
            enemy.update(this._player, this._bullets)
        }

        for(let bullet of this._bullets) {
            bullet.update()
        }
        this._bullets = this._bullets.filter((bullet) => !bullet.isRangeExceeded())
    }

    addEnemy(enemy) {
        this._enemies.push(enemy)
    }

    get width() {
        return this._width
    }

    get height() {
        return this._height
    }

    get player() {
        return this._player
    }

    get enemies() {
        return this._enemies
    }

    get bullets() {
        return this._bullets
    }

}