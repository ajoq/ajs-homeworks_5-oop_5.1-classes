export default class Character {
    constructor(name) {
        this.name = name;
        if (name.length < 2 || name.length > 10) {
            throw new Error('Длина имени должна быть от 2 до 10 символов');
        }
        this.type = 'Игрок без типа';
        this.health = 100;
        this.level = 1;
        this.attack = 10;
        this.defence = 10;
    }
}
