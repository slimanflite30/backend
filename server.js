const mongoose = require('mongoose');
const dotenv = require('dotenv');

process.on('uncaughtException', err => {
  console.log(err.name, err.message);

  process.exit(1);
});
const app = require('./app');

dotenv.config({ path: './config.env' });
// const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.PASSWORD);

// console.log(DB);
mongoose
  .connect(
    'mongodb+srv://sliman:sliman123@cluster0.a1qwt.mongodb.net/eductions?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  )
  .then(() => {
    console.log('DB Conection Success');
  })
  .catch(err => {
    console.log(err);
  });
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
process.on('unhandledRejection', err => {
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
