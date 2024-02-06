function Obj(){
    this.draw = function(){
        console.log("hello")
    }
}

obj = new Obj()
console.log(obj)

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`)
    }
}

const person1 = new Person("Bob", 25);
console.log(person1)