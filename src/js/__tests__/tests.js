import Character from '../Character';
import Bowerman from '../Bowerman';
import Swordsman from '../Swordsman';
import Magician from '../Magician';
import Daemon from '../Daemon';
import Undead from '../Undead';
import Zombie from '../Zombie';

test('Character', () => {
  const expected = {
    attack: 10,
    defence: 10,
    health: 100,
    level: 1,
    name: 'ajoq',
    type: 'Игрок без типа',
  };
  const received = new Character('ajoq');
  expect(received).toEqual(expected);
});

test('throw in Character', () => {
  function throwCharacher() {
    return new Character('q');
  }

  expect(throwCharacher).toThrowError(new Error('Длина имени должна быть от 2 до 10 символов'));
});

test('Bowman', () => {
  const expected = {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'ajoq',
    type: 'Bowman',
  };
  const received = new Bowerman('ajoq', 'Bowman');
  expect(received).toEqual(expected);
});

test('type error in Bowman', () => {
  function typeBowman() {
    return new Bowerman('ajoq', 'sometype');
  }

  expect(typeBowman).toThrowError(new Error('Некорректный тип персонажа'));
});

test('Swordsman', () => {
  const expected = {
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
    name: 'ajoq',
    type: 'Swordsman',
  };
  const received = new Swordsman('ajoq', 'Swordsman');
  expect(received).toEqual(expected);
});

test('type error in Swordsman', () => {
  function typeSwordsman() {
    return new Swordsman('ajoq', 'sometype');
  }

  expect(typeSwordsman).toThrowError(new Error('Некорректный тип персонажа'));
});

test('Magician', () => {
  const expected = {
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
    name: 'ajoq',
    type: 'Magician',
  };
  const received = new Magician('ajoq', 'Magician');
  expect(received).toEqual(expected);
});

test('type error in Magician', () => {
  function typeMagician() {
    return new Magician('ajoq', 'sometype');
  }

  expect(typeMagician).toThrowError(new Error('Некорректный тип персонажа'));
});

test('Daemon', () => {
  const expected = {
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
    name: 'ajoq',
    type: 'Daemon',
  };
  const received = new Daemon('ajoq', 'Daemon');
  expect(received).toEqual(expected);
});

test('type error in Daemon', () => {
  function typeDaemon() {
    return new Daemon('ajoq', 'sometype');
  }

  expect(typeDaemon).toThrowError(new Error('Некорректный тип персонажа'));
});

test('Undead', () => {
  const expected = {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'ajoq',
    type: 'Undead',
  };
  const received = new Undead('ajoq', 'Undead');
  expect(received).toEqual(expected);
});

test('type error in Undead', () => {
  function typeUndead() {
    return new Undead('ajoq', 'sometype');
  }

  expect(typeUndead).toThrowError(new Error('Некорректный тип персонажа'));
});

test('Zombie', () => {
  const expected = {
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
    name: 'ajoq',
    type: 'Zombie',
  };
  const received = new Zombie('ajoq', 'Zombie');
  expect(received).toEqual(expected);
});

test('type error in Zombie ', () => {
  function typeZombie() {
    return new Zombie('ajoq', 'sometype');
  }

  expect(typeZombie).toThrowError(new Error('Некорректный тип персонажа'));
});
