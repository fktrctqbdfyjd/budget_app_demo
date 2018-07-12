//OBJECTS

// const person = {
//   name: "fktrctq",
//   age: 30,
//   location: {
//     city: "samara",
//     temp: 40
//   }
// };

// const { name: firstName = "default", age, location } = person;
// const { city, temp: temperature } = person.location;

// console.log(`${name} is ${age}`);
// console.log(`${city} is at ${temperature}`);

// const book = {
//   title: "test book",
//   author: "fktrctq",
//   publisher: {
//     name: "lolkek"
//   }
// };

// const { name: publisherName = "self-published" } = book.publisher;

// console.log(publisherName);

//ARRAYS

// const adress = ["random street 123", "samara", "russia", "44300"];

// const [, , country = "wonderland"] = adress;

// console.log(`you are in ${country}`);

const item = ["coffee ice", "3$", "3.5$", "3.75"];

const [product, , mediumCost] = item;

console.log(`A medium ${product} costs ${mediumCost}`);
