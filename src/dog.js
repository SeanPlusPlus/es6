
class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    return `Wah wah, I am ${this.name}`;
  }

  wag() {
    return ['a', 'b', 'c', 'd', 'e', 'f'].map(function(el) {
      return el.toUpperCase()
    });
  }
}

export default Dog;
