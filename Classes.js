class Hero{
    constructor(nome, tipo){
        this.nome = nome
        this.tipo = tipo
    }
    atacar(){
        console.log(`O ${this.nome} atacou usando ${this.tipo}`)    
    }
}

class Guerreiro extends Hero {
    constructor() {
        super("Guerreiro", "espada");
    }
}

class Mage extends Hero {
    constructor() {
        super("Mago", "magia");
    }
}

class Monge extends Hero {
    constructor() {
        super("Monge", "artes marciais");
    }
}

class Ninja extends Hero {
    constructor() {
        super("Ninja", "shuriken");
    }
}

(function(){
    const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

    const heroes = [new Guerreiro(), new Mage(), new Monge(), new Ninja];

    const index = random(0, heroes.length - 1);
    heroes[index].atacar();
})();