require("../src/db/mongoose");
const User = require("../src/models/user");

// 5cac90c73bc7ee20b64f2b1d

// User.findByIdAndUpdate('5cac93b1597c8f214cf2a1a3', {age: 1}).then(user => {
//     console.log(user)
//     return User.countDocuments({ age: 1})
// }).then((result) => {
//     console.log(result)
// }).catch(e => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};

updateAgeAndCount("5cac93b1597c8f214cf2a1a3", 2)
  .then(count => {
    console.log(count);
  })
  .catch(e => {
    console.log(e);
  });
