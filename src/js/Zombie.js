import Character from './Character';

export default class Zombie extends Character {
  constructor(name, type) {
    super(name);
    if (type !== 'Zombie') {
      throw new Error('Некорректный тип персонажа');
    }
    this.type = 'Zombie';
    this.attack = 40;
    this.defence = 10;
  }
}
