///Users/timothytan/mongodb/bin/mongod --dbpath=/Users/timothytan/mongodb-data
const app = require('./app')

const port = process.env.PORT 

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
