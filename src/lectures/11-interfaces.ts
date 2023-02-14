/* interfaces in classes work like contracts, where every class that implements that interface,
must contain every property and method that's contained in the interface. This is used to
standardize known behaviours between different classes where we need the same kind of properties
and methods but use a different logic, so basic class inheritance doesn't necessarily work*/
interface Driver {
  database: string;
  password: string;
  port: number;

  connect(): void;
  disconnect(): void;
  isConnected(name: string): boolean;
}

class PostgresDriver implements Driver {
  /* all properties and methods that are implemented from an interface are always public. In order
  to create private properties or methods, they have to be specific in every class */
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}
  isConnected(name: string): boolean {
    throw new Error("Method not implemented.");
  }
  connect(): void {

  }
  disconnect(): void {

  }
}

class OracleDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}
  isConnected(name: string): boolean {
    throw new Error("Method not implemented.");
  }
  connect(): void {

  }
  disconnect(): void {

  }
}
