class Person {

  constructor(name, age) {
    
    this.name = name

    this.age = age

    // this.info = `${this.name}s age is ${this.age}`
  }

  get info() {
    return this.ageStatement()
  }

  ageStatement() {
    return `${this.name}s age is ${this.age}`
  }

}

let john = new Person('john', 34)

// params: name, age     // a string, a number
// return: 'johns age is 34'
// e.g. let john = new Person('john', 34)
// results in 'johns age is 34'

