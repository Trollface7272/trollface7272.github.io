class mine {
    constructor(cnt, x, y) {
        this.color = 'black'
        this.hasMine = this.hasMine()
        this.cnt = cnt
        this.x = x
        this.y = y


        this.draw()
        document.addEventListener("click", this.click)
    }

    hasMine() {
        if((Math.random() * 10).toFixed(0) > 8) return true
        else return false
    }
    draw() {
        this.cnt.fillStyle = this.color
        this.cnt.fillRect(this.x, this.y, 50, 50)
    }
    click(event) {
        console.log(event.clientX / 60 - 5)
        console.log(event.clientY / 60 - 5)
    }
    
}