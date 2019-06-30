export default class Keystate {

    constructor() {
        this._left = false
        this._right = false
        this._up = false
        this._down = false
        this._ctrl = false

        document.onkeydown = evt => {
            switch(evt.keyCode) {
                case 17:
                    this._ctrl = true
                    break
                case 37:
                    this._left = true
                    break
                case 38:
                    this._up = true
                    break
                case 39:
                    this._right = true
                    break
                case 40:
                    this._down = true
                    break
                default:
                    break
            }
        }

        document.onkeyup = evt => {
            switch(evt.keyCode) {
                case 17:
                    this._ctrl = false
                    break
                case 37:
                    this._left = false
                    break
                case 38:
                    this._up = false
                    break
                case 39:
                    this._right = false
                    break
                case 40:
                    this._down = false
                    break
                default:
                    break
            }
        }
    }

    get ctrl() {
        return this._ctrl
    }

    get left() {
        return this._left
    }

    get right() {
        return this._right
    }

    get up() {
        return this._up
    }

    get down() {
        return this._down
    }

}
