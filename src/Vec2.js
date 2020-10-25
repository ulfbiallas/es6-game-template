export default class Vec2 {

    constructor(x, y) {
        this._x = x
        this._y = y
    }

    get x() {
        return this._x
    }

    get y() {
        return this._y
    }

    set x(x) {
        this._x = x
    }

    set y(y) {
        this._y = y
    }

    add(v) {
        return new Vec2(this._x + v.x, this._y + v.y)
    }

    sub(v) {
        return new Vec2(this._x - v.x, this._y - v.y)
    }

    scale(s) {
        return new Vec2(this._x * s, this._y * s)
    }

    dot(v) {
        return this._x * v.x + this._y * v.y
    }

    perp() {
        return new Vec2(this._y, -this._x)
    }

    length2() {
        return this._x * this._x + this._y * this._y
    }

    length() {
        return Math.sqrt(this.length2())
    }

    normalize() {
        let l = this.length()
        if(l > 0) {
            return this.scale(1 / l)
        }
    }

}