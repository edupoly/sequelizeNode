const db = require("./app.js");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;
const tutorial = {
  title: "js basics",
  description: "nice to go",
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
