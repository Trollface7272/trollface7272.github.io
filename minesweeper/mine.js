class mine {
    constructor(cnt, x, y, indexX, indexY) {
        this.hasMine = this.hasMine()
        this.cnt = cnt
        this.x = x
        this.y = y
        this.indexX = indexX
        this.indexY = indexY
        this.minesAround = 0
        this.revealed = false
        this.hasFlag = false

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
        var x = parseInt((event.clientX - 5) / 60)
        var y = parseInt((event.clientY - 5)/ 60)
        try {
            changeColor(x, y)
        }catch(e){}
        checkForWin()
    }
    getMinesAround() {
        if(this.hasMine) return
        for(let i = 0; i < 3; i++)
            for(let j = 0; j < 3; j++)
                this.minesAround += checkForMines(this.indexX+1-i, this.indexY+1-j) ? 1 : 0
    }
    
}