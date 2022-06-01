abstract class Player {
  protected abstract emojicon: string;
  constructor(
    protected name: string,
    protected valueAttack: number,
    protected life: number,
  ) {}

  attacker(character: Player): void {
    this.screams();
    character.loseLife(this.valueAttack);
  }

  loseLife(attackForce: number): void {
    console.log(`${this.name} agora tem ${this.life} de vida ...`);
    this.life -= attackForce;
  }

  abstract screams(): void;
}

class Warrior extends Player {
  protected emojicon = `\u{1F9DD}`;

  screams(): void {
    console.log(this.emojicon + 'AAAAAAAAAAAAAAAIIIIN NOBRU APELÃO');
  }
}
class Monster extends Player {
  protected emojicon = `\u{1F9DF}`;

  screams(): void {
    console.log(this.emojicon + 'ai me batero');
  }
}

const fighter = new Warrior('Guerreira', 8.2, 100);
const monster = new Monster('Monstro', 13, 120);

fighter.attacker(monster);
fighter.attacker(monster);
fighter.attacker(monster);
monster.attacker(fighter);
