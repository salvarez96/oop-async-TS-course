/* if we want to restrict a class from being instanciated, we can use the reserved word 'abstract'
to 'protect it' from being instanciated into objects. Abstract classes can be extended from a
child class and that child class can be instantiated */
export abstract class Animal {
  constructor(
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
    super.gretting();
    return `Hello, I'm ${this.name} and I'm a doggy`
  }

  woof(times: number) {
    for (let index = 0; index < times; index++) {
      console.log('woof');
    }
  }
}

/* this isn't allowed because it instanciates directly from the abstract class 'Animal' */
// const animal = new Animal('judas');
// animal.gretting();

/* this is allowed */
const chase = new Dog('chase', 'nico');
chase.move();
