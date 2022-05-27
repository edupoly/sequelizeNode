const db = require("./app.js");
const Tutorial = db.tutorials;
const tutorial = {
  title: "expressjs book",
  description: "not a bad technology",
  published: true,
};
// Save Tutorial in the database
Tutorial.create(tutorial)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("err::", err);
  });
