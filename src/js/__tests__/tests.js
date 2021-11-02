import Character from '../Character';

test('character', () => {
  const player = {
    attack: 10,
    defence: 10,
    health: 100,
    level: 1,
    name: "ajoq",
    type: "Игрок без типа",
  };
  const character = new Character('ajoq', 'Bowman');
  expect(character).toEqual(player);
});