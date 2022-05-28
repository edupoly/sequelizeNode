const db = require("./models/index");
const Tutorial = db.tutorials;
const sequelize = db.sequelize;
async function createTutorial(tutorial) {
  const t = await sequelize.transaction();
  try {
    const tutorialStep1 = await Tutorial.create(tutorial, { transaction: t });
    await t.commit();
  } catch (error) {
    await t.rollback();
  }
}

module.exports = createTutorial;

// Tutorial.create(tutorial)
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((err) => {
//       console.log("err::", err);
//     });
