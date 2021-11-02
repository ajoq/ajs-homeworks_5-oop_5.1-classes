import Character from './Character';

export default class Magician extends Character {
  constructor(name, type) {
    super(name);
    if (type !== 'Magician') {
      throw new Error('Некорректный тип персонажа');
    }
    this.type = 'Magician';
    this.attack = 10;
    this.defence = 40;
  }
}
