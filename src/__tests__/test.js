import Character from '../character';

test('create character Bowman or Daemon', () => {
  const character = new Character('Jack', 'Bowman');
  expect(character).toEqual(
    {
      attack: 25,
      defence: 25,
      health: 100,
      level: 1,
      name: 'Jack',
      type: 'Bowman',
    },
  );
});

test('create character Swordsman or Undead', () => {
  const character = new Character('Jack', 'Swordsman');
  expect(character).toEqual(
    {
      attack: 40,
      defence: 10,
      health: 100,
      level: 1,
      name: 'Jack',
      type: 'Swordsman',
    },
  );
});

test('create character Magician or Zombie', () => {
  const character = new Character('Jack', 'Zombie');
  expect(character).toEqual(
    {
      attack: 10,
      defence: 40,
      health: 100,
      level: 1,
      name: 'Jack',
      type: 'Zombie',
    },
  );
});

test('create not available character', () => {
  function createCharacter() {
    return new Character('Jack', 'Pirat');
  }
  expect(createCharacter).toThrow('Недопустимое значение типа персонажа');
});

test('create character, name is not string', () => {
  function createCharacter() {
    return new Character(123, 'Bowman');
  }
  expect(createCharacter).toThrow('Значение имени должно быть строкой');
});

test('create character, name is short', () => {
  function createCharacter() {
    return new Character('1', 'Bowman');
  }
  expect(createCharacter).toThrow('Имя не может содержать меньше 2 символов');
});

test('create character, name is tall', () => {
  function createCharacter() {
    return new Character('superpupercharacter', 'Bowman');
  }
  expect(createCharacter).toThrow('Имя не может содержать больше 10 символов');
});

test('create character, type is not string', () => {
  function createCharacter() {
    return new Character('Miyagi', 123);
  }
  expect(createCharacter).toThrow('Значение типа персонажа должно быть строкой');
});

test('create character, level up for dead character', () => {
  function levelUp() {
    const character = new Character('Miyagi', 'Zombie');
    character.health = 0;
    character.levelUp();
  }
  expect(levelUp).toThrow('Нельзя повысить уровень умершего');
});

test('create character, level up', () => {
  const character = new Character('Miyagi', 'Zombie');
  character.levelUp();
  expect(character).toEqual(
    {
      attack: 12,
      defence: 48,
      health: 100,
      level: 2,
      name: 'Miyagi',
      type: 'Zombie',
    },
  );
});

test('create character, get critical damage', () => {
  const character = new Character('Miyagi', 'Zombie');
  character.damage(500);
  expect(character).toEqual(
    {
      attack: 10,
      defence: 40,
      health: 0,
      level: 1,
      name: 'Miyagi',
      type: 'Zombie',
    },
  );
});

test('create character, get damage', () => {
  const character = new Character('Miyagi', 'Zombie');
  character.damage(50);
  expect(character).toEqual(
    {
      attack: 10,
      defence: 40,
      health: 70,
      level: 1,
      name: 'Miyagi',
      type: 'Zombie',
    },
  );
});
