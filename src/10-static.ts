console.log(Math.PI);
console.log(Math.cos(270));

/* static properties and methods can be used directly without class instanciating. Usually, static
properties aren't meant to be overwritten, so we use 'readonly' to protect them from edition */
class MyMath {
  static readonly PI = 3.14159265;

  static max(...args: number[]) {
    return args.sort((a, b) => b - a)[0] ?? 'MyNumber.max() should have al least two numerical arguments';
  }
}

console.log(MyMath.PI); // 3.14159265
console.log(MyMath.max(1,2,4,9,1,5,6,7,3,5,7,8)); // 9

const numArr = [2,3,5,6,7,5,34,3,5,67,48]
console.log(MyMath.max(...numArr)); // 67
console.log(MyMath.max(-4,-6,-0.5,-1,-3)); // -0.5
