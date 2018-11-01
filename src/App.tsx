import React from "react";

class Student {
  fullName: string;
  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string
  ) {
    this.fullName = `${firstName} ${middleInitial} ${lastName}`;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

const App = () => {
  function greet(person: Person) {
    return `Hello, ${person.firstName} ${person.lastName}`;
  }

  const user = new Student("Jane", "M.", "User");
  const greetText = greet(user);

  return <div className="App">{greetText}</div>;
};

export default App;
