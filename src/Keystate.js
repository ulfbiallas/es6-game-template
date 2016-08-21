export default class Keystate {

    constructor($) {

        this._left = false
        this._right = false
        this._up = false
        this._down = false

        $(document).keydown(evt => {
            switch(evt.keyCode) {
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
        })

        $(document).keyup(evt => {
            switch(evt.keyCode) {
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
        })
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