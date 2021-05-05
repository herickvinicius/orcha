const mongoose = require('mongoose');

mongoose.connect(`${process.env.DB_SOCKET}${process.env.DB_PATH}${process.env.DB_NAME}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(res => {
  const message = "Database connected."
  console.log("\x1b[32m", message, "\x1b[0m")
}).catch(error => {
  const message = "Coudn't connect to database."
  console.log("\x1b[41m%s\x1b[37m", message, "\x1b[0m")
});

mongoose.Promise = global.Promise

module.exports = mongoose