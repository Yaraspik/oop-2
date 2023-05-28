import Bowman from '../bowman';
import Daemon from '../daemon';
import Magician from '../magician';
import Swordsman from '../swordsman';
import Undead from '../undead';
import Zombie from '../zombie';

test('create Bowman', () => {
  const character = new Bowman('Miyagi', 'Bowman');
  expect(character).toEqual(
    {
      attack: 25,
      defence: 25,
      health: 100,
      level: 1,
      name: 'Miyagi',
      type: 'Bowman',
    },
  );
});

test('create Undead', () => {
  const character = new Undead('Miyagi', 'Undead');
  expect(character).toEqual(
    {
      attack: 25,
      defence: 25,
      health: 100,
      level: 1,
      name: 'Miyagi',
      type: 'Undead',
    },
  );
});

test('create Daemon', () => {
  const character = new Daemon('Miyagi', 'Daemon');
  expect(character).toEqual(
    {
      attack: 10,
      defence: 40,
      health: 100,
      level: 1,
      name: 'Miyagi',
      type: 'Daemon',
    },
  );
});

test('create Magician', () => {
  const character = new Magician('Miyagi', 'Magician');
  expect(character).toEqual(
    {
      attack: 10,
      defence: 40,
      health: 100,
      level: 1,
      name: 'Miyagi',
      type: 'Magician',
    },
  );
});

test('create Swordsman', () => {
  const character = new Swordsman('Miyagi', 'Swordsman');
  expect(character).toEqual(
    {
      attack: 40,
      defence: 10,
      health: 100,
      level: 1,
      name: 'Miyagi',
      type: 'Swordsman',
    },
  );
});

test('create Zombie', () => {
  const character = new Zombie('Miyagi', 'Zombie');
  expect(character).toEqual(
    {
      attack: 40,
      defence: 10,
      health: 100,
      level: 1,
      name: 'Miyagi',
      type: 'Zombie',
    },
  );
});

test('create not available character', () => {
  function createCharacter() {
    return new Bowman('Jack', 'Pirat');
  }
  expect(createCharacter).toThrow('Передайте допустимый тип персонажа');
});

test('create character, name is not string', () => {
  function createCharacter() {
    return new Bowman(123, 'Bowman');
  }
  expect(createCharacter).toThrow('Значение имени должно быть строкой');
});

test('create character, name is short', () => {
  function createCharacter() {
    return new Bowman('1', 'Bowman');
  }
  expect(createCharacter).toThrow('Имя не может содержать меньше 2 символов');
});

test('create character, name is tall', () => {
  function createCharacter() {
    return new Bowman('superpupercharacter', 'Bowman');
  }
  expect(createCharacter).toThrow('Имя не может содержать больше 10 символов');
});

test('create character, level up for dead character', () => {
  function levelUp() {
    const character = new Zombie('Miyagi', 'Zombie');
    character.health = 0;
    character.levelUp();
  }
  expect(levelUp).toThrow('Нельзя повысить уровень умершего');
});

test('create character, level up', () => {
  const character = new Daemon('Miyagi', 'Daemon');
  character.levelUp();
  expect(character).toEqual(
    {
      attack: 12,
      defence: 48,
      health: 100,
      level: 2,
      name: 'Miyagi',
      type: 'Daemon',
    },
  );
});

test('create character, get critical damage', () => {
  const character = new Daemon('Miyagi', 'Daemon');
  character.damage(500);
  expect(character).toEqual(
    {
      attack: 10,
      defence: 40,
      health: 0,
      level: 1,
      name: 'Miyagi',
      type: 'Daemon',
    },
  );
});

test('create character, get damage', () => {
  const character = new Daemon('Miyagi', 'Daemon');
  character.damage(50);
  expect(character).toEqual(
    {
      attack: 10,
      defence: 40,
      health: 70,
      level: 1,
      name: 'Miyagi',
      type: 'Daemon',
    },
  );
});
