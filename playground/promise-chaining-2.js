require("../src/db/mongoose");
const Task = require("../src/models/task");



// User.findByIdAndDelete("5cac83001c1a2c1ce33199a1")
//   .then(() => {
//     return Task.countDocuments({ completed: false });
//   })
//   .then(result => {
//     console.log(result);
//   })
//   .catch(e => {
//     console.log(e);
//   });


  const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({ completed: false });
    return count;
  };

  deleteTaskAndCount("5cac9687a659aa220807630c")
  .then(count => {
    console.log(count);
  })
  .catch(e => {
    console.log(e);
  });