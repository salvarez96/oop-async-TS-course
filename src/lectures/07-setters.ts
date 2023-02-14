export class MyDate {
  constructor(
    private year: number,
    private _month: number,
    private _day: number
  ) {}

  get day() {
    return this.addPadding(this._day);
  }

  public add(amount: number, type: 'days' | 'months' | 'years'): void {
    const prevMonth = this._month;
    switch (type) {
      case 'days':
        if (amount >= 30 || this._day + amount > 30) {
          const accum = this._day + amount;
          const monthsToAdd = Math.floor(accum / 30);
          this._day = accum - (30 * monthsToAdd);
          this._month += monthsToAdd;

          if (this._month >= 12) {
            const yearsToAdd = Math.floor(this._month / 12);
            this.year += yearsToAdd;
            this._month = prevMonth + (monthsToAdd - 12 * yearsToAdd);
          }
        } else {
          this._day += amount
        }
        break;
        case 'months':
          if (this._month + amount >= 12) {
            const accum = this._month + amount;
            const yearsToAdd = Math.floor(accum / 12);
            this.year += yearsToAdd;
            this._month = prevMonth + (accum - 12 * yearsToAdd);
          } else {
            this._month += amount
          }
        break;
      case 'years':
        this.year += amount
        break;
    }
  }

  private addPadding(value: number): string {
    return value < 10 ? `0${value}` : `${value}`
  }

  getFormatedDate(): string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this._month);
    return `${day}/${month}/${this.year}`
  }

  get(type: 'days' | 'months' | 'years') {
    switch(type){
      case 'days':
        return this.addPadding(this._day);
      case 'months':
        return this.addPadding(this._month);
      case 'years':
        return this.year;
    }
  }

  get isLeapYear() {
    if (this.year % 4 === 0) {
      if (this.year % 100 === 0 && this.year % 400 !== 0) {
        return false;
      }
      return true;
    }
    return false
  }

  /* in contrast with getters, setters are strictly void type functions, meaning that they will
  never return something. Instead, setters are used to validate and change the class' property
  based on user input or interaction, that's also why setters must have at least one parameter */
  set month(value: number) {
    try {
      if (value < 1 || value > 12) {
        throw new Error('You entered an incorrect value. Remember that numeric months must be between 1 and 12');
      }
      this._month = value;
    } catch (e) {
      console.error((e as Error).message);
    }
  }

  get month() {
    return this._month;
  }
}

const myDate = new MyDate(2020, 1, 9);

console.log(myDate);
console.log(myDate.getFormatedDate()); // 09/01/2020

console.log(myDate.get('days')); // 09
console.log(myDate.get('months')); // 01
console.log(myDate.get('years')); // 2020

console.log(myDate.day); // 09
console.log(myDate.isLeapYear); // true

myDate.month = 11;
console.log(myDate.month); // 11
myDate.month = 100;
// You entered an incorrect value. Remember that numeric months must be between 1 and 12 
console.log(myDate.month); // 11
