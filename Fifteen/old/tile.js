class tile {
    constructor(indexX, indexY, indexThis, cont) {
        this.indexX = indexX
        this.indexY = indexY
        this.indexThis = indexThis
        this.width = 170
        this.cont = cont
        this.isEmpty = indexThis == 15 ? true : false
        this.x
        this.y
        this.getXY()

        document.addEventListener("click", this.click)
    } 
    click(e) {
        let x = parseInt((e.clientX - 5) / 200)
        let y = parseInt((e.clientY - 5) / 200)
        if(x > limit || y > limit) return
        let s 
        try {if(tiles[y][x].check(tiles[y+1][x])) s = 'down'}catch(e){}
        try {if(tiles[y][x].check(tiles[y-1][x])) s = 'up'}catch(e){}
        try {if(tiles[y][x].check(tiles[y][x-1])) s = 'left'}catch(e){}
        try {if(tiles[y][x].check(tiles[y][x+1])) s = 'right'}catch(e){}
        console.log(s)
        switch (s) {
            case 'down':
                let helper = tiles[y+1][x]
                tiles[y+1][x].indexX -= 1
                tiles[y+1][x].isEmpty = false
                tiles[y+1][x].indexThis = this.indexThis
                tiles[y][x].indexX++
                tiles[y][x].isEmpty = true
                tiles[y][x].indexThis = helper.indexThis
                break;

            case 'up':
                
                break;

            case 'left':
                
                break;

            case 'right':
                
                break;
        
            default:
                break;
        }
        draw()
    }
    check(tile) {
        try {
            if(tile.isEmpty) return true
        }catch(e){return false}
    }
    getXY() {
        this.x = this.indexX * 200 + 5
        this.y = this.indexY * 200 + 5
    }
    /*check(tiles) {
        let helper = this
        try {
            console.log(this.indexX)
            if(tiles[this.indexX+1][this.indexY].isEmpty) {
                
                return '1'
            }
        }catch(e){console.log(e)}
        /*try {
            if(tiles[this.indexX-1][this.indexY].isEmpty) {
                helper = this
                tiles[this.indexX][this.indexY] = tiles[this.indexX-1][this.indexY]
                tiles[this.indexX-1][this.indexY] = this
                this.indexX--
                return '2'
            }
        }catch(e){console.log(e)}
        try {
            if(tiles[this.indexX][this.indexY+1].isEmpty) {
                this.indexY += 1
                this.y = tiles[this.indexX][this.indexY].y
                tiles[this.indexX][this.indexY].indexY -= 1
                tiles[this.indexX][this.indexY].y -= helper.y
                helper = this
                tiles[this.indexX][this.indexY-1] = tiles[this.indexX][this.indexY]
                tiles[this.indexX][this.indexY] = helper
                return '3'
            }
        }catch(e){console.log(e)}
        try {
            if(tiles[this.indexX+1][this.indexY-1].isEmpty) {
                this.indexY -= 1
                this.y = tiles[this.indexX][this.indexY].y
                tiles[this.indexX][this.indexY].indexY += 1
                tiles[this.indexX][this.indexY].y -= helper.y
                helper = this
                tiles[this.indexX][this.indexY-1] = tiles[this.indexX][this.indexY]
                tiles[this.indexX][this.indexY] = helper
                return '4'
            }
        }catch(e){console.log(e)}
    }*/
    
}