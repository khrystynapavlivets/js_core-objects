"use strict";

/*
  Завдання 1.
  
  Написати розв’язок нижче описаного завдання, кожне завдання окремий рядок коду:
  
  1. Створіть порожній об'єкт person.
  
  2. Додайте властивість firstName зі значенням Ivan.
  
  3. Додайте властивість secondName зі значенням Ivanov.
  
  4. Додайте метод showData яка буде виводити в console.log() ім’я та прізвище.
  
  5. Скопіюйте об'єкт person в об'єкт newPerson.
  
  6. Поміняйте в newPerson властивість firstName на Petro.
  
  7. Поміняйте в newPerson властивість secondName на Petriv.
  
  8. Запустіть метод showData з person і newPerson, результат має бути наступним:
  
  person.showData() – має повернути Ivan Ivanov
  
  newPerson.showData() – має повернути Petro Petriv
  
  ------------------------------------------------------------------------------------------
  */

// const person = {};
// person.firstName = "Ivan",
//   person.secondName = "Ivanov",
//   person.showData = function () {
//     console.log(this.firstName + " " + this.secondName);
//   };

// person.showData();
// const newPerson = Object.assign({}, person);
// newPerson.firstName = "Petro";
// newPerson.secondName = "Petriv";
// newPerson.showData();
/*
  Завдання 2.

  Написати розв’язок нижче описаного завдання, кожне завдання окремий рядок коду:

  1. Створіть порожній об'єкт MyMath.

  2. Cтворіть властивість a зі значенням 5.

  3. Cтворіть властивість b зі значенням 2.

  4. Створіть 4 методи які будуть робити наступне:

  a. sum – обчислює суму a+b та повертає значення console.log().

  b. multiplication – обчислює множення a*b та повертає значення console.log().

  c. division – обчислює ділення a/b та повертає значення console.log().

  d. subtraction – обчислює віднімання a-b та повертає значення console.log().



  Запустіть кожен з цих методів, результат має бути наступним:

  MyMath.sum() – має повернути 5 + 2 = 7

  MyMath.multiplication() – має повернути 5 * 2 = 10

  MyMath.division() – має повернути 5 / 2 = 2.5

  MyMath.subtraction() – має повернути 5 - 2 = 3

  ------------------------------------------------------------------------------------------
  */
// const MyMath = {}
//   MyMath.a = 5,
//   MyMath.b = 2,
//   MyMath.sum = function () {
//     this.result = this.a + this.b;
//     console.log(this.result);
//   },
//   MyMath.multiplication = function () {
//     this.result2 = this.a * this.b;
//     console.log(this.result2);
//   },
//   MyMath.division = function () {
//     this.result3 = this.a / this.b;
//     console.log(this.result3);
//   },
//   MyMath.subtraction = function () {
//     this.result4 = this.a - this.b;
//     console.log(this.result4);
//   }

// MyMath.sum();
// MyMath.multiplication();
// MyMath.division();
// MyMath.subtraction();
