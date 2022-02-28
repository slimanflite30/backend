const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });
// const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.PASSWORD);

// console.log(DB);
mongoose
  .connect(
    'mongodb+srv://sliman:sliman123@cluster0.a1qwt.mongodb.net/eductions?retryWrites=true&w=majority',
    {
      useNewUrlParser: true
    }
  )
  .then(() => {
    console.log('DB Conection Success');
  })
  .catch(err => {
    console.log(err);
  });
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
