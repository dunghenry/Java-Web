function createPerson(name, age) {
  let privateData = ['JavaScript', 'PHP', 'Ruby']
  function getName() {
    return name;
  }
  return {
    name,
    age,
    getName: getName(),
    data: privateData
  }
}

const personActions = {
  getName() {
    return this.name;
  },
  getAge() {
    return this.age;
  }
}

const person1 = createPerson("Dung", 21);
person1.getName1 = personActions.getName;
console.log(person1);


// Create Object
let personActions1 = {
  getFullName() {
    return this.firstName + ' ' + this.lastName;
  },
};

function createPerson1(firstName, lastName) {
  let person = Object.create(personActions1);
  person.firstName = firstName;
  person.lastName = lastName;
  return person;
}

let person2 = createPerson1('John', 'Doe');
let person3 = createPerson1('Jane', 'Doe');

console.log(person2.getFullName());
console.log(person3.getFullName());