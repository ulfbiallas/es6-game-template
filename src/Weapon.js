export default class Weapon {

    constructor(speed, range, idleTime) {
        this._speed = speed
        this._range = range
        this.idleTime = idleTime

        this.shootCounter = this.idleTime
    }

    get speed() {
        return this._speed
    }

    get range() {
        return this._range
    }

    get rateOfFire() {
        return this._rateOfFire
    }

    update() {
        this.shootCounter++
    }

    shoot() {
        if(this.shootCounter > this.idleTime) {
            this.shootCounter = 0
            return true
        } else {
            return false
        }
    }
    
}