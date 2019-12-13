class tile {
    constructor(index) {
        this.index = index
        this.number = index+1
        this.isEmpty = index == 15 ? true : false
        this.getXY()
        document.addEventListener("click", click)
    }
    getXY() {
        this.x = this.index % 4
        this.y = parseInt(this.index / 4)
    }
    setIndex(newIndex) {
        this.index = newIndex
        this.getXY()
    }

    
}