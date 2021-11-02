import Character from './Character';

export default class Undead extends Character {
  constructor(name, type) {
    super(name);
    if (type !== 'Undead') {
      throw new Error('Некорректный тип персонажа');
    }
    this.type = 'Undead';
    this.attack = 25;
    this.defence = 25;
  }
}
