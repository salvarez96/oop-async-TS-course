export class Animal {
  constructor(
    public name: string,
  ) {}

  move() {
    console.log('Moving along!');
  }

  gretting() {
    return `Hello, I'm ${this.name}`
  }
}

export class Dog extends Animal {
  constructor(
    name: string,
    private _owner: string
  ) {
    super(name);
  }

  get owner() {
    return this._owner;
  }

  override gretting(): string {
    return `Hello, I'm ${this.name} and I'm a doggy`
  }

  woof(times: number) {
    for (let index = 0; index < times; index++) {
      console.log('woof');
    }
  }
}

const fifi = new Animal('fifi');

fifi.move(); // Moving along!
console.log(fifi.gretting()); // Hello, I'm fifi

const chase = new Dog('chase', 'nico');

chase.move(); // Moving along!
console.log(chase.gretting()); // Hello, I'm chase and I'm a doggy
chase.woof(5); // woof X5
console.log(chase.name); // chase
console.log(chase.owner); // nico
