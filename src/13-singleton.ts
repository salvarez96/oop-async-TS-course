/* here, we'll be creating a singleton class with the help of TS. A singleton is used to create
one single instance of a class everytime we try to create another one. This is for very specific
use cases but always good to know */
export class MyService {

  /* first, we create an static property that will save the instance once it is created for the
  first time */
  static instance: MyService | null = null;

  /* to create a singleton, we need a private constructor so the class can only be instantiated
  from itself */
  private constructor(
    private _name: string
  ) {}

  get name() {
    return this._name
  }

  /* this is how the class will be instantiated. From the outside, we use this 'create' static
  method to add the only value the property _name would have and to create the first and only
  instace the class will ever have */
  static create(name: string) {
    if (this.instance === null) {
      MyService.instance = new MyService(name);
    }
    /* if the class has already been instanciated, it will only return the instance if
    MyService.create() is used on another future object */
    return MyService.instance;
  }
}

console.log(MyService.instance); // null

/* because this is the first time MyService will be instantiated, _name will take the value we
pass as argument of create() and an instance of MyService will be created and stored in
MyService.instance */
const myService1 = MyService.create('service1');
console.log(myService1?.name); // service1

console.log(MyService.instance); // MyService { _name: 'service1' }

/* because an instance of MyService already exists, myService2 will be given the return value
inside of the create() method, so myService2 is equal to myService1 and so on for any other
future instances of the already instantiated MyService class */
const myService2 = MyService.create('service2');
console.log(myService2?.name); // service1

console.log(myService1 === myService2); // true

/* Singletons are a design pattern in software programming, so it's not a TS exclusive perk. But
it is easier to create one in TS than with vanilla JS */
