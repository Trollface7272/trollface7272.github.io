class Square {
    constructor(indexX, indexY, cont) {
        this.indexX = indexX
        this.indexY = indexY
        this.width = 50
        this.x = this.indexX * this.width + 5
        this.y = this.indexY * this.width + 5
        this.isClicked = null
        this.cont = cont
    }
    draw(type) {
        if(this.isClicked != null) return
        this.cont.beginPath()
        if(type == 'cross') {
            this.cont.moveTo(this.x,this.y)
            this.cont.lineTo(this.x+this.width, this.y+this.width)
            this.cont.stroke()
            this.cont.moveTo(this.x+this.width, this.y)
            this.cont.lineTo(this.x, this.y+this.width)
            this.cont.stroke()
            this.isClicked = true
        } else if(type == 'circle') {
            this.cont.arc(this.x+this.width/2, this.y+this.width/2, this.width/2-5, 0, Math.PI*2)
            this.cont.stroke()
            this.isClicked = false
        }
        this.cont.closePath()
    }
}