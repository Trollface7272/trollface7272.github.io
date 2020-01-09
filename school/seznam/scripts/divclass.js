class Seznam {
    constructor(name, pocet, id) {
        this.name = name
        this.pocet = pocet
        this.id = id
        this.div
    }
    addDiv() {
        let content = 
        `<div class="seznam" id="${this.id}" onclick="decrement(${this.id})">
        ■  ${this.name} (<span id="${this.name}" class="pocet-span">${this.pocet}</span>)
        </div>`
        document.getElementById('seznam').innerHTML += content
        this.div = document.getElementById(this.id)
    }
    decrement() {
        document.getElementById(this.name).innerHTML -= 1
        if(document.getElementById(this.name).innerHTML <= 0) document.getElementById(this.id).remove()
    }
}