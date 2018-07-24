const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({
    //   name: "fktrctq",
    //   age: 30
    // });
    reject("something went wrong");
  }, 5000);
});

console.log("before");

promise
  .then(data => {
    console.log("1", data);
  })
  .catch(err => {
    console.log(err);
  });

console.log("after");
