export default class Character {
  constructor(name, type) {
    // region check name
    if (typeof name !== 'string') {
      throw new Error('Значение имени должно быть строкой');
    } else if (name.length < 2) {
      throw new Error('Имя не может содержать меньше 2 символов');
    } else if (name.length > 10) {
      throw new Error('Имя не может содержать больше 10 символов');
    }
    // region check name end

    // region check type
    if (typeof type !== 'string') {
      throw new Error('Значение типа персонажа должно быть строкой');
    } else if (type === 'Bowman' || type === 'Daemon') {
      this.attack = 25;
      this.defence = 25;
    } else if (type === 'Swordsman' || type === 'Undead') {
      this.attack = 40;
      this.defence = 10;
    } else if (type === 'Magician' || type === 'Zombie') {
      this.attack = 10;
      this.defence = 40;
    } else {
      throw new Error('Недопустимое значение типа персонажа');
    }
    // region check type end

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('Нельзя повысить уровень умершего');
    }
    this.level += 1;
    this.attack += this.attack * 0.2;
    this.defence += this.defence * 0.2;
    this.health = 100;
  }

  damage(points) {
    const damage = points * (1 - this.defence / 100);
    if (this.health >= damage) {
      this.health -= damage;
    } else {
      this.health = 0;
    }
  }
}
