
class Hello {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello ${this.name}`;
  }

  stoke() {
    return ['a', 'b', 'c', 'd', 'e', 'f'].map(function(el) {
      return el.toUpperCase();
    });
  }
}

export default Hello;
