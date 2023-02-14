export class Animal {
  constructor(
    /* in order to use a private property or method in children class, we have to use the reserved
    word 'protected' in the father class. If we only use 'private', errors will pop-up */
    protected _name: string,
  ) {}

  get name() {
    return this._name;
  }

  move() {
    console.log('Moving along!');
  }

  gretting() {
    console.log(`Hello, I'm ${this._name}`);
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
    /* if we apply polimorfism to a method, we can call the original one using super */
    super.gretting();
    return `Hello, I'm ${this.name} and I'm a doggy`
  }

  woof(times: number) {
    for (let index = 0; index < times; index++) {
      console.log('woof');
    }
  }
}

const chase = new Dog('chase', 'nico');

chase.move(); // Moving along!
console.log(chase.gretting()); // Hello, I'm chase \n Hello, I'm chase and I'm a doggy
console.log(chase.name); // chase
