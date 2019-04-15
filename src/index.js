//c/Users/timothytan/mongodb/bin/mongod --dbpath=/Users/timothytan/mongodb-data

const express = require("express");
require("./db/mongoose");

const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//   if(req.method === 'GET'){
//     res.send('GETs are disabled')
//   }else {
//     next()
//   }
// })

// app.use((req, res, next) =>{
//   res.status(503).send('Site is down')
// })

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
const Task = require('./models/task')
const User = require('./models/user')
const main = async () => {
  // const task = await Task.findById('5cb4a21593ba063ac2d51b59')
  // await task.populate('owner').execPopulate()
  // console.log(task.owner)

  const user = await User.findById('5cb4a131b08a373a68680890')
  await user.populate('tasks').execPopulate()
  console.log(user.tasks)

}

main()