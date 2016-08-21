var Promise = require("bluebird")

export default class ImageLoader {

    constructor(imagesToLoad) {
        this.imagesToLoad = imagesToLoad

        this.imageNames = Object.keys(this.imagesToLoad)
        this.totalImages = this.imageNames.length
        this.loadedImages = 0

        this.images = {}
    }

    load() {

         return new Promise((resolve, reject) => {

            if(this.loadedImages == this.totalImages) {
                resolve()
            }

            for (let imageName of this.imageNames) {
                this.images[imageName] = new Image()
                this.images[imageName].onload = () => {
                    this.loadedImages++
                    if(this.loadedImages == this.totalImages) {
                        resolve()
                    }
                }
                this.images[imageName].onerror = () => {
                    reject(new Error(`Image "${imageName}" could not be loaded!`))
                }
                this.images[imageName].src = this.imagesToLoad[imageName]
            }

        })

    }

    getImage(imageName) {
        return this.images[imageName]
    }

}