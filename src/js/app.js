import Character from './Character';

const npc = new Character('ajoq', 'Bowman');
console.log(npc);

class Bowerman extends Character {
    constructor(name, type) {
        super(name);
        if (type != 'Bowman') {
            throw new Error('Некорректный тип персонажа');
        }
        this.attack = 25;
        this.defence = 25;
    }
}

// const npc2 = new Bowerman('ajoq2', 'Bowman');
// console.log(npc2);

// const name = 'ajoq';
// console.log(name.length);