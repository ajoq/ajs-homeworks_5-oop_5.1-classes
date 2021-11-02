import Character from './Character';

export default class Swordsman extends Character {
  constructor(name, type) {
    super(name);
    if (type !== 'Swordsman') {
      throw new Error('Некорректный тип персонажа');
    }
    this.type = 'Swordsman';
    this.attack = 40;
    this.defence = 10;
  }
}
