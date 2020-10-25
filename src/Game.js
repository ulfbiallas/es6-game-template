import Player from "./Player"
import Vec2 from "./Vec2"

export default class Game {

    constructor(canvas, imageLoader) {
        this.canvas = canvas
        this.context = this.canvas.getContext('2d')
        this.imageLoader = imageLoader

        this.player = new Player(imageLoader, 400, 400)

        this.mapWidth = 800;
        this.mapHeight = 800;

        this.itemPosition = this.getRandomPosition();
    }

    getRandomPosition() {
        return new Vec2( 100 + Math.random() * (this.mapWidth-200), 100 + Math.random() * (this.mapHeight-200) );
    }

    draw() {
        const context = this.context;
        context.clearRect(0, 0, this.canvas.width, this.canvas.height)

        // draw player
        this.player.draw(context)

        // draw item
        context.beginPath();
        context.arc(this.itemPosition.x, this.itemPosition.y, 5, 0, 2 * Math.PI);
        context.stroke(); 

        // draw map border
        context.beginPath();
        context.moveTo(0, 0);
        context.lineTo(this.mapWidth, 0);
        context.lineTo(this.mapWidth, this.mapHeight);
        context.lineTo(0, this.mapHeight);
        context.lineTo(0, 0);
        context.stroke();
    }

    update() {
        this.player.update(this.itemPosition)

        if(this.player.position.sub(this.itemPosition).length() < 20) {
            this.itemPosition = this.getRandomPosition();
        }
    }

}